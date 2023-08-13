import { FC } from "react"
import { db } from "@/server/db"
import { exams, images, tags, tagsToExams } from "@/server/db/schema"
import { eq } from "drizzle-orm"

import Exam from "@/components/Exam"

interface pageProps {
  params: {
    id: number
  }
}

const page: FC<pageProps> = async ({ params }: pageProps) => {
  const examQuery = await db
    .select({
      name: exams.name,
      description: exams.description,
      preparation: exams.preparation,
      type: exams.type,
      tag: tags.name,
      laterality: images.laterality,
      contrast: images.contrast,
    })
    .from(exams)
    .innerJoin(tagsToExams, eq(tagsToExams.exam_id, exams.id))
    .innerJoin(tags, eq(tagsToExams.tag_id, tags.id))
    .leftJoin(images, eq(images.exam_id, exams.id))
    .where(eq(exams.id, params.id))
  const examFound = examQuery[0]
  return (
    <div>
      <Exam exam={examFound} />
    </div>
  )
}

export default page
