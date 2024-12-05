import type { Metadata } from 'next'
import Image from 'next/image'
import { ReactNode } from 'react'

export const metadata: Metadata = {
  title: 'Iniciar Sesión - Padel Club',
  description: 'Autenticación en Padel Club',
}

const AuthLayout = ({
  children,
}: Readonly<{
  children: ReactNode
}>) => (
  <div className='min-h-screen grid lg:grid-cols-2'>
    {/* Left side - Form */}
    <div className='flex flex-col'>
      <header className='container px-4 py-4 flex justify-end'></header>
      <main className='flex-1 flex items-center justify-center p-4'>
        <div className='w-full max-w-sm'>{children}</div>
      </main>
    </div>

    {/* Right side - Image */}
    <div className='hidden lg:block relative'>
      <Image
        src='/padel-login.jpg'
        alt='Padel court'
        fill
        className='object-cover'
        priority
      />
      <div className='absolute inset-0 bg-foreground/10' />
      <div className='absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black to-transparent'>
        <h1 className='text-2xl font-bold text-white opacity-90'>
          Bienvenido a Padel Club
        </h1>
        <p className='mt-2 text-sm/relaxed text-white opacity-90'>
          Reserva tu pista, gestiona tus reservas y disfruta jugando al pádel
          con tus amigos.
        </p>
      </div>
    </div>
  </div>
)

export default AuthLayout
