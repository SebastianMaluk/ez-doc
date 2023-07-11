import { api } from '@/lib/api/server'
import HelloFromClient from './hello-from-client'
import Product from '@/components/Product'
import { getAuthSession } from '@/lib/auth'

export default async function Page() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const session = await getAuthSession()
  const { greeting } = await api.example.hello.fetch({
    text: 'Test RSC TRPC Call'
  })
  return (
    <div>
      <h1>Hello, Home page!</h1>
      <p>{greeting}</p>
      <HelloFromClient />
      <Product name='Banana' />
    </div>
  )
}
