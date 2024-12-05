import { PrismaClient } from '@prisma/client'

/*
 In development, we might have hot reloading which could create multiple instances
 of PrismaClient. This is a common issue in Next.js development mode.
 to prevent this, we store the client in a global variable.
*/
const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined
}

/*
 Create a function that returns a new PrismaClient instance
 we use this function to ensure consistent configuration across instances
*/
const createPrismaClient = () =>
  new PrismaClient({
    log: ['query', 'error', 'warn'],
  })

/*
 Export a single PrismaClient instance
 if it exists in the global scope (in development), use that
 otherwise, create a new instance
 */
export const db = globalForPrisma.prisma ?? createPrismaClient()

/*
 In development, attach the client to the global object
 this prevents multiple instances during hot reloading
 */
if (process.env.NODE_ENV !== 'production') {
  globalForPrisma.prisma = db
}
