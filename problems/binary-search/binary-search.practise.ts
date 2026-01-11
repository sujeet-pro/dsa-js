/**
 * Binary Search
 *
 * Given a sorted array of integers and a target value, return the index of the
 * target if found, otherwise return -1. Must achieve O(log n) time complexity.
 *
 * @see README.md for full problem description, hints, and approaches
 */
export type BinarySearchFn = (nums: number[], target: number) => number

/**
 * Your solution here.
 *
 * Hints:
 * - See README.md for progressive hints
 * - Think about the time/space complexity you're targeting: O(log n) time, O(1) space
 * - Consider: How can you eliminate half of the search space with each comparison?
 * - Edge cases: empty array (though constraints say length >= 1), single element, target not found
 */
export const binarySearch1: BinarySearchFn = (nums, target) => {
  const startIdx = 0
  const endIdx = nums.length - 1
  // Below line will handle for lenght = 0, 1 (non-matching)
  if (nums.length === 0 || target < nums[startIdx]! || nums[endIdx]! < target) return -1
  return binarySearchRecursive(nums, target, startIdx, endIdx)
}

function binarySearchRecursive(nums: number[], target: number, startIdx: number, endIdx: number): number {
  if (endIdx < startIdx) return -1
  const midIdx = Math.floor((startIdx + endIdx) / 2)
  const midVal = nums[midIdx]!
  if (midVal === target) return midIdx
  if (target < midVal) return binarySearchRecursive(nums, target, startIdx, midIdx - 1)
  return binarySearchRecursive(nums, target, midIdx + 1, endIdx)
}

export const binarySearch2: BinarySearchFn = (nums, target) => {
  let startIdx = 0
  let endIdx = nums.length - 1
  while (startIdx <= endIdx) {
    const midIdx = startIdx + Math.floor((endIdx - startIdx) / 2)
    const midVal = nums[midIdx]!
    if (midVal === target) return midIdx
    else if (midVal < target) startIdx = midIdx + 1
    else endIdx = midIdx - 1
  }
  return -1
}

export const binarySearch3: BinarySearchFn = (nums, target) => {
  let startIdx = 0
  let endIdx = nums.length // [start, end) ==> Inclusive start Index, Exclusive End Index
  do {
    const midIdx = Math.floor(startIdx + (endIdx - startIdx) / 2)
    const midVal = nums[midIdx]!
    if (midVal === target) return midIdx
    if (midVal < target) startIdx = midIdx + 1
    else endIdx = midIdx
  } while (startIdx < endIdx)
  return -1
}
