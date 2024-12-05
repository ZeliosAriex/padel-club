import bcrypt from 'bcryptjs'

/**
 * Hashes a plaintext password using bcrypt.
 * This function applies a secure hashing algorithm with a configurable number of salt rounds.
 *
 * @param password - The plaintext password to hash.
 * @returns A promise that resolves to the hashed password.
 */
export const hashPassword = async (password: string): Promise<string> => {
  const SALT_ROUNDS = 14 // The number of hashing iterations for bcrypt
  return await bcrypt.hash(password, SALT_ROUNDS)
}

/**
 * Compares a plaintext password with a hashed password to verify if they match.
 * This function is typically used during authentication to validate user credentials.
 *
 * @param password - The plaintext password provided by the user.
 * @param hashedPassword - The previously hashed password stored in the database.
 * @returns A promise that resolves to a boolean indicating if the passwords match.
 */
export const comparePassword = async (
  password: string,
  hashedPassword: string,
): Promise<boolean> => {
  return await bcrypt.compare(password, hashedPassword)
}
