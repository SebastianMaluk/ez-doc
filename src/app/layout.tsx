import { cn } from '@/lib/utils'
import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from '@/components/Navbar'

export const metadata = {
  title: 'Easy Doctor',
  description: 'Exams made easy',
}

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={cn(
      'bg-white text-slate-900 antialiased light dark:bg-slate-900 dark:text-slate-100',
      inter.className
    )}
    >
      <body className='min-h-screen pt-12 bg-slate-50 antialiased'>
        <Navbar />
        <div className='container max-w-7xl mx-auto h-full pt-12 '>
          {children}
        </div>
      </body>
    </html>
  )
}
