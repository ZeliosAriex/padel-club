/**
 * Auth Routes
 * ------------
 * Routes intended for unauthenticated users, like login or register.
 * Authenticated users accessing these routes will be redirected.
 */
export const authRoutes: string[] = ['/auth/login', '/auth/register']

/**
 * Private Route Prefixes
 * -----------------------
 * Any route starting with these prefixes is considered private.
 * Example: Dashboard, Admin Panel.
 */
export const privateRoutePrefixes: string[] = ['/dashboard']

/**
 * API Authentication Prefix
 * --------------------------
 * Prefix for API routes related to authentication.
 */
export const apiAuthPrefix: string = '/api/auth'

/**
 * Redirection Routes
 * -------------------
 * Configure where users are redirected based on their authentication status.
 */
export const redirectRoutes = {
  authenticated: '/dashboard', // Redirect for authenticated users accessing authRoutes
  login: '/auth/login', // Redirect for unauthenticated users accessing private routes
}
