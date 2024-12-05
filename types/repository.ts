/**
 * Defines the structure of a repository response.
 */
export type RepositoryResponse<T> = {
  success: boolean
  data: T | null
  error: string | null
}
