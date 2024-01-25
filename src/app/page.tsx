import Link from "next/link"
import Balancer from "react-wrap-balancer"

import { Input } from "@/components/ui/input"
import { auth } from "@/lib/auth"
export default async function Page() {
  const session = await auth()

  return (
    <div className='flex flex-col items-center justify-center py-6'>
      <div className='text-2xl text-center'>
        {session && (
          <div>
            Signed in as {session?.user?.name} <br />
          </div>
        )}
        <Balancer>
          Déjate de hacer filas, perder tiempo y dinero
          <br /> Pide tu receta online y hazte responsable de tu salud
        </Balancer>
      </div>
      <div className='flex flex-col space-y-4 pt-6'>
        <Link href='/exams' className='drop-shadow-2xl'>
          <div className='container p-4 border-4 border-indigo-500 dark:border-slate-100 bg-gradient-to-b from-indigo-500 via-indigo-400 via-70% to-slate-200 dark:to-slate-800 rounded-lg cursor-pointer'>
            <div className='text-2xl text-center'>
              <Balancer>Escoge tus exámenes</Balancer>
            </div>
          </div>
        </Link>
        <Link href='/exams' className='drop-shadow'>
          <div className='container p-4 border-4  border-indigo-500 dark:border-slate-100 bg-gradient-to-b from-indigo-500 via-indigo-400 via-70% to-slate-200 dark:to-slate-800 rounded-lg cursor-pointer'>
            <div className='text-2xl text-center'>
              <Balancer>Conoce más sobre tú cuerpo, alimentación y salud</Balancer>
            </div>
          </div>
        </Link>
        <p className='text-sm text-center'>
          <Balancer>
            Subscríbete a nuestro newsletter de EZ-Doc y aprende a tomar control de tu salud
          </Balancer>
        </p>
        <div className='flex flex-row gap-5'>
          <Input type='email' placeholder='Email' />
          <button className='justify-items-center bg-indigo-300 px-5 rounded-lg'>
            Subscribirme
          </button>
        </div>
      </div>
    </div>
  )
}
