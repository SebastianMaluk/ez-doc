import Link from 'next/link'
import type { Route } from 'next'
import { Icons } from './Icons'
import UserAuthForm from './UserAuthForm'

const SignUp = () => {
  return (
    <div className='container mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[400px]'>
      <div className='flex flex-col space-y-2 text-center'>
        <Icons.logo className='mx-auto h-12 w-12' />
        <h1 className='text-2xl font-semibold tracking-tight'>Bienvenido a ez doc</h1>

        {/* sign in form */}
        <UserAuthForm />
        <p className='px-8 text-center text-sm text-slate-800 dark:text-slate-300'>
          ¿Ya tienes una cuenta?{' '}
          <Link
            href={'/sign-up' as Route}
            className='text-slate-900 dark:text-slate-300 text-sm underline underline-offset-4'
          >
            Ingresa
          </Link>
        </p>
      </div>
    </div>
  )
}

export default SignUp
