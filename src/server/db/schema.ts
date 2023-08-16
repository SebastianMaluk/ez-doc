import { AdapterAccount } from "@auth/core/adapters"
import { InferModel, relations } from "drizzle-orm"
import {
  boolean,
  int,
  mysqlEnum,
  mysqlTable,
  primaryKey,
  serial,
  text,
  timestamp,
  varchar,
} from "drizzle-orm/mysql-core"
import { createSelectSchema } from "drizzle-zod"

export const users = mysqlTable("users", {
  id: varchar("id", { length: 255 }).notNull().primaryKey(),
  name: varchar("name", { length: 255 }),
  email: varchar("email", { length: 255 }).notNull(),
  emailVerified: timestamp("emailVerified", { mode: "date" }),
  image: varchar("image", { length: 255 }),
})

export type UserModel = InferModel<typeof users, "select">
export const selectUserSchema = createSelectSchema(users)

export const accounts = mysqlTable(
  "accounts",
  {
    userId: varchar("userId", { length: 255 }).notNull(),
    type: varchar("type", { length: 255 }).$type<AdapterAccount["type"]>().notNull(),
    provider: varchar("provider", { length: 255 }).notNull(),
    providerAccountId: varchar("providerAccountId", { length: 255 }).notNull(),
    refresh_token: varchar("refresh_token", { length: 255 }),
    access_token: varchar("access_token", { length: 255 }),
    expires_at: int("expires_at"),
    token_type: varchar("token_type", { length: 255 }),
    scope: varchar("scope", { length: 255 }),
    id_token: text("id_token"),
    session_state: varchar("session_state", { length: 255 }),
  },
  (account) => ({
    compoundKey: primaryKey(account.provider, account.providerAccountId),
  })
)

export const sessions = mysqlTable("sessions", {
  sessionToken: varchar("sessionToken", { length: 255 }).notNull().primaryKey(),
  userId: varchar("userId", { length: 255 }).notNull(),
  expires: timestamp("expires", { mode: "date" }).notNull(),
})

export const verificationTokens = mysqlTable(
  "verificationToken",
  {
    identifier: varchar("identifier", { length: 255 }).notNull(),
    token: varchar("token", { length: 255 }).notNull(),
    expires: timestamp("expires", { mode: "date" }).notNull(),
  },
  (vt) => ({
    compoundKey: primaryKey(vt.identifier, vt.token),
  })
)

export const usersRelations = relations(users, ({ one }) => ({
  cart: one(carts, {
    fields: [users.id],
    references: [carts.user_id],
  }),
}))

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

export const exams = mysqlTable("exams", {
  id: serial("id").primaryKey(),
  name: varchar("name", { length: 255 }).notNull(),
  description: text("description").notNull(),
  preparation: text("preparation"),
  type: mysqlEnum("type", ["image", "laboratory", "other"]).notNull(),
})

export type ExamModel = InferModel<typeof exams, "select">

export const examsRelations = relations(exams, ({ one, many }) => ({
  tags: many(tags),
  images: one(images, {
    fields: [exams.id],
    references: [images.exam_id],
  }),
  examsToCarts: many(examsToCarts),
}))

export const images = mysqlTable("images", {
  exam_id: int("exam_id").notNull(),
  laterality: varchar("laterality", { length: 255 }),
  contrast: boolean("contrast").notNull(),
})

export const labsRelations = relations(images, ({ one }) => ({
  exams: one(exams, {
    fields: [images.exam_id],
    references: [exams.id],
  }),
}))

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

export const tags = mysqlTable("tags", {
  id: serial("id").primaryKey(),
  name: varchar("name", { length: 255 }).notNull(),
  description: text("description"),
  category_id: int("category_id")
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

export const examsToOrders = mysqlTable("examsToOrders", {
  order_id: int("order_id").notNull(),
  exam_id: int("exam_id").notNull(),
})
