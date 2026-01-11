import { expect } from 'vitest'
import { testImplementations } from '../../test-utils/test-implementations.ts'
import { mergeSort as solutionImpl, type SortFn } from './merge-sort.solution.ts'
import { mergeSort as practiceImpl } from './merge-sort.practise.ts'

const implementations = {
  solution: solutionImpl,
  practice: practiceImpl,
}

testImplementations<SortFn>('mergeSort', implementations, (testEach) => {
  // ============================================================
  // BASIC FUNCTIONALITY
  // ============================================================

  testEach('should sort a simple array', (fn) => {
    expect(fn([38, 27, 43, 3, 9, 82, 10])).toEqual([3, 9, 10, 27, 38, 43, 82])
  })

  testEach('should sort array with two elements', (fn) => {
    expect(fn([2, 1])).toEqual([1, 2])
  })

  testEach('should sort array with three elements', (fn) => {
    expect(fn([3, 1, 2])).toEqual([1, 2, 3])
  })

  // ============================================================
  // EDGE CASES
  // ============================================================

  testEach('should handle empty array', (fn) => {
    expect(fn([])).toEqual([])
  })

  testEach('should handle single element', (fn) => {
    expect(fn([42])).toEqual([42])
  })

  testEach('should handle already sorted array', (fn) => {
    expect(fn([1, 2, 3, 4, 5])).toEqual([1, 2, 3, 4, 5])
  })

  testEach('should handle reverse sorted array', (fn) => {
    expect(fn([5, 4, 3, 2, 1])).toEqual([1, 2, 3, 4, 5])
  })

  // ============================================================
  // DUPLICATES
  // ============================================================

  testEach('should handle all same elements', (fn) => {
    expect(fn([7, 7, 7, 7])).toEqual([7, 7, 7, 7])
  })

  testEach('should handle array with duplicates', (fn) => {
    expect(fn([3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5])).toEqual([1, 1, 2, 3, 3, 4, 5, 5, 5, 6, 9])
  })

  // ============================================================
  // NEGATIVE NUMBERS
  // ============================================================

  testEach('should handle all negative numbers', (fn) => {
    expect(fn([-5, -2, -8, -1, -9])).toEqual([-9, -8, -5, -2, -1])
  })

  testEach('should handle mixed positive and negative', (fn) => {
    expect(fn([-5, 3, -5, 0, 3, -1])).toEqual([-5, -5, -1, 0, 3, 3])
  })

  // ============================================================
  // ZERO VALUES
  // ============================================================

  testEach('should handle zeros', (fn) => {
    expect(fn([0, 1, 0, -1, 0])).toEqual([-1, 0, 0, 0, 1])
  })

  // ============================================================
  // LARGE NUMBERS
  // ============================================================

  testEach('should handle large numbers', (fn) => {
    expect(fn([1000000000, -1000000000, 0])).toEqual([-1000000000, 0, 1000000000])
  })

  // ============================================================
  // IMMUTABILITY
  // ============================================================

  testEach('should not mutate original array', (fn) => {
    const original = [3, 1, 2]
    const copy = [...original]
    fn(original)
    expect(original).toEqual(copy)
  })

  // ============================================================
  // PERFORMANCE (Merge Sort handles large arrays well)
  // ============================================================

  testEach('should handle large array efficiently', (fn) => {
    const arr = Array.from({ length: 1000 }, () => Math.floor(Math.random() * 10000))
    const sorted = fn(arr)
    expect(sorted.length).toBe(1000)
    for (let i = 1; i < sorted.length; i++) {
      expect(sorted[i]!).toBeGreaterThanOrEqual(sorted[i - 1]!)
    }
  })

  testEach('should handle very large array', (fn) => {
    const arr = Array.from({ length: 10000 }, () => Math.floor(Math.random() * 100000))
    const sorted = fn(arr)
    expect(sorted.length).toBe(10000)
    for (let i = 1; i < sorted.length; i++) {
      expect(sorted[i]!).toBeGreaterThanOrEqual(sorted[i - 1]!)
    }
  })
})
