import { User } from '@prisma/client'

import { db } from '@/lib/prisma'
import { handleRepositoryOperation } from '@/lib/utils/repository-utils'
import { sanitizeUser } from '@/lib/utils/user-utils'
import { RepositoryResponse } from '@/types/repository'
import { SafeUser } from '@/types/user'

/**
 * Fetches a user from the database by their ID.
 *
 * @param id - The ID of the user to find.
 * @returns A RepositoryResponse containing the sanitized user object if found, or an error.
 */
export const getUserById = async (
  id: string,
): Promise<RepositoryResponse<SafeUser>> =>
  handleRepositoryOperation(
    () =>
      db.user.findUnique({
        where: {
          id,
        },
      }),
    {
      defaultErrorMessage: 'Failed to fetch user by ID.',
      onSuccess: sanitizeUser, // Apply sanitization before returning
    },
  )

/**
 * Fetches a user from the database by their email.
 *
 * @param email - The email of the user to find.
 * @returns A RepositoryResponse containing the user object if found, or an error.
 */
export const getUserByEmail = async (
  email: string,
): Promise<RepositoryResponse<SafeUser>> =>
  handleRepositoryOperation(
    () =>
      db.user.findUnique({
        where: {
          email: email.toLowerCase(),
        },
      }),
    {
      defaultErrorMessage: 'Failed to fetch user by email.',
      onSuccess: sanitizeUser, // Apply sanitization before returning
    },
  )

/**
 * Fetches a user from the database by their email without applying sanitization.
 *
 * @param email - The email of the user to find.
 * @returns A RepositoryResponse containing the raw user object if found, or an error.
 */
export const getRawUserByEmail = async (
  email: string,
): Promise<RepositoryResponse<User>> =>
  handleRepositoryOperation(
    () =>
      db.user.findUnique({
        where: {
          email: email.toLowerCase(),
        },
      }),
    {
      defaultErrorMessage: 'Failed to fetch user by email.',
    },
  )

/**
 * Creates a new user in the database.
 *
 * @param name - The name of the user.
 * @param email - The email of the user.
 * @param hashedPassword - The hashed password of the user.
 * @returns A RepositoryResponse containing the created user object or an error.
 */
export const createUser = async (
  name: string,
  email: string,
  hashedPassword: string,
): Promise<RepositoryResponse<SafeUser>> =>
  handleRepositoryOperation(
    () =>
      db.user.create({
        data: {
          name,
          email: email.toLowerCase(), // Ensure the email is stored in lowercase for consistency
          password: hashedPassword, // Store the securely hashed password
        },
      }),
    {
      defaultErrorMessage: 'Failed to create user.',
      onSuccess: sanitizeUser, // Apply sanitization before returning
    },
  )
