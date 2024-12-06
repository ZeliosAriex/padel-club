import { apiAuthPrefix, authRoutes, privateRoutePrefixes } from '@/routes'

/**
 * Checks if a given path is an authentication route.
 */
export const isAuthRoute = (pathname: string): boolean =>
  authRoutes.some((route) => pathname.startsWith(route))

/**
 * Checks if a given path matches private route prefixes.
 */
export const isPrivateRoute = (pathname: string): boolean =>
  privateRoutePrefixes.some((prefix) => pathname.startsWith(prefix))

/**
 * Checks if a given path is an API authentication route.
 */
export const isApiAuthRoute = (pathname: string): boolean =>
  pathname.startsWith(apiAuthPrefix)
