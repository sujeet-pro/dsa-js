import { arrayOfProducts } from './array-of-products'

describe('arrayOfProducts', () => {
  it('should return the correct product array for a given input array', () => {
    expect(arrayOfProducts([1, 2, 3, 4])).toEqual([24, 12, 8, 6])
    expect(arrayOfProducts([5, 1, 4, 2])).toEqual([8, 40, 10, 20])
    expect(arrayOfProducts([2, 3, 4, 5])).toEqual([60, 40, 30, 24])
  })

  it('should handle arrays with one element', () => {
    expect(arrayOfProducts([7])).toEqual([1])
  })

  it('should handle arrays with two elements', () => {
    expect(arrayOfProducts([3, 5])).toEqual([5, 3])
  })

  it('should handle arrays with zeroes', () => {
    expect(arrayOfProducts([1, 0, 3, 4])).toEqual([0, 12, 0, 0])
    expect(arrayOfProducts([0, 0, 0])).toEqual([0, 0, 0])
  })

  it('should handle arrays with negative numbers', () => {
    expect(arrayOfProducts([-1, 2, -3, 4])).toEqual([-24, 12, -8, 6])
  })
})
