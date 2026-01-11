import { expect } from 'vitest'
import { testImplementations } from '../../test-utils/test-implementations.ts'
import { heapSort as solutionImpl, type SortFn } from './heap-sort.solution.ts'
import { heapSort as practiceImpl } from './heap-sort.practise.ts'

const implementations = {
  solution: solutionImpl,
  practice: practiceImpl,
}

testImplementations<SortFn>('heapSort', implementations, (testEach) => {
  // ============================================================
  // BASIC FUNCTIONALITY
  // ============================================================

  testEach('should sort a simple array', (fn) => {
    const arr = [12, 11, 13, 5, 6, 7]
    fn(arr)
    expect(arr).toEqual([5, 6, 7, 11, 12, 13])
  })

  testEach('should sort array with two elements', (fn) => {
    const arr = [2, 1]
    fn(arr)
    expect(arr).toEqual([1, 2])
  })

  testEach('should sort array with three elements', (fn) => {
    const arr = [3, 1, 2]
    fn(arr)
    expect(arr).toEqual([1, 2, 3])
  })

  // ============================================================
  // EDGE CASES
  // ============================================================

  testEach('should handle empty array', (fn) => {
    const arr: number[] = []
    fn(arr)
    expect(arr).toEqual([])
  })

  testEach('should handle single element', (fn) => {
    const arr = [42]
    fn(arr)
    expect(arr).toEqual([42])
  })

  testEach('should handle already sorted array', (fn) => {
    const arr = [1, 2, 3, 4, 5]
    fn(arr)
    expect(arr).toEqual([1, 2, 3, 4, 5])
  })

  testEach('should handle reverse sorted array', (fn) => {
    const arr = [5, 4, 3, 2, 1]
    fn(arr)
    expect(arr).toEqual([1, 2, 3, 4, 5])
  })

  // ============================================================
  // DUPLICATES
  // ============================================================

  testEach('should handle all same elements', (fn) => {
    const arr = [7, 7, 7, 7]
    fn(arr)
    expect(arr).toEqual([7, 7, 7, 7])
  })

  testEach('should handle array with duplicates', (fn) => {
    const arr = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5]
    fn(arr)
    expect(arr).toEqual([1, 1, 2, 3, 3, 4, 5, 5, 5, 6, 9])
  })

  // ============================================================
  // NEGATIVE NUMBERS
  // ============================================================

  testEach('should handle all negative numbers', (fn) => {
    const arr = [-5, -2, -8, -1, -9]
    fn(arr)
    expect(arr).toEqual([-9, -8, -5, -2, -1])
  })

  testEach('should handle mixed positive and negative', (fn) => {
    const arr = [-5, 3, -5, 0, 3, -1]
    fn(arr)
    expect(arr).toEqual([-5, -5, -1, 0, 3, 3])
  })

  // ============================================================
  // ZERO VALUES
  // ============================================================

  testEach('should handle zeros', (fn) => {
    const arr = [0, 1, 0, -1, 0]
    fn(arr)
    expect(arr).toEqual([-1, 0, 0, 0, 1])
  })

  // ============================================================
  // LARGE NUMBERS
  // ============================================================

  testEach('should handle large numbers', (fn) => {
    const arr = [1000000000, -1000000000, 0]
    fn(arr)
    expect(arr).toEqual([-1000000000, 0, 1000000000])
  })

  // ============================================================
  // IN-PLACE MUTATION
  // ============================================================

  testEach('should mutate the original array in-place', (fn) => {
    const arr = [3, 1, 2]
    fn(arr)
    expect(arr).toEqual([1, 2, 3])
  })

  // ============================================================
  // PERFORMANCE (Heap Sort has guaranteed O(n log n))
  // ============================================================

  testEach('should handle large array efficiently', (fn) => {
    const arr = Array.from({ length: 1000 }, () => Math.floor(Math.random() * 10000))
    fn(arr)
    expect(arr.length).toBe(1000)
    for (let i = 1; i < arr.length; i++) {
      expect(arr[i]!).toBeGreaterThanOrEqual(arr[i - 1]!)
    }
  })

  testEach('should handle very large array', (fn) => {
    const arr = Array.from({ length: 10000 }, () => Math.floor(Math.random() * 100000))
    fn(arr)
    expect(arr.length).toBe(10000)
    for (let i = 1; i < arr.length; i++) {
      expect(arr[i]!).toBeGreaterThanOrEqual(arr[i - 1]!)
    }
  })

  // ============================================================
  // HEAP-SPECIFIC EDGE CASES
  // ============================================================

  testEach('should handle power of 2 sized arrays (complete binary tree)', (fn) => {
    const arr = [8, 4, 12, 2, 6, 10, 14, 1, 3, 5, 7, 9, 11, 13, 15]
    fn(arr)
    expect(arr).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15])
  })

  testEach('should handle power of 2 minus 1 sized arrays', (fn) => {
    const arr = [7, 3, 5, 1, 6, 4, 2]
    fn(arr)
    expect(arr).toEqual([1, 2, 3, 4, 5, 6, 7])
  })
})
