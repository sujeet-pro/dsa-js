import { canSum } from './can-sum'

describe('canSum', () => {
  test('should return true when targetSum can be achieved with the numbers', () => {
    expect(canSum(7, [2, 3])).toBe(true)
    expect(canSum(7, [5, 3, 4, 7])).toBe(true)
    expect(canSum(8, [2, 3, 5])).toBe(true)
  })

  test('should return false when targetSum cannot be achieved with the numbers', () => {
    expect(canSum(7, [2, 4])).toBe(false)
    expect(canSum(300, [7, 14])).toBe(false)
  })

  test('should return true for targetSum 0', () => {
    expect(canSum(0, [1, 2, 3])).toBe(true)
  })

  test('should return false for empty numbers array and non-zero targetSum', () => {
    expect(canSum(7, [])).toBe(false)
  })
})
