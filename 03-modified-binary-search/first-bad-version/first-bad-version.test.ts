import { API, getFirstVersion } from "./first-bad-version.solution"

const testCases = [
  // n, firstBadVersion, attempt required
  [8, 6, 3],
  [5, 3, 2],
  [7, 4, 3],

  [100, 67, 7],
  [13, 10, 3],
  [29, 10, 5],
  [40, 28, 5],
  [23, 10, 5]
]
describe('03 Modified Binary Search / First Bad Version', () => {
  test.each(testCases)('n=%i, fbv=%i, attempt=%i', (n, fbv, attempt) => {
    const api = new API(fbv)
    const [resultFbv, resultAttempt] = getFirstVersion(n, api)

    expect(resultFbv).toBe(fbv)
    expect(resultAttempt).toBe(attempt)
    expect(resultAttempt).toBe(api.executionCount)
  })
})