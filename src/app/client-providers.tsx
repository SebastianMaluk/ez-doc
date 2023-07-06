"use client";
// TODO: uncomment when Clerk is ready
// import { ClerkProvider } from "@clerk/nextjs/app-beta/client"
import { api } from "@/lib/api/client"
import { PropsWithChildren } from "react";
import { env } from "@/env.mjs"

export function ClientProviders({ children }: PropsWithChildren) {
  return (
    // <ClerkProvider publishableKey={env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY}>
      <api.Provider>{children}</api.Provider>
    // </ClerkProvider>
  )
}