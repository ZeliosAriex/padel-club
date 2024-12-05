'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import Link from 'next/link'
import { useTransition } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import registerAction from '@/actions/register-action'
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
import RegisterSchema from '@/schemas/register-schema'

const RegisterForm = () => {
  const { response, handleResponse, clearResponse } = useActionResponse()
  const [isPending, startTransition] = useTransition()
  const form = useForm<z.infer<typeof RegisterSchema>>({
    resolver: zodResolver(RegisterSchema),
    defaultValues: {
      name: '',
      email: '',
      password: '',
    },
  })

  const onSubmit = (values: z.infer<typeof RegisterSchema>) => {
    clearResponse()
    startTransition(async () => {
      const actionResponse = await registerAction(values)

      handleResponse(actionResponse)
    })
  }

  return (
    <div className='space-y-6'>
      <div className='space-y-2 text-center'>
        <h1 className='text-2xl font-bold'>Crea tu cuenta</h1>
        <p className='text-foreground/60 text-sm'>
          Ingresa tus datos para crear una cuenta nueva
        </p>
      </div>
      {/* Show alert if any */}
      {response && <Alert variant={response.status}>{response.message}</Alert>}
      {response?.status === 'success' ? (
        <div className='flex'>
          <Button asChild className='w-full'>
            <Link href='/auth/login'>Iniciar sesión</Link>
          </Button>
        </div>
      ) : (
        <>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-4'>
              {/* Campo para nombre */}
              <div className='space-y-2'>
                <FormField
                  name='name'
                  control={form.control}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Nombre</FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          placeholder='Tu nombre'
                          disabled={isPending}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              {/* Campo para email */}
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
              {/* Campo para contraseña */}
              <div className='space-y-2'>
                <FormField
                  name='password'
                  control={form.control}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Contraseña</FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          type='password'
                          disabled={isPending}
                        />
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
                    Creando cuenta...
                  </div>
                ) : (
                  'Crear cuenta'
                )}
              </Button>
            </form>
          </Form>
          <div className='text-center space-y-2'>
            <p className='text-sm text-foreground/60'>
              ¿Ya tienes una cuenta?{' '}
              <Link
                href='/auth/login'
                className='underline hover:text-foreground'
              >
                Inicia sesión
              </Link>
            </p>
          </div>
        </>
      )}
    </div>
  )
}

export default RegisterForm
