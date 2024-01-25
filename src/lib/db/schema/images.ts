import { relations } from "drizzle-orm"
import { int, mysqlTable, varchar, boolean } from "drizzle-orm/mysql-core"
import { exams } from "./exams"

export const images = mysqlTable("images", {
  exam_id: int("exam_id").notNull(),
  laterality: varchar("laterality", { length: 255 }),
  contrast: boolean("contrast").notNull(),
})

export const imagesRelations = relations(images, ({ one }) => ({
  exams: one(exams, {
    fields: [images.exam_id],
    references: [exams.id],
  }),
}))
