import { describe, it } from 'vitest'

/**
 * A record of named implementations where keys are implementation names
 * and values are the implementation functions.
 */
export type Implementations<T extends (...args: never[]) => unknown> = Record<string, T>

/**
 * Function signature for the `testEach` helper provided to test cases.
 * The `fn` parameter has the exact type of the implementation functions.
 */
export type TestEachFn<T extends (...args: never[]) => unknown> = (testName: string, testFn: (fn: T) => void) => void

/**
 * Creates a test suite that runs the same tests against multiple implementations.
 * This ensures all implementations conform to the same behavior contract.
 *
 * @param suiteName - The name of the test suite
 * @param implementations - Object where keys are implementation names and values are functions
 * @param testCases - Function that defines test cases using the provided `testEach` helper
 *
 * @example
 * ```ts
 * import { testImplementations } from '../../test-utils/test-implementations.ts'
 * import { linearSearch1, linearSearch2, type LinearSearchFn } from './linear-search.ts'
 *
 * const implementations = {
 *   linearSearch1,
 *   linearSearch2,
 * }
 *
 * testImplementations<LinearSearchFn>('linearSearch', implementations, (testEach) => {
 *   testEach('should return true for valid input', (fn) => {
 *     expect(fn([1, 2, 3], 2)).toBe(true)
 *   })
 *
 *   testEach('should return false for invalid input', (fn) => {
 *     expect(fn([1, 2, 3], 5)).toBe(false)
 *   })
 * })
 * ```
 */
export function testImplementations<T extends (...args: never[]) => unknown>(
  suiteName: string,
  implementations: Implementations<T>,
  testCases: (testEach: TestEachFn<T>) => void,
): void {
  describe(suiteName, () => {
    for (const [name, fn] of Object.entries(implementations)) {
      describe(name, () => {
        const testEach: TestEachFn<T> = (testName, testFn) => {
          it(testName, () => {
            testFn(fn)
          })
        }

        testCases(testEach)
      })
    }
  })
}
