'use server'

import { z } from 'zod'

import { createResponse } from '@/lib/utils/action-utils'
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

  return createResponse('success', 'Inicio de sesión exitoso.')
}

export default loginAction
