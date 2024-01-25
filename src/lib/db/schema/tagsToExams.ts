import { relations } from "drizzle-orm"
import { mysqlTable, varchar } from "drizzle-orm/mysql-core"
import { tags } from "./tags"
import { exams } from "./exams"

export const tagsToExams = mysqlTable("tagsToExams", {
  tag_id: varchar("tag_id", { length: 255 }).notNull(),
  exam_id: varchar("exam_id", { length: 255 }).notNull(),
})

export const tagsToExamsRelations = relations(tagsToExams, ({ one }) => ({
  tags: one(tags, {
    fields: [tagsToExams.tag_id],
    references: [tags.id],
  }),
  exams: one(exams, {
    fields: [tagsToExams.exam_id],
    references: [exams.id],
  }),
}))
