import { AdapterUser } from '@auth/core/adapters'
import { Role } from '@prisma/client'

// Define base user properties that will be shared across different interfaces
type BaseUserProperties = {
  id: string
  name: string
  email: string
  role: Role
}

declare module 'next-auth' {
  // Extend the User type with our custom fields while maintaining AdapterUser compatibility
  interface User extends AdapterUser, BaseUserProperties {}

  // Define Session user with strict type safety
  interface Session {
    user: BaseUserProperties
    expires: string
  }
}

// Extend the JWT token type with consistent properties
declare module 'next-auth/jwt' {
  interface JWT extends BaseUserProperties {
    iat?: number
    exp?: number
    jti?: string
  }
}

// Type for safely passing user data in the application
export type SafeUser = Omit<BaseUserProperties, 'emailVerified' | 'image'> & {
  createdAt: Date
  updatedAt: Date
}

// Type guard to verify if a user object is a SafeUser
export function isSafeUser(user: unknown): user is SafeUser {
  if (!user || typeof user !== 'object') return false

  return (
    'id' in user &&
    'email' in user &&
    'name' in user &&
    'role' in user &&
    'createdAt' in user &&
    'updatedAt' in user
  )
}
