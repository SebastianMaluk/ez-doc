import { connect } from '@planetscale/database'
import { drizzle } from 'drizzle-orm/planetscale-serverless'
import { env } from '@/env.mjs'

const connection = connect({
  url: env.DATABASE_URL_STAGING
})

export const db = drizzle(connection)
