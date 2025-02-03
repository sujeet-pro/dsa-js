import { isMonotonic } from './monotonic-array'

describe('isMonotonic', () => {
  test('should return true for an empty array', () => {
    expect(isMonotonic([])).toBe(true)
  })

  test('should return true for an array with a single element', () => {
    expect(isMonotonic([1])).toBe(true)
  })

  test('should return true for a non-decreasing array', () => {
    expect(isMonotonic([1, 2, 2, 3])).toBe(true)
  })

  test('should return true for a non-increasing array', () => {
    expect(isMonotonic([3, 2, 2, 1])).toBe(true)
  })

  test('should return false for an array that is neither non-increasing nor non-decreasing', () => {
    expect(isMonotonic([1, 3, 2])).toBe(false)
  })

  test('should return true for an array with all elements the same', () => {
    expect(isMonotonic([2, 2, 2, 2])).toBe(true)
  })

  test('should return true for a strictly increasing array', () => {
    expect(isMonotonic([1, 2, 3, 4, 5])).toBe(true)
  })

  test('should return true for a strictly decreasing array', () => {
    expect(isMonotonic([5, 4, 3, 2, 1])).toBe(true)
  })
})
