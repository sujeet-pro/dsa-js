import { smallestDifference } from './smallest-difference'

describe('smallestDifference', () => {
  test('should return the pair with the smallest difference', () => {
    const arrayOne = [1, 3, 15, 11, 2]
    const arrayTwo = [23, 127, 235, 19, 8]
    const result = smallestDifference(arrayOne, arrayTwo)
    expect(result).toEqual([11, 8])
  })

  test('should return the pair with the smallest difference when arrays have negative numbers', () => {
    const arrayOne = [-1, 5, 10, 20, 28, 3]
    const arrayTwo = [26, 134, 135, 15, 17]
    const result = smallestDifference(arrayOne, arrayTwo)
    expect(result).toEqual([28, 26])
  })

  test('should return the pair with the smallest difference when arrays have same elements', () => {
    const arrayOne = [10, 20, 30]
    const arrayTwo = [10, 20, 30]
    const result = smallestDifference(arrayOne, arrayTwo)
    expect(result).toEqual([10, 10])
  })

  test('should return the pair with the smallest difference when arrays have one element each', () => {
    const arrayOne = [1]
    const arrayTwo = [2]
    const result = smallestDifference(arrayOne, arrayTwo)
    expect(result).toEqual([1, 2])
  })

  test('should return the pair with the smallest difference when arrays have large numbers', () => {
    const arrayOne = [1000000, 2000000, 3000000]
    const arrayTwo = [1000001, 2000001, 3000001]
    const result = smallestDifference(arrayOne, arrayTwo)
    expect(result).toEqual([1000000, 1000001])
  })
})
