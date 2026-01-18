/**
 * Utility functions for comparing Polish and Spanish text
 * Handles case-insensitive comparison while preserving special characters
 */

/**
 * Normalizes Polish text for comparison
 * Removes extra whitespace and converts to lowercase
 */
export function normalizePolishText(text: string): string {
  return text.trim().toLowerCase();
}

/**
 * Normalizes Spanish text for comparison
 * Removes extra whitespace and converts to lowercase
 * Handles Spanish accents by normalizing them
 */
export function normalizeSpanishText(text: string): string {
  return text
    .trim()
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, ''); // Remove accents for comparison
}

/**
 * Compares two Polish strings (case-insensitive)
 * Returns true if they match after normalization
 */
export function comparePolishText(userAnswer: string, correctAnswer: string): boolean {
  const normalizedUser = normalizePolishText(userAnswer);
  const normalizedCorrect = normalizePolishText(correctAnswer);
  return normalizedUser === normalizedCorrect;
}

/**
 * Compares two Spanish strings (case-insensitive, accent-insensitive)
 * Returns true if they match after normalization
 */
export function compareSpanishText(userAnswer: string, correctAnswer: string): boolean {
  const normalizedUser = normalizeSpanishText(userAnswer);
  const normalizedCorrect = normalizeSpanishText(correctAnswer);
  return normalizedUser === normalizedCorrect;
}
