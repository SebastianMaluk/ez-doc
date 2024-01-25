import { relations } from "drizzle-orm"
import { int, mysqlEnum, mysqlTable, serial, timestamp, varchar } from "drizzle-orm/mysql-core"
import { users } from "./auth"
import { examsToOrders } from "./examsToOrders"

export const orders = mysqlTable("orders", {
  id: serial("id").primaryKey(),
  user_id: varchar("user_id", { length: 255 }).notNull(),
  purchase_date: timestamp("purchase_date", { mode: "date" }).notNull(),
  payment_status: mysqlEnum("payment_status", ["pending", "paid", "canceled", "failed"]).notNull(),
  amount: int("amount").notNull(),
})

export const ordersRelations = relations(orders, ({ one, many }) => ({
  user: one(users, {
    fields: [orders.user_id],
    references: [users.id],
  }),
  examsToOrders: many(examsToOrders),
}))
