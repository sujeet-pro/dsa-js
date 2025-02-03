import { threeNumberSum } from './three-number-sum'

describe('threeNumberSum', () => {
  it('should return an empty array when no triplets sum to the target', () => {
    const result = threeNumberSum([1, 2, 3, 4, 5], 50)
    expect(result).toEqual([])
  })

  it('should return the correct triplets when they exist', () => {
    const result = threeNumberSum([1, 2, 3, 4, 5, 6, 7, 8, 9, 15], 18)
    expect(result).toEqual([
      [1, 2, 15],
      [1, 8, 9],
      [2, 7, 9],
      [3, 6, 9],
      [3, 7, 8],
      [4, 5, 9],
      [4, 6, 8],
      [5, 6, 7],
    ])
  })

  it('should handle negative numbers correctly', () => {
    const result = threeNumberSum([-8, -6, 1, 2, 3, 5, 6, 12], 0)
    expect(result).toEqual([
      [-8, 2, 6],
      [-8, 3, 5],
      [-6, 1, 5],
    ])
  })

  it('should return an empty array for an empty input array', () => {
    const result = threeNumberSum([], 10)
    expect(result).toEqual([])
  })

  it('should return an empty array when the input array has less than 3 elements', () => {
    const result = threeNumberSum([1, 2], 3)
    expect(result).toEqual([])
  })
})
