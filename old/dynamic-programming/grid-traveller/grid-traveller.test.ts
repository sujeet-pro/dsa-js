import { gridTraveller } from './grid-traveller'

describe('gridTraveller', () => {
  test('should return 1 for a 1x1 grid', () => {
    expect(gridTraveller(1, 1)).toBe(1)
  })

  test('should return 0 for a 0x0 grid', () => {
    expect(gridTraveller(0, 0)).toBe(0)
  })

  test('should return 3 for a 2x3 grid', () => {
    expect(gridTraveller(2, 3)).toBe(3)
  })

  test('should return 3 for a 3x2 grid', () => {
    expect(gridTraveller(3, 2)).toBe(3)
  })

  test('should return 6 for a 3x3 grid', () => {
    expect(gridTraveller(3, 3)).toBe(6)
  })

  // test('should return 10 for a 2x5 grid', () => {
  //   expect(gridTraveller(2, 5)).toBe(10)
  // })

  test('should return 0 for a grid with one dimension as 0', () => {
    expect(gridTraveller(0, 5)).toBe(0)
    expect(gridTraveller(5, 0)).toBe(0)
  })

  test('should return 2333606220 for a 18x18 grid', () => {
    expect(gridTraveller(18, 18)).toBe(2333606220)
  })
})
