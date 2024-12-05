import type { Metadata } from 'next'
import localFont from 'next/font/local'
import { ReactNode } from 'react'

import './globals.css'

// Load Geist Sans and Mono fonts with variable support
const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
  display: 'swap', // Optimize font loading behavior
})

const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
  display: 'swap',
})

// Update metadata for our Padel Club application
export const metadata: Metadata = {
  title: 'Padel Club',
  description: 'Sistema moderno para la reserva y gestión de pistas de pádel',
}

const RootLayout = async ({
  children,
}: Readonly<{
  children: ReactNode
}>) => {
  return (
    <html lang='en' className={`${geistSans.variable} ${geistMono.variable}`}>
      <body>{children}</body>
    </html>
  )
}
export default RootLayout
