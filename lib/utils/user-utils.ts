import { User } from '@prisma/client'

import { SafeUser } from '@/types/user'

/**
 * Removes sensitive fields (like password) from the User object.
 *
 * @param user - The User object to filter.
 * @returns A new User object without sensitive fields.
 */
export const sanitizeUser = (user: User): SafeUser => {
  const { password, ...safeUser } = user
  return safeUser
}
