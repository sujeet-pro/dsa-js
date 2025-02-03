import { longestPeak } from './longest-peak'

describe('longestPeak', () => {
  it('should return the length of the longest peak', () => {
    expect(longestPeak([1, 4, 10, 2])).toBe(4)
    expect(longestPeak([1, 2, 3, 3, 2, 1])).toBe(0)
    expect(longestPeak([1, 2, 3, 2, 1, 2, 3, 4, 3, 2, 1])).toBe(7)
    expect(longestPeak([5, 4, 3, 2, 1, 2, 3, 4, 5, 6])).toBe(0)
    expect(longestPeak([1, 2, 3, 4, 5, 4, 3, 2, 1, 2, 3, 4, 5, 6, 7, 8, 9, 8, 7, 6, 5, 4, 3, 2, 1])).toBe(17)
  })

  it('should return 0 for arrays with no peaks', () => {
    expect(longestPeak([1, 2, 3, 4, 5])).toBe(0)
    expect(longestPeak([5, 4, 3, 2, 1])).toBe(0)
    expect(longestPeak([1, 1, 1, 1, 1])).toBe(0)
  })

  it('should return 0 for arrays with less than 3 elements', () => {
    expect(longestPeak([1])).toBe(0)
    expect(longestPeak([1, 2])).toBe(0)
  })
})
