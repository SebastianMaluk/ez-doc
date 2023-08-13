"use client"

// TODO: uncomment when Clerk is ready
// import { ClerkProvider } from "@clerk/nextjs/app-beta/client"
import { PropsWithChildren } from "react"
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { env } from "@/env.mjs"

import { api } from "@/lib/api/client"

export function ClientProviders({ children }: PropsWithChildren) {
  return (
    // <ClerkProvider publishableKey={env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY}>
    <api.Provider>{children}</api.Provider>
    // </ClerkProvider>
  )
}
