import { expect } from 'vitest'
import { testImplementations } from '../../test-utils/test-implementations.ts'
import { insertionSort as solutionImpl, type SortFn } from './insertion-sort.solution.ts'
import { insertionSort as practiceImpl } from './insertion-sort.practise.ts'

const implementations = {
  solution: solutionImpl,
  practice: practiceImpl,
}

testImplementations<SortFn>('insertionSort', implementations, (testEach) => {
  // ============================================================
  // BASIC FUNCTIONALITY
  // ============================================================

  testEach('should sort a simple array', (fn) => {
    const arr = [12, 11, 13, 5, 6]
    fn(arr)
    expect(arr).toEqual([5, 6, 11, 12, 13])
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
  // NEARLY SORTED (INSERTION SORT STRENGTH)
  // ============================================================

  testEach('should efficiently handle nearly sorted array', (fn) => {
    const arr = [1, 2, 4, 3, 5, 6, 8, 7]
    fn(arr)
    expect(arr).toEqual([1, 2, 3, 4, 5, 6, 7, 8])
  })

  testEach('should handle array with one element out of place at start', (fn) => {
    const arr = [5, 1, 2, 3, 4]
    fn(arr)
    expect(arr).toEqual([1, 2, 3, 4, 5])
  })

  testEach('should handle array with one element out of place at end', (fn) => {
    const arr = [1, 2, 3, 4, 0]
    fn(arr)
    expect(arr).toEqual([0, 1, 2, 3, 4])
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
  // PERFORMANCE
  // ============================================================

  testEach('should handle medium-sized array', (fn) => {
    const arr = Array.from({ length: 100 }, () => Math.floor(Math.random() * 1000))
    fn(arr)
    expect(arr.length).toBe(100)
    for (let i = 1; i < arr.length; i++) {
      expect(arr[i]!).toBeGreaterThanOrEqual(arr[i - 1]!)
    }
  })
})
