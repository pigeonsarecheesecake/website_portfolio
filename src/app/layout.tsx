import type { Metadata } from 'next'
import localFont from 'next/font/local'
import Navigation from '@/app/components/NavigationBar'
import Footer from './components/Footer'
import '@/app/ui/globals.css'

const newYork = localFont({ src: './font/New Spirit Medium.otf' })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={newYork.className}>
        {/* Navigation Bar in layout since it's shared among pages*/}
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  )
}
