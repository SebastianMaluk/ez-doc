import Google from "@auth/core/providers/google"
import NextAuth from "next-auth"

export const {
  handlers: { GET, POST },
  auth,
} = NextAuth({
  providers: [Google],
  trustHost: true,
  secret: process.env.AUTH_SECRET,
})
