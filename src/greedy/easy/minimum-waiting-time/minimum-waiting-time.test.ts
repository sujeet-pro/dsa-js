import { minimumWaitingTime } from './minimum-waiting-time'

describe('minimumWaitingTime', () => {
  it('should return the correct minimum waiting time for a single query', () => {
    expect(minimumWaitingTime([5])).toBe(0)
  })

  it('should return the correct minimum waiting time for multiple queries', () => {
    expect(minimumWaitingTime([1, 4, 5])).toBe(6)
  })

  it('should return the correct minimum waiting time for queries in descending order', () => {
    expect(minimumWaitingTime([5, 4, 1])).toBe(6)
  })

  it('should return the correct minimum waiting time for queries in ascending order', () => {
    expect(minimumWaitingTime([1, 2, 3, 4, 5])).toBe(20)
  })

  it('should return the correct minimum waiting time for queries with the same duration', () => {
    expect(minimumWaitingTime([2, 2, 2, 2])).toBe(12)
  })

  it('should return the correct minimum waiting time for an empty array', () => {
    expect(minimumWaitingTime([])).toBe(0)
  })
})
