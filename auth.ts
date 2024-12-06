import { Adapter } from '@auth/core/adapters'
import { PrismaAdapter } from '@auth/prisma-adapter'
import NextAuth from 'next-auth'

import authConfig from '@/auth.config'
import { db } from '@/lib/prisma'

export const { auth, handlers, signIn, signOut } = NextAuth({
  adapter: PrismaAdapter(db) as Adapter,
  session: { strategy: 'jwt' },
  ...authConfig,
})
