import Link from 'next/link'
import { Icons } from './Icons'

const Navbar = () => {
  return (
    <div className="fixed top-0 inset-x-0 bg-indigo-500 border-b border-indigo-300 z-10 py-2">
      <div className="container max-w-7xl h-full mx-auto flex items-center justify-between gap-2">
        <Link href="/" className="flex gap-2 items-center">
          <Icons.logo className="w-12 h-12 sm:h-8 sm:w-8" />
          <p className="hidden text-slate-100 text-3xl font-medium md:block">Easy Doctor</p>
        </Link>
      </div>
    </div>
  )
}

export default Navbar
