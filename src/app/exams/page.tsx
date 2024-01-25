import { db } from "@/lib/db"
import { categories } from "@/lib/db/schema/categories"
import { exams } from "@/lib/db/schema/exams"
import { tags } from "@/lib/db/schema/tags"
import { tagsToExams } from "@/lib/db/schema/tagsToExams"
import { eq } from "drizzle-orm"

import { DataTable } from "@/components/ui/data-table"

import { columns } from "./columns"

async function getData() {
  const labsQuery = await db
    .select({
      id: exams.id,
      name: exams.name,
      category: categories.name,
    })
    .from(exams)
    .innerJoin(tagsToExams, eq(tagsToExams.exam_id, exams.id))
    .innerJoin(tags, eq(tagsToExams.tag_id, tags.id))
    .innerJoin(categories, eq(categories.id, tags.category_id))
  return labsQuery
}

const page = async () => {
  const data = await getData()
  return (
    <div className='mx-auto py-10 max-h-fit'>
      <DataTable columns={columns} data={data} />
    </div>
  )
}

export default page
