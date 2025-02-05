import { zeroSumSubarray } from './zero-sum-subarray'

describe('zeroSumSubarray', () => {
  test('should return true for an array with a zero-sum subarray', () => {
    expect(zeroSumSubarray([1, 2, -3, 3])).toBe(true)
  })

  test('should return false for an array without a zero-sum subarray', () => {
    expect(zeroSumSubarray([1, 2, 3])).toBe(false)
  })

  test('should return true for an array with a single zero element', () => {
    expect(zeroSumSubarray([0])).toBe(true)
  })

  test('should return false for an empty array', () => {
    expect(zeroSumSubarray([])).toBe(false)
  })

  test('should return true for an array with multiple zero-sum subarrays', () => {
    expect(zeroSumSubarray([1, -1, 2, -2, 3, -3])).toBe(true)
  })

  test('should return true for an array with a zero-sum subarray at the beginning', () => {
    expect(zeroSumSubarray([3, -3, 1, 2])).toBe(true)
  })

  test('should return true for an array with a zero-sum subarray at the end', () => {
    expect(zeroSumSubarray([1, 2, 3, -6])).toBe(true)
  })

  test('should return true for an array with a zero-sum subarray in the middle', () => {
    expect(zeroSumSubarray([1, 2, -3, 4])).toBe(true)
  })
})
