import { RepositoryResponse } from '@/types/repository'

/**
 * Handles database operations with a consistent response structure.
 * Allows optional transformation or sanitization of the result.
 *
 * @param operation - A function that performs the database operation.
 * @param options - Optional hooks and custom error messages.
 * @returns A promise resolving to a RepositoryResponse with the result or error.
 */
export const handleRepositoryOperation = async <T, R = T>(
  operation: () => Promise<T | null>, // Operation that returns T or null
  options?: {
    onSuccess?: (data: T) => R // Hook to transform or sanitize the result
    onError?: (error: unknown) => string // Custom error handler
    defaultErrorMessage?: string // Default error message
  },
): Promise<RepositoryResponse<R>> => {
  const {
    onSuccess,
    onError,
    defaultErrorMessage = 'An error occurred during the operation.',
  } = options || {}

  try {
    const data = await operation()

    if (data === null) {
      return {
        success: true,
        data: null,
        error: null,
      }
    }

    const result = onSuccess ? onSuccess(data) : (data as unknown as R)

    return {
      success: true,
      data: result,
      error: null,
    }
  } catch (error) {
    console.error('Repository operation failed:', error)
    return {
      success: false,
      data: null,
      error: onError ? onError(error) : defaultErrorMessage,
    }
  }
}
