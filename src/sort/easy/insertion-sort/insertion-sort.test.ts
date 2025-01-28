import { insertionSort } from './insertion-sort'

describe('insertionSort', () => {
  test('should sort an array of numbers in ascending order', () => {
    expect(insertionSort([5, 3, 8, 4, 2])).toEqual([2, 3, 4, 5, 8])
  })

  test('should handle an already sorted array', () => {
    expect(insertionSort([1, 2, 3, 4, 5])).toEqual([1, 2, 3, 4, 5])
  })

  test('should handle an array with duplicate values', () => {
    expect(insertionSort([5, 3, 8, 3, 2])).toEqual([2, 3, 3, 5, 8])
  })

  test('should handle an array with negative numbers', () => {
    expect(insertionSort([5, -3, 8, 4, -2])).toEqual([-3, -2, 4, 5, 8])
  })

  test('should handle an empty array', () => {
    expect(insertionSort([])).toEqual([])
  })

  test('should handle an array with one element', () => {
    expect(insertionSort([1])).toEqual([1])
  })
})
