import { cn } from "@/lib/utils"

import "@/styles/globals.css"

import { Inter } from "next/font/google"

import { Toaster } from "@/components/ui/toaster"
import Footer from "@/components/Footer"
import Navbar from "@/components/Navbar"
import { ThemeProvider } from "@/components/theme-provider"

import { ClientProviders } from "./client-providers"

export const metadata = {
  title: "Easy Doctor",
  description: "Exams made easy",
}

const inter = Inter({ subsets: ["latin"] })

export default function RootLayout({
  children,
  authModal,
}: {
  children: React.ReactNode
  authModal: React.ReactNode
}) {
  return (
    <html
      lang='en'
      className={cn("bg-white text-slate-900 antialiased light", inter.className)}
      suppressHydrationWarning
    >
      <head>
        <meta charSet='utf-8' />
        <meta name='description' content={metadata.description} />
        <meta name='viewport' content='initial-scale=1, viewport-fit=cover' />
      </head>
      <ClientProviders>
        <body className='flex flex-col min-h-screen bg-slate-50 antialiased dark:bg-slate-900 dark:text-slate-100'>
          <ThemeProvider attribute='class' defaultTheme='system' enableSystem>
            <Navbar />
            {authModal}
            <div className='container flex-grow max-w-7xl mx-auto'>{children}</div>
            <Footer />
            <Toaster />
          </ThemeProvider>
        </body>
      </ClientProviders>
    </html>
  )
}
