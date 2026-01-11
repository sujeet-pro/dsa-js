import { expect } from 'vitest'
import { testImplementations } from '../../test-utils/test-implementations.ts'
import { twoSum as solutionImpl, type TwoSumFn } from './two-sum.solution.ts'
import { twoSum as practiceImpl } from './two-sum.practise.ts'

const implementations = {
  solution: solutionImpl,
  practice: practiceImpl,
}

/**
 * Helper to validate a two-sum result.
 * Checks that the indices are valid and the values sum to target.
 */
const isValidTwoSum = (nums: number[], target: number, result: [number, number]): boolean => {
  const [i, j] = result
  if (i < 0 || j < 0 || i >= nums.length || j >= nums.length) return false
  if (i === j) return false
  const sum = nums[i]! + nums[j]!
  return sum === target
}

testImplementations<TwoSumFn>('twoSum', implementations, (testEach) => {
  // ============================================================
  // BASIC FUNCTIONALITY
  // ============================================================

  testEach('should find two numbers at beginning of array', (fn) => {
    expect(fn([2, 7, 11, 15], 9)).toEqual([0, 1])
  })

  testEach('should find two numbers that sum to target in middle', (fn) => {
    const nums = [1, 2, 3, 4, 5]
    const target = 7
    const result = fn(nums, target)
    expect(isValidTwoSum(nums, target, result)).toBe(true)
  })

  testEach('should find two numbers at end of array', (fn) => {
    expect(fn([1, 2, 3, 4, 5], 9)).toEqual([3, 4])
  })

  testEach('should work when solution is not at beginning', (fn) => {
    expect(fn([3, 2, 4], 6)).toEqual([1, 2])
  })

  testEach('should handle non-adjacent elements', (fn) => {
    const nums = [1, 5, 3, 7, 2]
    const target = 8
    const result = fn(nums, target)
    expect(isValidTwoSum(nums, target, result)).toBe(true)
  })

  // ============================================================
  // EDGE CASES - MINIMUM INPUT
  // ============================================================

  testEach('should handle minimum array size (two elements)', (fn) => {
    expect(fn([1, 2], 3)).toEqual([0, 1])
  })

  testEach('should handle two element array with larger numbers', (fn) => {
    expect(fn([100, 200], 300)).toEqual([0, 1])
  })

  // ============================================================
  // DUPLICATE VALUES
  // ============================================================

  testEach('should handle duplicate values forming the answer', (fn) => {
    expect(fn([3, 3], 6)).toEqual([0, 1])
  })

  testEach('should handle duplicates not forming the answer', (fn) => {
    expect(fn([3, 3, 2, 4], 6)).toEqual([0, 1])
  })

  testEach('should handle multiple duplicates with valid answer', (fn) => {
    const nums = [1, 1, 1, 1, 2]
    const target = 3
    const result = fn(nums, target)
    expect(isValidTwoSum(nums, target, result)).toBe(true)
  })

  testEach('should choose correct pair when multiple duplicates exist', (fn) => {
    expect(fn([2, 5, 5, 11], 10)).toEqual([1, 2])
  })

  // ============================================================
  // NEGATIVE NUMBERS
  // ============================================================

  testEach('should handle all negative numbers', (fn) => {
    expect(fn([-1, -2, -3, -4, -5], -8)).toEqual([2, 4])
  })

  testEach('should handle mixed positive and negative numbers', (fn) => {
    expect(fn([-3, 4, 3, 90], 0)).toEqual([0, 2])
  })

  testEach('should handle negative target with positive numbers', (fn) => {
    expect(fn([-10, 5, 2, -3], -13)).toEqual([0, 3])
  })

  testEach('should handle negative and positive summing to negative', (fn) => {
    expect(fn([1, -2, 3, -4], -6)).toEqual([1, 3])
  })

  // ============================================================
  // ZERO VALUES
  // ============================================================

  testEach('should handle zero in array summing to zero', (fn) => {
    expect(fn([0, 4, 3, 0], 0)).toEqual([0, 3])
  })

  testEach('should handle zero as part of non-zero sum', (fn) => {
    const nums = [0, 1, 2, 3]
    const target = 3
    const result = fn(nums, target)
    expect(isValidTwoSum(nums, target, result)).toBe(true)
  })

  testEach('should handle zero with negative number', (fn) => {
    const nums = [-5, 0, 5, 10]
    const target = 5
    const result = fn(nums, target)
    expect(isValidTwoSum(nums, target, result)).toBe(true)
  })

  // ============================================================
  // LARGE NUMBERS (boundary conditions)
  // ============================================================

  testEach('should handle large positive numbers', (fn) => {
    const large = 10 ** 9
    expect(fn([large, 1, 2, large], large * 2)).toEqual([0, 3])
  })

  testEach('should handle large negative numbers', (fn) => {
    const large = -(10 ** 9)
    expect(fn([large, 1, 2, large], large * 2)).toEqual([0, 3])
  })

  testEach('should handle large target requiring large numbers', (fn) => {
    expect(fn([10 ** 9 - 1, 1, 2], 10 ** 9)).toEqual([0, 1])
  })

  // ============================================================
  // ORDER VARIATIONS
  // ============================================================

  testEach('should find valid pair in sorted ascending array', (fn) => {
    expect(fn([1, 2, 3, 4, 5, 6], 11)).toEqual([4, 5])
  })

  testEach('should find pair in descending array', (fn) => {
    expect(fn([6, 5, 4, 3, 2, 1], 11)).toEqual([0, 1])
  })

  testEach('should work with unsorted array', (fn) => {
    const nums = [4, 1, 7, 2, 9, 3]
    const target = 10
    const result = fn(nums, target)
    expect(isValidTwoSum(nums, target, result)).toBe(true)
  })

  // ============================================================
  // SPECIAL PATTERNS
  // ============================================================

  testEach('should handle arithmetic sequence', (fn) => {
    const nums = [2, 4, 6, 8, 10]
    const target = 12
    const result = fn(nums, target)
    expect(isValidTwoSum(nums, target, result)).toBe(true)
  })

  testEach('should handle powers of two', (fn) => {
    expect(fn([1, 2, 4, 8, 16], 9)).toEqual([0, 3])
  })

  // ============================================================
  // PERFORMANCE (large arrays)
  // ============================================================

  testEach('should handle large array efficiently - answer at end', (fn) => {
    const size = 10000
    const arr = Array.from({ length: size }, (_, i) => i)
    // Find last two elements: (size-2) + (size-1) = 2*size - 3
    expect(fn(arr, size * 2 - 3)).toEqual([size - 2, size - 1])
  })

  testEach('should handle large array efficiently - answer at start', (fn) => {
    const size = 10000
    const arr = Array.from({ length: size }, (_, i) => i)
    // 0 + 1 = 1
    expect(fn(arr, 1)).toEqual([0, 1])
  })

  testEach('should handle large array efficiently - answer spans array', (fn) => {
    const size = 10000
    const arr = Array.from({ length: size }, (_, i) => i)
    const target = size - 1
    const result = fn(arr, target)
    expect(isValidTwoSum(arr, target, result)).toBe(true)
  })
})
