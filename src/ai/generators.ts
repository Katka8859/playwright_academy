/**
 * Generates a random password of the specified length using a mix of uppercase and lowercase letters,
 * digits, and special characters.
 *
 * @param length - The desired length of the generated password.
 * @returns A randomly generated password string.
 */
/**
 * Generates a random password with customizable complexity options.
 *
 * @param length - The desired length of the generated password.
 * @param options - Optional complexity options:
 *   - uppercase: Include uppercase letters (default: true)
 *   - lowercase: Include lowercase letters (default: true)
 *   - digits: Include digits (default: true)
 *   - special: Include special characters (default: true)
 * @returns A randomly generated password string.
 */
function generateRandomPassword(
  length: number,
  options?: {
    uppercase?: boolean;
    lowercase?: boolean;
    digits?: boolean;
    special?: boolean;
  }
): string {
  const defaultOptions = {
    uppercase: true,
    lowercase: true,
    digits: true,
    special: true,
  };
  const { uppercase, lowercase, digits, special } = {
    ...defaultOptions,
    ...options,
  };

  let chars = "";
  if (uppercase) chars += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  if (lowercase) chars += "abcdefghijklmnopqrstuvwxyz";
  if (digits) chars += "0123456789";
  if (special) chars += "!@#$%^&*()_+[]{}|;:,.<>?";

  if (!chars) {
    throw new Error("At least one character type must be enabled.");
  }

  let password = "";
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * chars.length);
    password += chars[randomIndex];
  }
  return password;
}

const password = generateRandomPassword(12, {
  uppercase: true,
  lowercase: true,
  digits: true,
  special: false,
});
console.log(`Generated Password: ${password}`);
