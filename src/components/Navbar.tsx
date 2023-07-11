import Link from 'next/link'
import { Icons } from './Icons'
import { ModeToggle } from './ui/mode-toggle'
import UserAccountNav from './UserAccountNav'
import { buttonVariants } from './ui/Button'
import { cn } from '@/lib/utils'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import AuthOnNavbar from './AuthOnNavbar'

const Navbar = async () => {
  const session = await getServerSession(authOptions)

  return (
    <div className='relative top-0 inset-x-0 bg-indigo-500 dark:bg-slate-800 border-b border-indigo-300 z-10 py-2'>
      <div className='container max-w-7xl h-full mx-auto flex items-center justify-between gap-2'>
        <Link href='/' className='flex flex-row gap-2 items-center'>
          <Icons.logo className='w-12 h-12 sm:h-8 sm:w-8 stroke-slate-100' />
          <p className='hidden text-slate-100 text-3xl font-medium md:block'>Easy Doctor</p>
        </Link>
        <div className='flex gap-4 items-center'>
          {session?.user ? <UserAccountNav user={session.user} /> : <AuthOnNavbar />}
          <ModeToggle />
        </div>
      </div>
    </div>
  )
}

export default Navbar
