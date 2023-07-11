'use client'
import { FC } from 'react'
import { cn } from '@/lib/utils'
import { buttonVariants } from '@/components/ui/Button'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const AuthOnNavbar: FC = () => {
  const pathname = usePathname()
  console.log(pathname)
  return (
    <>
      {pathname?.includes('sign-in') ? (
        <></>
      ) : (
        <Link href={`/sign-in`} className={cn(buttonVariants(), 'dark:bg-slate-400')}>
          <p className='dark:text-slate-800 text-xl font-medium cursor-pointer'>Ingresar</p>
        </Link>
      )}
    </>
  )
}

export default AuthOnNavbar
