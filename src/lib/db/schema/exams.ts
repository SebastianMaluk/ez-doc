import { InferModel, relations } from "drizzle-orm"
import { mysqlEnum, mysqlTable, serial, text, varchar } from "drizzle-orm/mysql-core"
import { images } from "./images"
import { tags } from "./tags"
import { examsToCarts } from "./examsToCarts"

export const exams = mysqlTable("exams", {
  id: serial("id").primaryKey(),
  name: varchar("name", { length: 255 }).notNull(),
  description: text("description").notNull(),
  preparation: text("preparation"),
  type: mysqlEnum("type", ["image", "laboratory", "other"]).notNull(),
})

export const examsRelations = relations(exams, ({ one, many }) => ({
  tags: many(tags),
  images: one(images, {
    fields: [exams.id],
    references: [images.exam_id],
  }),
  examsToCarts: many(examsToCarts),
}))

export type ExamModel = InferModel<typeof exams, "select">
