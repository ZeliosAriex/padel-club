'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import Link from 'next/link'
import { useState, useTransition } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import loginAction from '@/actions/login-action'
import { Alert } from '@/components/ui/alert'
import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import useActionResponse from '@/hooks/use-action-response'
import LoginSchema from '@/schemas/login-schema'

/**
 * A form for logging users into their accounts.
 * Handles validation, user feedback, and server communication.
 */
const LoginForm = () => {
  const { response, handleResponse, clearResponse } = useActionResponse()
  const [isPending, startTransition] = useTransition()
  const form = useForm<z.infer<typeof LoginSchema>>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  })

  const onSubmit = (values: z.infer<typeof LoginSchema>) => {
    clearResponse()
    startTransition(async () => {
      const actionResponse = await loginAction(values)
      handleResponse(actionResponse)
    })
  }

  return (
    <div className='space-y-6'>
      <div className='space-y-2 text-center'>
        <h1 className='text-2xl font-bold'>Inicia sesión en tu cuenta</h1>
        <p className='text-foreground/60 text-sm'>
          Ingresa tu correo electrónico para iniciar sesión en tu cuenta
        </p>
      </div>
      {/* Show alert if any */}
      {response && <Alert variant={response.status}>{response.message}</Alert>}
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-4'>
          <div className='space-y-2'>
            <FormField
              name='email'
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Correo electrónico</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder='usuario@ejemplo.com'
                      type='email'
                      disabled={isPending}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className='space-y-2'>
            <FormField
              name='password'
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Contraseña</FormLabel>
                  <FormControl>
                    <Input {...field} type='password' disabled={isPending} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <Button className='w-full' disabled={isPending}>
            {isPending ? (
              <div className='flex items-center justify-center gap-2'>
                <div className='h-4 w-4 animate-spin rounded-full border-2 border-background border-r-transparent' />
                Iniciando sesión...
              </div>
            ) : (
              'Iniciar sesión'
            )}
          </Button>
        </form>
      </Form>
      <div className='text-center space-y-2'>
        <p className='text-sm text-foreground/60'>
          ¿No tienes una cuenta?{' '}
          <Link
            href='/auth/register'
            className='underline hover:text-foreground'
          >
            Regístrate
          </Link>
        </p>
        <Link
          href='/auth/reset-password'
          className='text-sm text-foreground/60 hover:text-foreground underline'
        >
          ¿Olvidaste tu contraseña?
        </Link>
      </div>
    </div>
  )
}

const OldForm = () => {
  const [isLoading, setIsLoading] = useState(false)

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setIsLoading(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000))
    setIsLoading(false)
  }

  return (
    <form onSubmit={onSubmit} className='space-y-4'>
      <div className='space-y-2'>
        <label htmlFor='email' className='text-sm font-medium leading-none'>
          Correo electrónico
        </label>
        <input
          id='email'
          type='email'
          placeholder='m@example.com'
          className='w-full p-2 text-sm border rounded-md bg-background'
          required
        />
      </div>
      <div className='space-y-2'>
        <label htmlFor='password' className='text-sm font-medium leading-none'>
          Contraseña
        </label>
        <input
          id='password'
          type='password'
          className='w-full p-2 text-sm border rounded-md bg-background'
          required
        />
      </div>
      <Button className='w-full' disabled={isLoading}>
        {isLoading ? (
          <div className='flex items-center justify-center gap-2'>
            <div className='h-4 w-4 animate-spin rounded-full border-2 border-background border-r-transparent' />
            Iniciando sesión...
          </div>
        ) : (
          'Iniciar sesión'
        )}
      </Button>
    </form>
  )
}

export default LoginForm
