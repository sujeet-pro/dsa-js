import { tandemBicycle } from './tandem-bicycle'

describe('tandemBicycle', () => {
  it('should return the maximum possible total speed when fastest is true', () => {
    const redShirtSpeeds = [5, 5, 3, 9, 2]
    const blueShirtSpeeds = [3, 6, 7, 2, 1]
    const fastest = true
    const result = tandemBicycle(redShirtSpeeds, blueShirtSpeeds, fastest)
    expect(result).toBe(32)
  })

  it('should return the minimum possible total speed when fastest is false', () => {
    const redShirtSpeeds = [5, 5, 3, 9, 2]
    const blueShirtSpeeds = [3, 6, 7, 2, 1]
    const fastest = false
    const result = tandemBicycle(redShirtSpeeds, blueShirtSpeeds, fastest)
    expect(result).toBe(25)
  })

  it('should handle the case when all speeds are the same', () => {
    const redShirtSpeeds = [4, 4, 4, 4]
    const blueShirtSpeeds = [4, 4, 4, 4]
    const fastest = true
    const result = tandemBicycle(redShirtSpeeds, blueShirtSpeeds, fastest)
    expect(result).toBe(16)
  })

  it('should handle the case when there is only one rider in each group', () => {
    const redShirtSpeeds = [5]
    const blueShirtSpeeds = [3]
    const fastest = true
    const result = tandemBicycle(redShirtSpeeds, blueShirtSpeeds, fastest)
    expect(result).toBe(5)
  })

  it('should handle the case when there are no riders', () => {
    const redShirtSpeeds: number[] = []
    const blueShirtSpeeds: number[] = []
    const fastest = true
    const result = tandemBicycle(redShirtSpeeds, blueShirtSpeeds, fastest)
    expect(result).toBe(0)
  })
})
