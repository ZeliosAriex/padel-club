import { Role } from '@prisma/client'

// Define types for our seed data
export interface SeedUser {
  email: string
  name: string
  password: string
  role: Role
}

// Initial users for seeding
export const initialUsers: SeedUser[] = [
  {
    email: 'admin@example.com',
    name: 'Admin User',
    password: '123456',
    role: 'ADMIN',
  },
  {
    email: 'user@example.com',
    name: 'Regular User',
    password: '123456',
    role: 'USER',
  },
]
