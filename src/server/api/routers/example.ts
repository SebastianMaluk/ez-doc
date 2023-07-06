import { desc } from 'drizzle-orm'
import { z } from 'zod'
import { createTRPCRouter, protectedProcedure, publicProcedure } from '@/server/api/trpc'
import { notes } from '@/server/db/schema'

export const exampleRouter = createTRPCRouter({
  hello: publicProcedure.input(z.object({ text: z.string() })).query(({ input }) => {
    return {
      greeting: `Hello ${input.text}`
    }
  }),

  getNotes: protectedProcedure.query(({ ctx: { db } }) => {
    const data = db.select().from(notes).orderBy(desc(notes.created_at))
    return data
  })
})
