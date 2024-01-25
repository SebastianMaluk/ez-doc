import Google from "@auth/core/providers/google"
import NextAuth from "next-auth"
import { env } from "@/env.mjs"

export const {
  handlers: { GET, POST },
  auth,
} = NextAuth({
  providers: [Google],
  trustHost: true,
  secret: env.NEXTAUTH_SECRET,
})
