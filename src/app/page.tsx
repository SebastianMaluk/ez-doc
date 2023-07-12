import { api } from '@/lib/api/server'
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import HelloFromClient from './hello-from-client'
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import Product from '@/components/Product'
import { getAuthSession } from '@/lib/auth'
import Balancer from 'react-wrap-balancer'
import Link from 'next/link'

import { Input } from '@/components/ui/Input'

export default async function Page() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const session = await getAuthSession()
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { greeting } = await api.example.hello.fetch({
    text: 'Test RSC TRPC Call'
  })
  return (
    <div className='flex flex-col items-center justify-center py-6'>
      <div className='text-2xl text-center'>
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
        <Input type='email' placeholder='Email' />
      </div>
      {/* <p>{greeting}</p> */}
      {/* <HelloFromClient /> */}
      {/* <Product name='Banana' /> */}
    </div>
  )
}
