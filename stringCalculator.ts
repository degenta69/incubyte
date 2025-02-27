import { checkForNegativeNumbers, parseDelimiter } from "./utility";

/**
 * Adds numbers from a given string, supporting custom delimiters and handling negatives.
 *
 * @param {string} numbers - The input string containing numbers separated by delimiters.
 * @returns {number} - The sum of the numbers.
 * @throws {Error} - Throws an error if negative numbers are found.
 */
export function add(numbers: string): number {
  if (numbers === "") return 0;

  let { cleanNumbers, separator } = parseDelimiter(numbers)

  const numArray = cleanNumbers.split(separator).map(Number);

  checkForNegativeNumbers(numArray);

  return numArray.reduce((sum, num) => sum + num, 0);
}
