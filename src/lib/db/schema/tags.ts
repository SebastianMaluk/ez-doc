import { InferModel, relations } from "drizzle-orm"
import { int, mysqlTable, serial, text, varchar } from "drizzle-orm/mysql-core"
import { exams } from "./exams"
import { categories } from "./categories"

export const tags = mysqlTable("tags", {
  id: serial("id").primaryKey(),
  name: varchar("name", { length: 255 }).notNull(),
  description: text("description"),
  category_id: int("category_id"),
})

export type TagModel = InferModel<typeof tags, "select">

export const tagsRelations = relations(tags, ({ one }) => ({
  exams: one(exams, {
    fields: [tags.id],
    references: [exams.id],
  }),
  categories: one(categories, {
    fields: [tags.category_id],
    references: [categories.id],
  }),
}))
