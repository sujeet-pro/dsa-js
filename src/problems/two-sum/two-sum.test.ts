import { describe, it, expect } from 'vitest'
import { twoSum } from './two-sum.ts'

describe('twoSum', () => {
  it('should return indices of two numbers that add up to target', () => {
    expect(twoSum([2, 7, 11, 15], 9)).toEqual([0, 1])
  })

  it('should work when solution is not at the beginning', () => {
    expect(twoSum([3, 2, 4], 6)).toEqual([1, 2])
  })

  it('should work with duplicate numbers', () => {
    expect(twoSum([3, 3], 6)).toEqual([0, 1])
  })

  it('should work with negative numbers', () => {
    expect(twoSum([-1, -2, -3, -4, -5], -8)).toEqual([2, 4])
  })

  it('should throw error when no solution exists', () => {
    expect(() => twoSum([1, 2, 3], 10)).toThrow('No solution found')
  })
})
