import { InferModel, relations } from "drizzle-orm"
import { mysqlTable, serial, text, varchar } from "drizzle-orm/mysql-core"
import { tags } from "./tags"

export const categories = mysqlTable("categories", {
  id: serial("id").primaryKey(),
  name: varchar("name", { length: 255 }).notNull(),
  description: text("description"),
})

export type CategoryModel = InferModel<typeof categories, "select">

export const categoriesRelations = relations(categories, ({ one }) => ({
  tags: one(tags, {
    fields: [categories.id],
    references: [tags.category_id],
  }),
}))
