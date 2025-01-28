import { binarySearch } from './binary-search'

describe('binarySearch', () => {
  test('should return the index of the target element if it exists in the array', () => {
    expect(binarySearch([1, 2, 3, 4, 5], 3)).toBe(2)
    expect(binarySearch([10, 20, 30, 40, 50], 40)).toBe(3)
    expect(binarySearch([-5, -3, 0, 2, 4], 0)).toBe(2)
    expect(binarySearch([0, 1, 21, 33, 45, 45, 61, 71, 72, 73], 33)).toBe(3)
  })

  test('should return -1 if the target element does not exist in the array', () => {
    expect(binarySearch([1, 2, 3, 4, 5], 6)).toBe(-1)
    expect(binarySearch([10, 20, 30, 40, 50], 25)).toBe(-1)
    expect(binarySearch([-5, -3, 0, 2, 4], 1)).toBe(-1)
  })

  test('should return -1 if the array is empty', () => {
    expect(binarySearch([], 1)).toBe(-1)
  })

  test('should handle arrays with one element', () => {
    expect(binarySearch([1], 1)).toBe(0)
    expect(binarySearch([1], 2)).toBe(-1)
  })

  test('should handle arrays with duplicate elements', () => {
    expect(binarySearch([1, 2, 2, 2, 3], 2)).toBe(2) // The index of any of the 2s is acceptable
  })
})
