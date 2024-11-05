import { bestSum } from './best-sum'

describe('bestSum', () => {
  test('returns the shortest combination of numbers that add up to the targetSum', () => {
    expect(bestSum(7, [5, 3, 4, 7])).toEqual([7])
    expect(bestSum(8, [2, 3, 5])).toIncludeSameMembers([3, 5])
    expect(bestSum(8, [1, 4, 5])).toIncludeSameMembers([4, 4])
  })

  test('returns null if no combination adds up to the targetSum', () => {
    expect(bestSum(7, [2, 4])).toBeNull()
    expect(bestSum(300, [7, 14])).toBeNull()
  })

  test('returns an empty array if the targetSum is 0', () => {
    expect(bestSum(0, [1, 2, 3])).toEqual([])
  })
})
