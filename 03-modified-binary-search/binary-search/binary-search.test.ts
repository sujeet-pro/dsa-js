import { binarySearch } from "./binary-search.solution"

describe('03 - Modified Binary Search  / Binary Search', () => {
  test('Empty Arry', () => {
    expect(binarySearch([], 1)).toBe(-1)
  })

  test('Valid Target', () => {
    // expect(binarySearch([2, 3, 4], 2)).toBe(0)
    // expect(binarySearch([2, 3, 4], 3)).toBe(1)
    expect(binarySearch([2, 3, 4], 4)).toBe(2)
  })


  test('InValid Target', () => {
    expect(binarySearch([2, 3, 4], 1)).toBe(-1)
    expect(binarySearch([2, 3, 4], 5)).toBe(-1)
    expect(binarySearch([2, 5, 7], 4)).toBe(-1)
  })
})