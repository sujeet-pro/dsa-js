import { circularArrayLoop } from './circular-array-loop.solution'

describe('02 Fast and Slow pointer - Circular Array Loop', () => {
  test('Empty', () => {
    expect(circularArrayLoop([])).toBe(false)
  })

  test('Circular Examples', () => {
    expect(circularArrayLoop([3, 1, 2])).toBe(true)
    expect(circularArrayLoop([-2, -1, -3])).toBe(true)
    expect(circularArrayLoop([3, -3, 1, 1])).toBe(true)
    expect(circularArrayLoop([1, 3, -2, -4, 1])).toBe(true)
    expect(circularArrayLoop([1, 2, -3, 3, 4, 7, 1])).toBe(true)
    expect(circularArrayLoop([3, 3, 1, -1, 2])).toBe(true)
  })

  test('Non Circular Examples', () => {
    expect(circularArrayLoop([2, 1, -1, -2])).toBe(false)
    expect(circularArrayLoop([5, 4, -2, -1, 3])).toBe(false)
  })
})
