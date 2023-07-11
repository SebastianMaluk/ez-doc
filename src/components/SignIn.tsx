import { Icons } from './Icons'
import UserAuthForm from './UserAuthForm'

const SignIn = () => {
  return (
    <div className='container mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[400px]'>
      <div className='flex flex-col space-y-2 text-center'>
        <Icons.logo className='mx-auto h-12 w-12' />
        <h1 className='text-2xl font-semibold tracking-tight'>Bienvenido a ez doc</h1>

        {/* sign in form */}
        <UserAuthForm />
      </div>
    </div>
  )
}

export default SignIn
