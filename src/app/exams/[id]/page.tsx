import { FC } from "react"
import { db } from "@/server/db"
import { ExamModel, categories, exams, images, tags, tagsToExams } from "@/server/db/schema"
import { eq } from "drizzle-orm"

import Exam from "@/components/Exam"

interface pageProps {
  params: {
    id: number
  }
}

type ExamWithTags = Omit<ExamModel, "id"> & {
  category: string
  laterality: string | null
  contrast: boolean | null
  tags: string[]
}

const page: FC<pageProps> = async ({ params }: pageProps) => {
  const examQuery = await db
    .select({
      name: exams.name,
      description: exams.description,
      preparation: exams.preparation,
      type: exams.type,
      category: categories.name,
      laterality: images.laterality,
      contrast: images.contrast,
    })
    .from(exams)
    .innerJoin(tagsToExams, eq(tagsToExams.exam_id, exams.id))
    .innerJoin(tags, eq(tagsToExams.tag_id, tags.id))
    .innerJoin(categories, eq(categories.id, tags.category_id))
    .leftJoin(images, eq(images.exam_id, exams.id))
    .where(eq(exams.id, params.id))
  const examFound = examQuery[0]
  const examTags = await db
    .select({
      tag: tags.name,
    })
    .from(tags)
    .innerJoin(tagsToExams, eq(tagsToExams.tag_id, tags.id))
    .innerJoin(exams, eq(tagsToExams.exam_id, exams.id))
    .where(eq(exams.id, params.id))

  const examWithTags: ExamWithTags = {
    ...examFound,
    tags: examTags.map((tag) => tag.tag),
  }

  return <Exam exam={examWithTags} />
}

export default page
