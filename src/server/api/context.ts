import type { GetServerSidePropsContext } from "next"
import type { NextRequest } from "next/server"
import { db } from "@/server/db"
// import type {
//   SignedInAuthObject,
//   SignedOutAuthObject,
// } from "@clerk/nextjs/dist/api";
// import { getAuth } from "@clerk/nextjs/server";
import type { inferAsyncReturnType } from "@trpc/server"
import type { CreateNextContextOptions } from "@trpc/server/adapters/next"

type CreateContextOptions = {
  // auth: SignedInAuthObject | SignedOutAuthObject | null;
  req: NextRequest | GetServerSidePropsContext["req"] | null
}

// TODO: add auth to context
export const createContextInner = (opts: CreateContextOptions) => {
  return {
    // auth: opts.auth,
    req: opts.req,
    db,
  }
}

export const createContext = (opts: CreateNextContextOptions) => {
  // const auth = getAuth(opts.req);
  return createContextInner({
    // auth,
    req: opts.req,
  })
}

export type Context = inferAsyncReturnType<typeof createContext>
