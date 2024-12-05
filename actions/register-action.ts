'use server'

import { z } from 'zod'

import { createUser, getUserByEmail } from '@/lib/repositories/user'
import { hashPassword } from '@/lib/services/auth'
import { createResponse } from '@/lib/utils/action-utils'
import RegisterSchema from '@/schemas/register-schema'
import { ActionResponse } from '@/types/action-response'

/**
 * Handles user registration by validating the input, checking for existing users,
 * hashing the password, and storing the user in the database.
 *
 * @param values - The input data to register a new user.
 * @returns A standardized response indicating success or failure of the registration.
 */
const registerAction = async (
  values: z.infer<typeof RegisterSchema>,
): Promise<ActionResponse> => {
  try {
    // Validate the input fields against the schema
    const validatedFields = RegisterSchema.safeParse(values)

    if (!validatedFields.success) {
      return createResponse(
        'error',
        'Datos inválidos. Por favor, verifica la información proporcionada',
      )
    }

    const { name, email, password } = validatedFields.data

    // Check if the email is already registered
    const existingUser = await getUserByEmail(email)

    if (existingUser.data) {
      return createResponse('error', 'Este correo ya está en uso')
    }

    // Hash the user's password
    const hashedPassword = await hashPassword(password)

    // Create the user in the database
    await createUser(name, email, hashedPassword)

    // TODO: Send verification token email

    return createResponse(
      'success',
      '¡Registro exitoso! Por favor, verifica tu correo electrónico antes de iniciar sesión',
    )
  } catch (error) {
    console.error(error)
    return createResponse('error', 'Ocurrió un error al procesar tu solicitud')
  }
}

export default registerAction
