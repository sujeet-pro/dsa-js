/**
 * Determines if an array of integers is monotonic.
 *
 * An array is considered monotonic if its elements, from left to right, are entirely non-increasing or entirely non-decreasing.
 * Non-increasing elements do not increase, but they may stay the same.
 * Non-decreasing elements do not decrease, but they may stay the same.
 *
 * Note: Empty arrays and arrays with a single element are considered monotonic.
 *
 * @param {number[]} array - The array of integers to check.
 * @returns {boolean} - True if the array is monotonic, false otherwise.
 */
export function isMonotonic(array: number[]) {
  // Write your code here.
  let nonIncreasing = true
  let nonDecreasing = true
  for (let i = 1; i < array.length; i++) {
    const prev = array[i - 1]!
    const curr = array[i]!
    nonIncreasing = nonIncreasing && prev <= curr
    nonDecreasing = nonDecreasing && prev >= curr
    if (!nonDecreasing && !nonIncreasing) {
      break
    }
  }
  return nonIncreasing || nonDecreasing
}
