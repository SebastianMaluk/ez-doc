import { type NextRequest } from "next/server";
// import { getAuth } from "@clerk/nextjs/server";
import { fetchRequestHandler } from "@trpc/server/adapters/fetch";
import { createContextInner } from "@/server/api/context";
import { appRouter } from "@/server/api/root";
import dotenv from "dotenv";
dotenv.config();

export default function handler(req: NextRequest) {
  return fetchRequestHandler({
    req,
    endpoint: "/api/trpc",
    router: appRouter,
    createContext() {
      // TODO: add auth to context
      // const auth = getAuth(req);
      return createContextInner({
        req,
        // auth,
      });
    },
    onError:
      process.env.NODE_ENV === "development"
        ? ({ path, error }) => {
            console.error(
              `❌ tRPC failed on ${path ?? "<no-path>"}: ${error.message}`
            );
          }
        : undefined,
  });
}

export const runtime = "experimental-edge";