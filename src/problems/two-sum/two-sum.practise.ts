/**
 * Two Sum
 *
 * Given an array of integers and a target sum, return indices of two numbers
 * that add up to the target.
 *
 * @see README.md for full problem description, hints, and approaches
 */
export type TwoSumFn = (nums: number[], target: number) => [number, number]

/**
 * Your solution here.
 *
 * Hints:
 * - See README.md for progressive hints
 * - Think about: How can you find the complement of each number efficiently?
 * - Consider edge cases: duplicates, negative numbers, zeros
 *
 * Constraints:
 * - 2 <= nums.length <= 10^4
 * - -10^9 <= nums[i] <= 10^9
 * - Exactly one valid answer exists
 * - Cannot use the same element twice
 */
export const twoSum: TwoSumFn = (nums, target) => {
  const valueIdxMap = new Map<number, number>()
  for (let idx = 0; idx < nums.length; idx += 1) {
    const num2 = nums[idx]! // eslint-disable-line
    const num1 = target - num2
    const idx1 = valueIdxMap.get(num1)
    if (idx1 !== undefined) {
      return [idx1, idx]
    }
    valueIdxMap.set(num2, idx)
  }
  throw new Error('Solution Not found')
}
