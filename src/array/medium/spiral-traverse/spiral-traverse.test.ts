import { spiralTraverse } from './spiral-traverse'

describe('spiralTraverse', () => {
  it('should return an empty array for an empty input', () => {
    expect(spiralTraverse([])).toEqual([])
  })

  it('should return a single element for a 1x1 array', () => {
    expect(spiralTraverse([[1]])).toEqual([1])
  })

  it('should traverse a 2x2 array in spiral order', () => {
    const input = [
      [1, 2],
      [4, 3],
    ]
    const output = [1, 2, 3, 4]
    expect(spiralTraverse(input)).toEqual(output)
  })

  it('should traverse a 3x3 array in spiral order', () => {
    const input = [
      [1, 2, 3],
      [8, 9, 4],
      [7, 6, 5],
    ]
    const output = [1, 2, 3, 4, 5, 6, 7, 8, 9]
    expect(spiralTraverse(input)).toEqual(output)
  })

  it('should traverse a 4x4 array in spiral order', () => {
    const input = [
      [1, 2, 3, 4],
      [12, 13, 14, 5],
      [11, 16, 15, 6],
      [10, 9, 8, 7],
    ]
    const output = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]
    expect(spiralTraverse(input)).toEqual(output)
  })

  it('should traverse a 3x4 array in spiral order', () => {
    const input = [
      [1, 2, 3, 4],
      [10, 11, 12, 5],
      [9, 8, 7, 6],
    ]
    const output = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
    expect(spiralTraverse(input)).toEqual(output)
  })

  it('should traverse a 4x3 array in spiral order', () => {
    const input = [
      [1, 2, 3],
      [12, 13, 4],
      [11, 14, 5],
      [10, 9, 8],
    ]
    const output = [1, 2, 3, 4, 5, 8, 9, 10, 11, 12, 13, 14]
    expect(spiralTraverse(input)).toEqual(output)
  })

  it('should traverse a 4x3 array in spiral order', () => {
    const input = [
      [27, 12, 35, 26],
      [25, 21, 94, 11],
      [19, 96, 43, 56],
      [55, 36, 10, 18],
      [96, 83, 31, 94],
      [93, 11, 90, 16],
    ]
    const output = [27, 12, 35, 26, 11, 56, 18, 94, 16, 90, 11, 93, 96, 55, 19, 25, 21, 94, 43, 10, 31, 83, 36, 96]
    expect(spiralTraverse(input)).toEqual(output)
  })
})
