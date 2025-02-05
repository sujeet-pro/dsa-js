/**
 * You're given a list of integers nums. Write a function that returns a boolean representing whether
 * there exists a zero-sum subarray of nums.
 *
 * A zero-sum subarray is any subarray where all of the values add up to zero. A subarray is any
 * contiguous section of the array. For the purposes of this problem, a subarray can be as small as
 * one element and as long as the original array.
 */
export function zeroSumSubarray(nums: number[]) {
  // Write your code here.
  if (nums.length === 0) return false
  let sums = new Set<number>([0])
  let currentSum = 0
  for (let num of nums) {
    currentSum += num
    if (sums.has(currentSum)) return true
    sums.add(currentSum)
  }
  return false
}
