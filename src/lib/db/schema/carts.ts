import { relations } from "drizzle-orm"
import { mysqlTable, serial, varchar } from "drizzle-orm/mysql-core"
import { users } from "./auth"
import { examsToCarts } from "./examsToCarts"

export const carts = mysqlTable("carts", {
  id: serial("id").primaryKey(),
  user_id: varchar("user_id", { length: 255 }).notNull(),
})

export const cartsRelations = relations(carts, ({ one, many }) => ({
  user: one(users, {
    fields: [carts.user_id],
    references: [users.id],
  }),
  examsToCarts: many(examsToCarts),
}))
