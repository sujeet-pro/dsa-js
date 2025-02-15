/**
 * Given an array of integers between 1 and n, inclusive, where n is the length of the array,
 * write a function that returns the first integer that appears more than once (when the array is read from left to right).
 *
 * In other words, out of all the integers that might occur more than once in the input array,
 * your function should return the one whose first duplicate value has the minimum index.
 *
 * If no integer appears more than once, your function should return -1.
 *
 * Note that you're allowed to mutate the input array.
 */
export function firstDuplicateValue(array: number[]) {
  for (let num of array) {
    const idx = Math.abs(num) - 1
    if (array[idx]! < 0) return Math.abs(num)
    array[idx]! *= -1
  }

  return -1
}
