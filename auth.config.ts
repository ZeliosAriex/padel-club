import type { NextAuthConfig } from 'next-auth'
import Credentials from 'next-auth/providers/credentials'

import { getRawUserByEmail } from '@/lib/repositories/user'
import { comparePassword } from '@/lib/services/auth'
import { sanitizeUser } from '@/lib/utils/user-utils'
import LoginSchema from '@/schemas/login-schema'

export default {
  providers: [
    Credentials({
      async authorize(credentials) {
        // Validate input fields
        const validatedFields = LoginSchema.safeParse(credentials)

        if (!validatedFields.success) {
          console.error('Validation failed:', validatedFields.error)
          return null
        }

        const { email, password } = validatedFields.data

        // Fetch the user by email
        const { data: user, error } = await getRawUserByEmail(email)

        if (error) {
          console.error(`Error fetching user by email (${email}):`, error)
          return null
        }

        if (!user || !user.password) {
          console.warn('User not found or password missing.')
          return null
        }

        // Compare the passwords
        const passwordsMatch = await comparePassword(password, user.password)
        if (!passwordsMatch) {
          console.warn('Password mismatch.')
          return null
        }

        // Sanitize the user object to remove sensitive fields
        // Return the sanitized user object
        return sanitizeUser(user)
      },
    }),
  ],
} satisfies NextAuthConfig
