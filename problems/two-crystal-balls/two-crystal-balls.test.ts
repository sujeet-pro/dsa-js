import { expect } from 'vitest'
import { testImplementations } from '../../test-utils/test-implementations.ts'
import { twoCrystalBalls as solutionImpl, type TwoCrystalBallsFn } from './two-crystal-balls.solution.ts'
import { twoCrystalBalls as practiceImpl } from './two-crystal-balls.practise.ts'

const implementations = {
  solution: solutionImpl,
  practice: practiceImpl,
}

/**
 * Helper to create a breaks array where the ball breaks starting at index `breakAt`.
 * If breakAt is -1 or >= length, all values are false (ball never breaks).
 */
const createBreaksArray = (length: number, breakAt: number): boolean[] => {
  return Array.from({ length }, (_, i) => breakAt >= 0 && i >= breakAt)
}

testImplementations<TwoCrystalBallsFn>('twoCrystalBalls', implementations, (testEach) => {
  // ============================================================
  // BASIC FUNCTIONALITY
  // ============================================================

  testEach('should find breaking point in middle of array', (fn) => {
    const breaks = createBreaksArray(10, 5)
    expect(fn(breaks)).toBe(5)
  })

  testEach('should find breaking point at beginning', (fn) => {
    const breaks = createBreaksArray(10, 0)
    expect(fn(breaks)).toBe(0)
  })

  testEach('should find breaking point at end', (fn) => {
    const breaks = createBreaksArray(10, 9)
    expect(fn(breaks)).toBe(9)
  })

  testEach('should return -1 when ball never breaks', (fn) => {
    const breaks = createBreaksArray(10, -1)
    expect(fn(breaks)).toBe(-1)
  })

  testEach('should handle example from problem: [F,F,F,T,T,T]', (fn) => {
    expect(fn([false, false, false, true, true, true])).toBe(3)
  })

  // ============================================================
  // EDGE CASES - MINIMUM INPUT
  // ============================================================

  testEach('should handle empty array', (fn) => {
    expect(fn([])).toBe(-1)
  })

  testEach('should handle single element - breaks', (fn) => {
    expect(fn([true])).toBe(0)
  })

  testEach('should handle single element - does not break', (fn) => {
    expect(fn([false])).toBe(-1)
  })

  testEach('should handle two elements - breaks at first', (fn) => {
    expect(fn([true, true])).toBe(0)
  })

  testEach('should handle two elements - breaks at second', (fn) => {
    expect(fn([false, true])).toBe(1)
  })

  testEach('should handle two elements - never breaks', (fn) => {
    expect(fn([false, false])).toBe(-1)
  })

  // ============================================================
  // BOUNDARY CONDITIONS - SQRT BOUNDARIES
  // ============================================================

  testEach('should handle perfect square length (n=9)', (fn) => {
    // sqrt(9) = 3, so jumps at 3, 6, 9
    const breaks = createBreaksArray(9, 5)
    expect(fn(breaks)).toBe(5)
  })

  testEach('should handle perfect square length (n=16)', (fn) => {
    // sqrt(16) = 4, so jumps at 4, 8, 12, 16
    const breaks = createBreaksArray(16, 10)
    expect(fn(breaks)).toBe(10)
  })

  testEach('should handle perfect square length (n=100)', (fn) => {
    // sqrt(100) = 10, so jumps at 10, 20, 30, ...
    const breaks = createBreaksArray(100, 55)
    expect(fn(breaks)).toBe(55)
  })

  testEach('should handle n=100 breaking at exact jump point', (fn) => {
    // Break at 30, which is exactly a jump point
    const breaks = createBreaksArray(100, 30)
    expect(fn(breaks)).toBe(30)
  })

  testEach('should handle n=100 breaking right after jump point', (fn) => {
    // Break at 31, which is right after jump at 30
    const breaks = createBreaksArray(100, 31)
    expect(fn(breaks)).toBe(31)
  })

  testEach('should handle n=100 breaking right before next jump', (fn) => {
    // Break at 39, right before jump at 40
    const breaks = createBreaksArray(100, 39)
    expect(fn(breaks)).toBe(39)
  })

  // ============================================================
  // NON-PERFECT SQUARE LENGTHS
  // ============================================================

  testEach('should handle non-perfect square (n=10)', (fn) => {
    // sqrt(10) ≈ 3.16, floor = 3
    const breaks = createBreaksArray(10, 7)
    expect(fn(breaks)).toBe(7)
  })

  testEach('should handle non-perfect square (n=15)', (fn) => {
    // sqrt(15) ≈ 3.87, floor = 3
    const breaks = createBreaksArray(15, 11)
    expect(fn(breaks)).toBe(11)
  })

  testEach('should handle non-perfect square (n=99)', (fn) => {
    // sqrt(99) ≈ 9.95, floor = 9
    const breaks = createBreaksArray(99, 50)
    expect(fn(breaks)).toBe(50)
  })

  // ============================================================
  // ALL TRUE / ALL FALSE
  // ============================================================

  testEach('should handle all true array (small)', (fn) => {
    expect(fn([true, true, true, true, true])).toBe(0)
  })

  testEach('should handle all true array (large)', (fn) => {
    const breaks = createBreaksArray(100, 0)
    expect(fn(breaks)).toBe(0)
  })

  testEach('should handle all false array (small)', (fn) => {
    expect(fn([false, false, false, false, false])).toBe(-1)
  })

  testEach('should handle all false array (large)', (fn) => {
    const breaks = createBreaksArray(100, -1)
    expect(fn(breaks)).toBe(-1)
  })

  // ============================================================
  // SPECIAL POSITIONS
  // ============================================================

  testEach('should find break at index 1', (fn) => {
    const breaks = createBreaksArray(10, 1)
    expect(fn(breaks)).toBe(1)
  })

  testEach('should find break at second-to-last position', (fn) => {
    const breaks = createBreaksArray(10, 8)
    expect(fn(breaks)).toBe(8)
  })

  testEach('should handle break in last segment of jumps', (fn) => {
    // For n=100, last jump lands at 100 (or past it)
    // If break is at 95, we should find it in the final linear search
    const breaks = createBreaksArray(100, 95)
    expect(fn(breaks)).toBe(95)
  })

  // ============================================================
  // LARGER ARRAYS
  // ============================================================

  testEach('should handle n=1000', (fn) => {
    const breaks = createBreaksArray(1000, 500)
    expect(fn(breaks)).toBe(500)
  })

  testEach('should handle n=1000 breaking at sqrt boundary', (fn) => {
    // sqrt(1000) ≈ 31.6, floor = 31
    // Check break at 31 (first jump point)
    const breaks = createBreaksArray(1000, 31)
    expect(fn(breaks)).toBe(31)
  })

  testEach('should handle n=10000', (fn) => {
    const breaks = createBreaksArray(10000, 7777)
    expect(fn(breaks)).toBe(7777)
  })

  // ============================================================
  // PERFORMANCE TESTS
  // ============================================================

  testEach('should efficiently handle large array (n=1000000) - break at start', (fn) => {
    const breaks = createBreaksArray(1000000, 0)
    expect(fn(breaks)).toBe(0)
  })

  testEach('should efficiently handle large array (n=1000000) - break at end', (fn) => {
    const breaks = createBreaksArray(1000000, 999999)
    expect(fn(breaks)).toBe(999999)
  })

  testEach('should efficiently handle large array (n=1000000) - break in middle', (fn) => {
    const breaks = createBreaksArray(1000000, 500000)
    expect(fn(breaks)).toBe(500000)
  })

  testEach('should efficiently handle large array (n=1000000) - no break', (fn) => {
    const breaks = createBreaksArray(1000000, -1)
    expect(fn(breaks)).toBe(-1)
  })

  // ============================================================
  // EDGE CASES AT JUMP BOUNDARIES
  // ============================================================

  testEach('should handle break exactly at first jump (n=100)', (fn) => {
    // sqrt(100) = 10, first jump at index 10
    const breaks = createBreaksArray(100, 10)
    expect(fn(breaks)).toBe(10)
  })

  testEach('should handle break exactly at last complete jump (n=100)', (fn) => {
    // sqrt(100) = 10, jumps at 10, 20, 30, 40, 50, 60, 70, 80, 90, 100
    // Last complete jump within array is 90
    const breaks = createBreaksArray(100, 90)
    expect(fn(breaks)).toBe(90)
  })

  testEach('should handle break between jumps (indices 3-5 for n=9)', (fn) => {
    // sqrt(9) = 3, first jump at 3
    // Break at 4 means: jump to 3 (safe), jump to 6 (breaks)
    // Go back to 3, linear search finds 4
    const breaks = createBreaksArray(9, 4)
    expect(fn(breaks)).toBe(4)
  })

  // ============================================================
  // REGRESSION TESTS
  // ============================================================

  testEach('should handle n=3 with break at 0', (fn) => {
    expect(fn([true, true, true])).toBe(0)
  })

  testEach('should handle n=3 with break at 1', (fn) => {
    expect(fn([false, true, true])).toBe(1)
  })

  testEach('should handle n=3 with break at 2', (fn) => {
    expect(fn([false, false, true])).toBe(2)
  })

  testEach('should handle n=3 with no break', (fn) => {
    expect(fn([false, false, false])).toBe(-1)
  })

  testEach('should handle n=4 with break at 2', (fn) => {
    // sqrt(4) = 2, jump to 2, breaks immediately
    // go back to 0, linear search: 0=false, 1=false, 2=true
    expect(fn([false, false, true, true])).toBe(2)
  })
})
