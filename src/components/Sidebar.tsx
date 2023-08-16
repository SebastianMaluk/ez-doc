import * as React from "react"

import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { HamburgerMenuIcon } from "@radix-ui/react-icons"
import { Session } from "next-auth"
import { Separator } from "@/components/ui/separator"
import AuthOnNavbar from "./AuthOnNavbar"
import { ModeToggle } from "./mode-toggle"

export interface SidebarProps {
  children?: React.ReactNode
  session?: Session
}

export function Sidebar({ children }: SidebarProps) {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant='ghost' className='-ml-2 h-9 w-9 p-0'>
          <HamburgerMenuIcon className='w-12 h-12 text-slate-100' />
          <span className='sr-only'>Toggle Sidebar</span>
        </Button>
      </SheetTrigger>
      <SheetContent
        className='inset-y-0 flex h-auto w-full flex-col mb-30 dark:bg-slate-800 dark:border-slate-800'
        side={"right"}
      >
        <SheetHeader className='flex flex-col items-center justify-center'>
          <SheetTitle className='text-3xl'>Easy Doctor</SheetTitle>
          <Separator className='dark:bg-slate-100' />
        </SheetHeader>
        {children}
        <SheetFooter className='flex flex-row items-center justify-center gap-4 ml-10'>
          <AuthOnNavbar />
          <ModeToggle />
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}
