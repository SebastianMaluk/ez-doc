import { Route } from "next"
import Link from "next/link"

import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import SignIn from "@/components/SignIn"

const page = () => {
  return (
    <div className='absolute inset-0'>
      <div className='h-full max-w-2xl mx-auto flex flex-col justify-center items-center gap-20'>
        <Link
          href={"/" as Route}
          className={cn(buttonVariants({ variant: "ghost" }), "self-start -mt-20")}
        ></Link>
        <SignIn />
      </div>
    </div>
  )
}

export default page
