'use server'

import { AuthError } from 'next-auth'
import { z } from 'zod'

import { signIn } from '@/auth'
import { createResponse } from '@/lib/utils/action-utils'
import { redirectRoutes } from '@/routes'
import LoginSchema from '@/schemas/login-schema'
import { ActionResponse } from '@/types/action-response'

/**
 * Handles user login by validating the input and processing the login logic.
 *
 * @param values - The input data to log in a user.
 * @returns A standardized response indicating success or failure.
 */
const loginAction = async (
  values: z.infer<typeof LoginSchema>,
): Promise<ActionResponse> => {
  const validatedFields = LoginSchema.safeParse(values)

  if (!validatedFields.success) {
    return createResponse(
      'error',
      'Datos inválidos. Por favor, verifica la información proporcionada',
    )
  }

  const { email, password } = validatedFields.data

  try {
    await signIn('credentials', {
      email,
      password,
      redirectTo: redirectRoutes.authenticated,
    })
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case 'CredentialsSignin':
          return createResponse(
            'error',
            'Datos inválidos. Por favor, verifica la información proporcionada',
          )
        default:
          return createResponse(
            'error',
            'Hubo un problema al intentar iniciar sesión',
          )
      }
    }
    throw error
  }

  return createResponse(
    'success',
    'Bienvenido, redireccionando al panel privado',
  )
}

export default loginAction
