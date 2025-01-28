import { selectionSort } from './selection-sort'

describe('selectionSort', () => {
  test('should sort an array of numbers in ascending order', () => {
    const array = [64, 25, 12, 22, 11]
    const sortedArray = selectionSort(array)
    expect(sortedArray).toEqual([11, 12, 22, 25, 64])
  })

  test('should handle an empty array', () => {
    const array: number[] = []
    const sortedArray = selectionSort(array)
    expect(sortedArray).toEqual([])
  })

  test('should handle an array with one element', () => {
    const array = [1]
    const sortedArray = selectionSort(array)
    expect(sortedArray).toEqual([1])
  })

  test('should handle an array with already sorted elements', () => {
    const array = [1, 2, 3, 4, 5]
    const sortedArray = selectionSort(array)
    expect(sortedArray).toEqual([1, 2, 3, 4, 5])
  })

  test('should handle an array with all identical elements', () => {
    const array = [5, 5, 5, 5, 5]
    const sortedArray = selectionSort(array)
    expect(sortedArray).toEqual([5, 5, 5, 5, 5])
  })

  test('should handle an array with negative numbers', () => {
    const array = [3, -2, -1, 0, 2, 1]
    const sortedArray = selectionSort(array)
    expect(sortedArray).toEqual([-2, -1, 0, 1, 2, 3])
  })
})
