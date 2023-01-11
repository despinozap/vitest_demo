/**
 * This function sums all the given numbers.
 * If invalid array, returns null.
 */
export const sumNumbers = (numbers) => {
  return (numbers && Array.isArray(numbers)) ?  numbers.reduce(
    (carry, n) => carry + n,
    0
  ) : null;
}