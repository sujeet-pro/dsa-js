import { bestSeat, bestSeat2 } from './best-seat'

describe('bestSeat', () => {
  test('should return the index of the best seat', () => {
    expect(bestSeat([1, 0, 0, 0, 1, 0, 0, 0, 0, 1])).toBe(6)
    expect(bestSeat([1, 0, 0, 1])).toBe(1)
    expect(bestSeat([1, 0, 1, 0, 0, 1])).toBe(3)
    expect(bestSeat([1, 0, 0, 0, 0, 0, 1])).toBe(3)
    expect(bestSeat([1, 0, 0, 0, 1, 0, 1])).toBe(2)
    // implementation 2
    expect(bestSeat2([1, 0, 0, 0, 1, 0, 0, 0, 0, 1])).toBe(6)
    expect(bestSeat2([1, 0, 0, 1])).toBe(1)
    expect(bestSeat2([1, 0, 1, 0, 0, 1])).toBe(3)
    expect(bestSeat2([1, 0, 0, 0, 0, 0, 1])).toBe(3)
    expect(bestSeat2([1, 0, 0, 0, 1, 0, 1])).toBe(2)
  })

  test('should return -1 if there is no seat to sit in', () => {
    expect(bestSeat([1, 1, 1, 1])).toBe(-1)
    expect(bestSeat([1])).toBe(-1)

    expect(bestSeat2([1, 1, 1, 1])).toBe(-1)
    expect(bestSeat2([1])).toBe(-1)
  })

  test('should handle edge cases', () => {
    expect(bestSeat([1, 0, 1])).toBe(1)
    expect(bestSeat([1, 0, 0, 1])).toBe(1)
    expect(bestSeat([1, 0, 0, 0, 1])).toBe(2)

    expect(bestSeat2([1, 0, 1])).toBe(1)
    expect(bestSeat2([1, 0, 0, 1])).toBe(1)
    expect(bestSeat2([1, 0, 0, 0, 1])).toBe(2)
  })
})
