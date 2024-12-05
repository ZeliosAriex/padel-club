/**
 * Defines the possible statuses for actions in the application.
 * These statuses indicate whether the action was successfully
 * executed or if an error occurred.
 */
export type ResponseStatus = 'success' | 'error'

/**
 * Represents the structure of the response returned by server actions.
 * This type ensures a consistent format for all responses, making it
 * easier to handle them in the frontend or other parts of the application.
 *
 * @property status - Indicates the outcome of the action ('success' or 'error').
 * @property message - A descriptive message to provide feedback to the user
 * or explain the result of the action.
 */
export type ActionResponse = {
  status: ResponseStatus
  message: string
}
