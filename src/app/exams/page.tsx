import { FC } from "react"
import { db } from "@/server/db"
import { exams, tags, tagsToExams } from "@/server/db/schema"
import { eq } from "drizzle-orm"

import { DataTable } from "@/components/ui/data-table"

import { columns } from "./columns"

async function getData() {
  const labsQuery = await db
    .select({
      id: exams.id,
      name: exams.name,
      tag: tags.name,
    })
    .from(exams)
    .innerJoin(tagsToExams, eq(tagsToExams.exam_id, exams.id))
    .innerJoin(tags, eq(tagsToExams.tag_id, tags.id))
    .where(eq(exams.type, "laboratory"))
  return labsQuery
}

const page: FC = async () => {
  const data = await getData()
  return (
    <div className='mx-auto py-10 max-h-fit'>
      <DataTable columns={columns} data={data} />
    </div>
  )
}

export default page
