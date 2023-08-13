/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { db } from "@/server/db"
import * as schema from "@/server/db/schema"
import { eq } from "drizzle-orm"
import { getServerSession, NextAuthOptions } from "next-auth"
import { Adapter } from "next-auth/adapters"
import GoogleProvider from "next-auth/providers/google"

import { PlanetScaleAdapter, users } from "./adapters"

export const authOptions: NextAuthOptions = {
  adapter: PlanetScaleAdapter(db, schema) as Adapter,
  session: {
    strategy: "jwt",
  },
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
  pages: {
    signIn: "/auth/signin",
  },
  callbacks: {
    async session({ token, session }) {
      if (token && session.user) {
        session.user.id = token.id
        session.user.name = token.name
        session.user.email = token.email
      }
      return session
    },

    async jwt({ token, user }) {
      const dbUser = await db.select().from(users).where(eq(users.email, token.email)).limit(1)

      if (!dbUser[0]) {
        token.id = user.id
        return token
      }

      return {
        id: dbUser[0].id,
        name: dbUser[0].name,
        email: dbUser[0].email,
      }
    },
    redirect() {
      return "/"
    },
  },
}

export const getAuthSession = () => getServerSession(authOptions)
