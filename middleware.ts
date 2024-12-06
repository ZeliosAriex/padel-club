import NextAuth from 'next-auth'

import {
  isApiAuthRoute,
  isAuthRoute,
  isPrivateRoute,
} from '@/lib/utils/route-utils'
import { redirectRoutes } from '@/routes'

import authConfig from './auth.config'

const { auth } = NextAuth(authConfig)

export default auth((req) => {
  const { origin, pathname } = req.nextUrl
  const isLoggedIn = !!req.auth

  try {
    // Allow API authentication routes
    if (isApiAuthRoute(pathname)) {
      return undefined // Let API routes pass
    }

    // Handle authentication routes (e.g., login, register)
    if (isAuthRoute(pathname)) {
      return isLoggedIn
        ? Response.redirect(new URL(redirectRoutes.authenticated, origin)) // Redirect authenticated users
        : undefined // Allow unauthenticated users
    }

    // Protect private routes
    if (isPrivateRoute(pathname) && !isLoggedIn) {
      return Response.redirect(new URL(redirectRoutes.login, origin)) // Redirect unauthenticated users
    }

    // Allow all other requests
    return undefined
  } catch (error) {
    console.error('Middleware Error:', error)
    return new Response('Internal Server Error', { status: 500 })
  }
})

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes
    '/(api|trpc)(.*)',
  ],
}
