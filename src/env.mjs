import { createEnv } from "@t3-oss/env-nextjs"
import { z } from "zod"

export const env = createEnv({
  server: {
    DATABASE_URL: z.string().url().default("postgres://postgres:postgres@localhost:5432/postgres"),
    DATABASE_URL_STAGING: z
      .string()
      .url()
      .default("postgres://postgres:postgres@localhost:5432/postgres"),
    NODE_ENV: z.enum(["development", "test", "production"]).default("development"),
    NEXTAUTH_URL: z.string().url().default("http://localhost:3000"),
    NEXTAUTH_SECRET: z.string(),
    VERCEL_URL: z.string().default("localhost:3000"),
    AUTH_GOOGLE_ID: z.string(),
    AUTH_GOOGLE_SECRET: z.string(),
  },
  client: {
    NEXTAUTH_URL: z.string(),
  },
  // For Next.js >= 13.4.4, you only need to destructure client variables:
  experimental__runtimeEnv: {},
})
