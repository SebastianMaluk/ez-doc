import { relations } from "drizzle-orm"
import { int, mysqlTable } from "drizzle-orm/mysql-core"
import { exams } from "./exams"
import { orders } from "./orders"

export const examsToOrders = mysqlTable("examsToOrders", {
  order_id: int("order_id").notNull(),
  exam_id: int("exam_id").notNull(),
})

export const examsToOrdersRelations = relations(examsToOrders, ({ one }) => ({
  exams: one(exams, {
    fields: [examsToOrders.exam_id],
    references: [exams.id],
  }),
  orders: one(orders, {
    fields: [examsToOrders.order_id],
    references: [orders.id],
  }),
}))
