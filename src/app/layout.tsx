import { cn } from "@/lib/utils"

import "@/globals.css"

import { Toaster } from "@/components/ui/toaster"
import Footer from "@/components/Footer"
import Navbar from "@/components/Navbar"
import { ThemeProvider } from "@/components/theme-provider"
import { GeistSans } from "geist/font/sans"

export const metadata = {
  title: "Easy Doctor",
  description: "Exams made easy",
}

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang='en'
      className={cn("bg-white text-slate-900 antialiased light", GeistSans.className)}
      suppressHydrationWarning
    >
      <head>
        <meta charSet='utf-8' />
        <meta name='description' content={metadata.description} />
        <meta name='viewport' content='initial-scale=1, viewport-fit=cover' />
      </head>
      <body className='flex flex-col min-h-screen bg-slate-50 antialiased dark:bg-slate-900 dark:text-slate-100'>
        <ThemeProvider attribute='class' defaultTheme='system' enableSystem>
          <Navbar />
          <div className='container flex-grow max-w-7xl mx-auto'>{children}</div>
          <Footer />
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}
