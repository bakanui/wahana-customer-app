import './globals.css'
import { Inter } from 'next/font/google'
import { Header } from '@/components/Header'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Wahana Virendra',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className='scroll-smooth'>
      <head/>
      <body className="w-full bg-white">
        <div id="root"></div>
        <div id="loading"/>
        <Header />
        {children}
        </body>
    </html>
  )
}