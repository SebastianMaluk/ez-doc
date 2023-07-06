import { api } from '@/lib/api/server'
import HelloFromClient from './hello-from-client'

export default async function Page() {
  const { greeting } = await api.example.hello.fetch({
    text: 'Test RSC TRPC Call'
  })
  return (
    <div>
      <h1>Hello, Home page!</h1>
      <p>{greeting}</p>
      <HelloFromClient />
    </div>
  )
}
