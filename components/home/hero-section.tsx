import { ArrowRight } from 'lucide-react'
import Image from 'next/image'

import { LoginButton } from '@/components/auth/login-button'
import { Button } from '@/components/ui/button'

const HeroSection = () => (
  <section className='container mx-auto px-4 py-16 flex flex-col lg:flex-row items-center'>
    <div className='flex-1 mb-10 lg:mb-0 lg:pr-8'>
      <h1 className='text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4'>
        Bienvenido a Padel Club
      </h1>
      <p className='text-xl text-foreground/80 mb-8'>
        Reserva y gestiona tus pistas de pádel fácilmente. Juega en cualquier
        momento y lugar.
      </p>
      <div className='flex flex-col sm:flex-row gap-4'>
        <LoginButton />
        <Button variant='outline' size='lg'>
          Registrarse
          <ArrowRight className='ml-2 h-5 w-5' />
        </Button>
      </div>
    </div>
    <div className='flex-1'>
      <Image
        src='/padel-court.jpg'
        alt='Padel Court'
        width={400}
        height={400}
        className='rounded-lg object-cover w-full h-auto'
        priority
      />
    </div>
  </section>
)

export default HeroSection
