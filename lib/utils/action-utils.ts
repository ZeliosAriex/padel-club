import { ActionResponse, ResponseStatus } from '@/types/action-response'

/**
 * Utility function to create a standardized action response.
 * This ensures all responses have a consistent structure across the application.
 *
 * @param status - The status of the action ('success' or 'error').
 * @param message - A descriptive message providing feedback about the action's result.
 * @returns An object adhering to the ActionResponse type.
 */
export const createResponse = (
  status: ResponseStatus,
  message: string,
): ActionResponse => ({
  status,
  message,
})
