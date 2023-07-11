import {
  mysqlEnum,
  mysqlTable,
  serial,
  text,
  timestamp,
  varchar,
  int,
  primaryKey
} from 'drizzle-orm/mysql-core'
import { relations, InferModel } from 'drizzle-orm'
import { createSelectSchema } from 'drizzle-zod'
import { AdapterAccount } from '@auth/core/adapters'

export const users = mysqlTable('users', {
  id: varchar('id', { length: 255 }).notNull().primaryKey(),
  name: varchar('name', { length: 255 }),
  email: varchar('email', { length: 255 }).notNull(),
  emailVerified: timestamp('emailVerified', { mode: 'date' }),
  image: varchar('image', { length: 255 })
})

export type UserModel = InferModel<typeof users, 'select'>
export const selectUserSchema = createSelectSchema(users)

export const accounts = mysqlTable(
  'accounts',
  {
    userId: varchar('userId', { length: 255 }).notNull(),
    type: varchar('type', { length: 255 }).$type<AdapterAccount['type']>().notNull(),
    provider: varchar('provider', { length: 255 }).notNull(),
    providerAccountId: varchar('providerAccountId', { length: 255 }).notNull(),
    refresh_token: varchar('refresh_token', { length: 255 }),
    access_token: varchar('access_token', { length: 255 }),
    expires_at: int('expires_at'),
    token_type: varchar('token_type', { length: 255 }),
    scope: varchar('scope', { length: 255 }),
    id_token: text('id_token'),
    session_state: varchar('session_state', { length: 255 })
  },
  (account) => ({
    compoundKey: primaryKey(account.provider, account.providerAccountId)
  })
)

export const sessions = mysqlTable('sessions', {
  sessionToken: varchar('sessionToken', { length: 255 }).notNull().primaryKey(),
  userId: varchar('userId', { length: 255 }).notNull(),
  expires: timestamp('expires', { mode: 'date' }).notNull()
})

export const verificationTokens = mysqlTable(
  'verificationToken',
  {
    identifier: varchar('identifier', { length: 255 }).notNull(),
    token: varchar('token', { length: 255 }).notNull(),
    expires: timestamp('expires', { mode: 'date' }).notNull()
  },
  (vt) => ({
    compoundKey: primaryKey(vt.identifier, vt.token)
  })
)

export const usersRelations = relations(users, ({ one }) => ({
  cart: one(carts, {
    fields: [users.id],
    references: [carts.user_id]
  })
}))

export const carts = mysqlTable('carts', {
  id: serial('id').primaryKey(),
  user_id: varchar('user_id', { length: 255 }).notNull()
})

export const cartsRelations = relations(carts, ({ one }) => ({
  user: one(users, {
    fields: [carts.user_id],
    references: [users.id]
  })
}))

export const exams = mysqlTable('exams', {
  id: serial('id').primaryKey(),
  name: varchar('name', { length: 255 }).notNull(),
  preparation: text('preparation').notNull(),
  type: mysqlEnum('type', ['images', 'laboratory']).notNull()
})

export const examsRelations = relations(exams, ({ many }) => ({
  tags: many(tags),
  categories: many(categories)
}))

export const categories = mysqlTable('categories', {
  id: serial('id').primaryKey(),
  name: varchar('name', { length: 255 }).notNull()
})

export const categoriesRelations = relations(categories, ({ one }) => ({
  exams: one(exams, {
    fields: [categories.id],
    references: [exams.id]
  })
}))

export const categoriesToExams = mysqlTable('categoriesToExams', {
  id: serial('id').primaryKey(),
  category_id: varchar('category_id', { length: 255 }).notNull(),
  exam_id: varchar('exam_id', { length: 255 }).notNull()
})

export const tags = mysqlTable('tags', {
  id: serial('id').primaryKey(),
  name: varchar('name', { length: 255 }).notNull()
})

export const tagsRelations = relations(tags, ({ one }) => ({
  exams: one(exams, {
    fields: [tags.id],
    references: [exams.id]
  })
}))

export const tagsToExams = mysqlTable('tagsToExams', {
  id: serial('id').primaryKey(),
  tag_id: varchar('tag_id', { length: 255 }).notNull(),
  exam_id: varchar('exam_id', { length: 255 }).notNull()
})

export const tagsToExamsRelations = relations(tagsToExams, ({ one }) => ({
  tags: one(tags, {
    fields: [tagsToExams.tag_id],
    references: [tags.id]
  }),
  exams: one(exams, {
    fields: [tagsToExams.exam_id],
    references: [exams.id]
  })
}))
