/* eslint-disable @typescript-eslint/no-unused-vars */
import type { Session, User } from 'next-auth'
import type { JWT } from 'next-auth/jwt'
import type { UserModel as UserDrizzle } from '@/server/db/schema'

type UserId = string

declare module 'next-auth/jwt' {
  export interface JWT {
    id: UserId
    email: string
  }
}

declare module 'next-auth' {
  interface Session {
    user: User & {
      id: UserId
    }
  }
}
