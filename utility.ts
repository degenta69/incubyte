/**
 * Checks for negative numbers in the array and throws an error if any are found.
 *
 * @param {number[]} numArray - The array of numbers to check.
 * @throws {Error} If negative numbers are found, an error is thrown listing them.
 */
export const checkForNegativeNumbers = (numArray: number[]) => {
  const negatives = numArray.filter(num => num < 0);
  if (negatives.length > 0) {
    throw new Error(`negative numbers not allowed: ${negatives.join(", ")}`);
  }
}

/**
 * Parses the input string to extract the custom delimiter (if present)
 * and returns the cleaned number string along with the delimiter regex.
 *
 * @param {string} numbers - The input string containing numbers and optional delimiter.
 * @returns {{ cleanNumbers: string, separator: RegExp }} - The cleaned number string and delimiter regex.
 */
export const parseDelimiter = (numbers: string): { cleanNumbers: string; separator: RegExp; } => {
  let separator = /[\n,]/;
  let cleanNumbers = numbers;
  if (numbers.substring(0, 2) === "//") {
    const index = numbers.indexOf("\n")
    separator = new RegExp(numbers.substring(2, index))
    cleanNumbers = numbers.substring(index + 1)
  }

  return { cleanNumbers, separator };
}

