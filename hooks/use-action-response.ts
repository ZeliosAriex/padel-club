import { useState } from 'react'

import { ActionResponse } from '@/types/action-response'

/**
 * Custom hook to manage and handle ActionResponse from server actions.
 * Provides methods to process the response and display feedback.
 *
 * @returns An object containing the current response state and helper functions.
 */
const useActionResponse = () => {
  const [response, setResponse] = useState<ActionResponse | null>(null)

  /**
   * Processes an ActionResponse, updating the state and returning the result.
   *
   * @param actionResponse - The response from a server action.
   */
  const handleResponse = (actionResponse: ActionResponse) => {
    setResponse(actionResponse)
  }

  /**
   * Clears the current response.
   */
  const clearResponse = () => {
    setResponse(null)
  }

  return { response, handleResponse, clearResponse }
}

export default useActionResponse
