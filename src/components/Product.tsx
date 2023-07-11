'use client'

import { useState } from 'react'
import { initMercadoPago, Wallet } from '@mercadopago/sdk-react'
import { useMutation } from '@tanstack/react-query'

import { FC } from 'react'
import { Button } from './ui/Button'
// eslint-disable-next-line @typescript-eslint/no-unused-vars

interface ProductProps {
  name: string
}

const fetchMP = async () => {
  const res = await fetch('http://localhost:3000/api/create_preference', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      description: 'Bananita contenta',
      price: 100,
      quantity: 1
    })
  })

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  return await res.json()
}

const Product: FC<ProductProps> = ({ name }) => {
  const [preferenceId, setPreferenceId] = useState<string | null>(null)

  initMercadoPago(process.env.NEXT_PUBLIC_MERCADOPAGO_PUBLIC_KEY || '')
  const mutation = useMutation(fetchMP, {
    onSuccess: (data) => {
      const json_response = JSON.parse(data)
      setPreferenceId(json_response.body.id)
    }
  })

  const handleBuy = () => {
    mutation.mutate()
  }

  if (mutation.isLoading) return <div>Loading...</div>
  if (mutation.isError) return <div>An error has occurred: {(mutation.error as Error).message}</div>

  return (
    <div className='card-product-container'>
      <div className='card-product'>
        <div className='card'>
          {/* <img src={img} alt='Product Image' /> */}
          <h3>{name}</h3>
          <p className='price'>100 $</p>
          <Button className='dark:bg-slate-400 dark:text-slate-800' onClick={handleBuy}>
            Buy
          </Button>
          {preferenceId && <Wallet initialization={{ preferenceId, redirectMode: 'self' }} />}
        </div>
      </div>
    </div>
  )
}
export default Product
