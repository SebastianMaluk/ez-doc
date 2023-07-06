import type { Config } from "drizzle-kit";
import dotenv from "dotenv";
dotenv.config(); 

if (!process.env.DATABASE_URL) {
  throw new Error("DATABASE_URL environment variable not set");
}

export default {
  schema: "./src/server/db/schema.ts",
  driver: "mysql2",
  dbCredentials: {
    connectionString: process.env.DATABASE_URL
  }
} satisfies Config;