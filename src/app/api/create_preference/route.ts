import { NextRequest, NextResponse } from "next/server"
import mercadopago from "mercadopago"

mercadopago.configure({
  access_token: process.env.MERCADOPAGO_PRIVATE_KEY || "",
})

export async function POST(req: NextRequest) {
  try {
    const json = await req.json()
    const json_preference = {
      items: [
        {
          title: json.description,
          unit_price: Number(json.price),
          quantity: Number(json.quantity),
        },
      ],
      back_urls: {
        success: `https://${process.env.VERCEL_URL}` ?? "http://localhost:3000",
        failure: `https://${process.env.VERCEL_URL}` ?? "http://localhost:3000",
        pending: "",
      },
      auto_return: "approved" as const,
    }
    const response = await mercadopago.preferences.create(json_preference)
    console.log(response)
    console.log(response.body.items)
    console.log(response.body.id)
    return NextResponse.json(JSON.stringify(response))
  } catch (error: unknown) {
    return NextResponse.json(error, {
      status: 400,
      headers: { "Content-Type": "application/json" },
    })
  }
}
