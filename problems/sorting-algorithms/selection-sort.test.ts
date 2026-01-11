import { expect } from 'vitest'
import { testImplementations } from '../../test-utils/test-implementations.ts'
import { selectionSort as solutionImpl, type SortFn } from './selection-sort.solution.ts'
import { selectionSort as practiceImpl } from './selection-sort.practise.ts'

const implementations = {
  solution: solutionImpl,
  practice: practiceImpl,
}

testImplementations<SortFn>('selectionSort', implementations, (testEach) => {
  // ============================================================
  // BASIC FUNCTIONALITY
  // ============================================================

  testEach('should sort a simple array', (fn) => {
    const arr = [64, 25, 12, 22, 11]
    fn(arr)
    expect(arr).toEqual([11, 12, 22, 25, 64])
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

  testEach('should handle all zeros', (fn) => {
    const arr = [0, 0, 0, 0]
    fn(arr)
    expect(arr).toEqual([0, 0, 0, 0])
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
