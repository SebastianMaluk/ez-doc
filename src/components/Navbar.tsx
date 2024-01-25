import { Route } from "next"
import Link from "next/link"
import { Stethoscope } from "lucide-react"

import AuthOnNavbar from "./AuthOnNavbar"
import { ModeToggle } from "./mode-toggle"
import UserAccountNav from "./UserAccountNav"
import { Sidebar } from "./Sidebar"
import SidebarList from "./SidebarList"
import { auth } from "@/lib/auth"

const Navbar = async () => {
  const session = await auth()
  return (
    <div className='relative top-0 inset-x-0 bg-indigo-500 dark:bg-slate-800 z-10 py-2'>
      <div className='container max-w-7xl h-full mx-auto flex items-center justify-between gap-2'>
        {/* Desktop */}
        <div className='hidden md:flex'>
          <Link href={"/" as Route} className='flex flex-row gap-2 items-center'>
            <Stethoscope className='w-12 h-12 sm:h-8 sm:w-8 stroke-slate-100' />
            <p className='hidden text-slate-100 text-3xl font-medium md:block'>Easy Doctor</p>
          </Link>
        </div>
        <div className='hidden md:flex gap-4 items-end'>
          {session?.user ? <UserAccountNav user={session.user} /> : <AuthOnNavbar />}
          <ModeToggle />
        </div>

        {/* Mobile */}
        <div className='flex md:hidden'>
          <Link href={"/" as Route} className='flex flex-row gap-2 items-center'>
            <Stethoscope className='w-12 h-12 sm:h-8 sm:w-8 stroke-slate-100' />
            <p className='hidden text-slate-100 text-3xl font-medium md:block'>Easy Doctor</p>
          </Link>
        </div>
        <div className='flex md:hidden gap-4 items-end'>
          <Sidebar>
            <SidebarList />
          </Sidebar>
        </div>
      </div>
    </div>
  )
}

export default Navbar
