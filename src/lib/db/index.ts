import { env } from "@/env.mjs"
import { connect } from "@planetscale/database"
import { drizzle } from "drizzle-orm/planetscale-serverless"

import * as auth from "@/lib/db/schema/auth"
import * as exams from "@/lib/db/schema/exams"
import * as examsToOrders from "@/lib/db/schema/examsToOrders"
import * as orders from "@/lib/db/schema/orders"
import * as images from "@/lib/db/schema/images"
import * as tags from "@/lib/db/schema/tags"

const connection = connect({
  url: env.DATABASE_URL_STAGING,
})

export const db = drizzle(connection, {
  schema: {
    ...auth,
    ...exams,
    ...examsToOrders,
    ...orders,
    ...images,
    ...tags,
  },
})

export type DbClient = typeof db
