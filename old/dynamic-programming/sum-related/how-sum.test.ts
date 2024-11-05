import { howSum } from './how-sum'

describe('howSum', () => {
  test('should return a combination of numbers that add up to the target sum', () => {
    expect(howSum(7, [2, 3])).toEqual(expect.arrayContaining([2, 2, 3]))
    expect(howSum(7, [5, 3, 4, 7])).toEqual(expect.arrayContaining([3, 4]))
    expect(howSum(7, [2, 4])).toBeNull()
    expect(howSum(8, [2, 3, 5])).toEqual(expect.arrayContaining([2, 2, 2, 2]))
  })

  test('should return null if no combination adds up to the target sum', () => {
    expect(howSum(7, [2, 4])).toBeNull()
    expect(howSum(300, [7, 14])).toBeNull()
  })

  test('should return an empty array if the target sum is 0', () => {
    expect(howSum(0, [1, 2, 3])).toEqual([])
  })
})
