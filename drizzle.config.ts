import type { Config } from "drizzle-kit"
import "dotenv/config"

if (!process.env.DATABASE_URL) {
  throw new Error("DATABASE_URL environment variable not set")
}

export default {
  schema: "./src/lib/db/index.ts",
  driver: "mysql2",
  dbCredentials: {
    uri: process.env.DATABASE_URL,
  },
} satisfies Config
