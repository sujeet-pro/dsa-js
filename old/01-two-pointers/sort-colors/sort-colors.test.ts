import { sortColors } from './sort-colors.solution'

function matchColors(actual: number[], expected: number[]) {
  expect(actual).toHaveLength(expected.length) // Checks length
  expect(actual).toEqual(expect.arrayContaining(expected)) // Check for all the elements
  expect(actual.toString()).toBe(expected.toString()) // Ensures order
}

describe('Two Pointer: Sort Color', () => {
  test('Empty', () => {
    matchColors(sortColors([]), [])
  })
  test('Single Color', () => {
    const testCases = [
      [0, 0, 0],
      [1, 1, 1],
      [2, 2, 2],
    ]
    testCases.forEach(testCase => {
      matchColors(sortColors(testCase), testCase)
    })
  })

  test('Multi Color', () => {
    const testCases = [
      [0, 1, 0, 1],
      [0, 1, 2, 0, 1],
      [0, 1, 0],
      [1, 1, 0, 2],
      [2, 1, 1, 0, 0],
      [2, 2, 2, 0, 1, 0],
      [2, 1, 1, 0, 1, 0, 2],
    ] as const

    testCases.forEach(testCase => {
      matchColors(sortColors([...testCase]), [...testCase].sort())
    })
  })
})
