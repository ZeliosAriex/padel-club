'use client'

import { useRouter } from 'next/navigation'
import { ReactNode } from 'react'

import { Button } from '@/components/ui/button'

interface LoginButtonProps {
  children?: ReactNode
  mode?: 'modal' | 'redirect'
  asChild?: boolean
}

const LoginButton = (props: LoginButtonProps) => {
  const { children = 'Iniciar Sesión', mode = 'redirect', asChild } = props
  const router = useRouter()

  const handleClick = () => {
    router.push('/auth/login')
  }

  return (
    <Button size='lg' onClick={handleClick}>
      {children}
    </Button>
  )
}

LoginButton.displayName = 'LoginButton'

export { LoginButton }
