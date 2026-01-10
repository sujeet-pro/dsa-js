import { expect } from 'vitest'
import { testImplementations } from '../../test-utils/test-implementations.ts'
import { binarySearch as solutionImpl, type BinarySearchFn } from './binary-search.solution.ts'
import { binarySearch1, binarySearch2, binarySearch3 } from './binary-search.practise.ts'

const implementations = {
  solution: solutionImpl,
  practice1: binarySearch1,
  practice2: binarySearch2,
  practice3: binarySearch3,
}

testImplementations<BinarySearchFn>('binarySearch', implementations, (testEach) => {
  // ============================================================
  // BASIC FUNCTIONALITY - Target Found
  // ============================================================

  testEach('should find element at beginning of array', (fn) => {
    expect(fn([1, 2, 3, 4, 5], 1)).toBe(0)
  })

  testEach('should find element at end of array', (fn) => {
    expect(fn([1, 2, 3, 4, 5], 5)).toBe(4)
  })

  testEach('should find element in middle of array', (fn) => {
    expect(fn([1, 2, 3, 4, 5], 3)).toBe(2)
  })

  testEach('should find element in even-length array', (fn) => {
    expect(fn([1, 2, 3, 4], 2)).toBe(1)
  })

  testEach('should find element in odd-length array', (fn) => {
    expect(fn([1, 2, 3, 4, 5], 4)).toBe(3)
  })

  // ============================================================
  // EDGE CASES - Single Element Array
  // ============================================================

  testEach('should find target in single element array', (fn) => {
    expect(fn([42], 42)).toBe(0)
  })

  testEach('should return -1 when single element is not target', (fn) => {
    expect(fn([42], 10)).toBe(-1)
  })

  // ============================================================
  // EDGE CASES - Two Element Array
  // ============================================================

  testEach('should find first element in two element array', (fn) => {
    expect(fn([1, 2], 1)).toBe(0)
  })

  testEach('should find second element in two element array', (fn) => {
    expect(fn([1, 2], 2)).toBe(1)
  })

  testEach('should return -1 when target not in two element array', (fn) => {
    expect(fn([1, 3], 2)).toBe(-1)
  })

  // ============================================================
  // NOT FOUND CASES - Target Outside Array Range
  // ============================================================

  testEach('should return -1 when target is less than all elements', (fn) => {
    expect(fn([10, 20, 30, 40, 50], 5)).toBe(-1)
  })

  testEach('should return -1 when target is greater than all elements', (fn) => {
    expect(fn([10, 20, 30, 40, 50], 55)).toBe(-1)
  })

  testEach('should return -1 when target is between two consecutive elements', (fn) => {
    expect(fn([10, 20, 30, 40, 50], 25)).toBe(-1)
  })

  // ============================================================
  // NEGATIVE NUMBERS
  // ============================================================

  testEach('should find target in array with all negative numbers', (fn) => {
    expect(fn([-50, -40, -30, -20, -10], -30)).toBe(2)
  })

  testEach('should find negative target at beginning', (fn) => {
    expect(fn([-50, -40, -30, -20, -10], -50)).toBe(0)
  })

  testEach('should find negative target at end', (fn) => {
    expect(fn([-50, -40, -30, -20, -10], -10)).toBe(4)
  })

  testEach('should handle mixed positive and negative numbers', (fn) => {
    expect(fn([-10, -5, 0, 5, 10], 0)).toBe(2)
  })

  testEach('should find negative number in mixed array', (fn) => {
    expect(fn([-10, -5, 0, 5, 10], -5)).toBe(1)
  })

  testEach('should find positive number in mixed array', (fn) => {
    expect(fn([-10, -5, 0, 5, 10], 5)).toBe(3)
  })

  // ============================================================
  // ZERO
  // ============================================================

  testEach('should find zero in array', (fn) => {
    expect(fn([-2, -1, 0, 1, 2], 0)).toBe(2)
  })

  testEach('should handle array starting with zero', (fn) => {
    expect(fn([0, 1, 2, 3, 4], 0)).toBe(0)
  })

  // ============================================================
  // LARGE NUMBERS
  // ============================================================

  testEach('should handle large positive numbers', (fn) => {
    expect(fn([1, 1000, 10000, 100000, 1000000], 10000)).toBe(2)
  })

  testEach('should find MAX_SAFE_INTEGER boundary values', (fn) => {
    expect(fn([1, 10000, Number.MAX_SAFE_INTEGER], Number.MAX_SAFE_INTEGER)).toBe(2)
  })

  testEach('should handle MIN_SAFE_INTEGER boundary values', (fn) => {
    expect(fn([Number.MIN_SAFE_INTEGER, -1, 0, 1], Number.MIN_SAFE_INTEGER)).toBe(0)
  })

  // ============================================================
  // LEETCODE EXAMPLES
  // ============================================================

  testEach('LeetCode Example 1: should find 9 at index 4', (fn) => {
    expect(fn([-1, 0, 3, 5, 9, 12], 9)).toBe(4)
  })

  testEach('LeetCode Example 2: should return -1 for missing 2', (fn) => {
    expect(fn([-1, 0, 3, 5, 9, 12], 2)).toBe(-1)
  })

  // ============================================================
  // PERFORMANCE - Large Arrays
  // ============================================================

  testEach('should handle large array efficiently - find at beginning', (fn) => {
    const size = 1000000
    const arr = Array.from({ length: size }, (_, i) => i * 2) // [0, 2, 4, ...]
    expect(fn(arr, 0)).toBe(0)
  })

  testEach('should handle large array efficiently - find at end', (fn) => {
    const size = 1000000
    const arr = Array.from({ length: size }, (_, i) => i * 2)
    expect(fn(arr, (size - 1) * 2)).toBe(size - 1)
  })

  testEach('should handle large array efficiently - find in middle', (fn) => {
    const size = 1000000
    const arr = Array.from({ length: size }, (_, i) => i * 2)
    const midIndex = Math.floor(size / 2)
    expect(fn(arr, midIndex * 2)).toBe(midIndex)
  })

  testEach('should handle large array efficiently - not found', (fn) => {
    const size = 1000000
    const arr = Array.from({ length: size }, (_, i) => i * 2) // All even
    expect(fn(arr, 1)).toBe(-1) // Odd number not in array
  })

  // ============================================================
  // ADDITIONAL EDGE CASES
  // ============================================================

  testEach('should handle three element array - find first', (fn) => {
    expect(fn([1, 2, 3], 1)).toBe(0)
  })

  testEach('should handle three element array - find middle', (fn) => {
    expect(fn([1, 2, 3], 2)).toBe(1)
  })

  testEach('should handle three element array - find last', (fn) => {
    expect(fn([1, 2, 3], 3)).toBe(2)
  })

  testEach('should handle sparse values with large gaps', (fn) => {
    expect(fn([1, 100, 1000, 10000], 100)).toBe(1)
  })

  testEach('should handle consecutive integers', (fn) => {
    expect(fn([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 7)).toBe(6)
  })
})
