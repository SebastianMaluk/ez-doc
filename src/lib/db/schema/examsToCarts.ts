import { relations } from "drizzle-orm"
import { int, mysqlTable } from "drizzle-orm/mysql-core"
import { carts } from "./carts"
import { exams } from "./exams"

export const examsToCarts = mysqlTable("examsToCarts", {
  cart_id: int("cart_id").notNull(),
  exam_id: int("exam_id").notNull(),
})

export const examsToCartsRelations = relations(examsToCarts, ({ one }) => ({
  carts: one(carts, {
    fields: [examsToCarts.cart_id],
    references: [carts.id],
  }),
  exams: one(exams, {
    fields: [examsToCarts.exam_id],
    references: [exams.id],
  }),
}))
