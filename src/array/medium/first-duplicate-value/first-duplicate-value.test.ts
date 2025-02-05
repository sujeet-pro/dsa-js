import { firstDuplicateValue } from './first-duplicate-value'

describe('firstDuplicateValue', () => {
  test('returns the first duplicate value when there is one', () => {
    expect(firstDuplicateValue([2, 1, 3, 5, 3, 2])).toBe(3)
    expect(firstDuplicateValue([2, 4, 3, 5, 1, 4])).toBe(4)
  })

  test('returns -1 when there are no duplicates', () => {
    expect(firstDuplicateValue([1, 2, 3, 4, 5])).toBe(-1)
    expect(firstDuplicateValue([5, 4, 3, 2, 1])).toBe(-1)
  })

  test('handles arrays with a single element', () => {
    expect(firstDuplicateValue([1])).toBe(-1)
  })

  test('handles empty arrays', () => {
    expect(firstDuplicateValue([])).toBe(-1)
  })

  test('handles arrays with multiple duplicates', () => {
    expect(firstDuplicateValue([2, 1, 3, 5, 3, 2, 4, 5])).toBe(3)
  })
})
