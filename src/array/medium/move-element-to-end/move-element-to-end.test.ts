import { moveElementToEnd } from './move-element-to-end'

describe('moveElementToEnd', () => {
  it('should move all instances of the specified integer to the end of the array', () => {
    const array = [2, 1, 2, 2, 2, 3, 4, 2]
    const toMove = 2
    const result = moveElementToEnd(array, toMove)
    expect(result.slice(0, 3)).not.toContain(toMove)
    expect(result.slice(3)).toEqual([2, 2, 2, 2, 2])
  })

  it('should handle arrays with no instances of the specified integer', () => {
    const array = [1, 3, 4, 5, 6]
    const toMove = 2
    const result = moveElementToEnd(array, toMove)
    expect(result).toEqual([1, 3, 4, 5, 6])
  })

  it('should handle arrays where all elements are the specified integer', () => {
    const array = [2, 2, 2, 2, 2]
    const toMove = 2
    const result = moveElementToEnd(array, toMove)
    expect(result).toEqual([2, 2, 2, 2, 2])
  })

  it('should handle empty arrays', () => {
    const array: number[] = []
    const toMove = 2
    const result = moveElementToEnd(array, toMove)
    expect(result).toEqual([])
  })

  it('should handle arrays with one element that is not the specified integer', () => {
    const array = [1]
    const toMove = 2
    const result = moveElementToEnd(array, toMove)
    expect(result).toEqual([1])
  })

  it('should handle arrays with one element that is the specified integer', () => {
    const array = [2]
    const toMove = 2
    const result = moveElementToEnd(array, toMove)
    expect(result).toEqual([2])
  })
})
