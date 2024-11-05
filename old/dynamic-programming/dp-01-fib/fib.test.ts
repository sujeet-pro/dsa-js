import { fib } from './fib'

describe('fib', () => {
  it('should return the correct Fibonacci number for n = 1', () => {
    expect(fib(1)).toBe(1)
  })

  it('should return the correct Fibonacci number for n = 2', () => {
    expect(fib(2)).toBe(2)
  })

  it('should return the correct Fibonacci number for n = 3', () => {
    expect(fib(3)).toBe(3)
  })

  it('should return the correct Fibonacci number for n = 4', () => {
    expect(fib(4)).toBe(5)
  })

  it('should return the correct Fibonacci number for n = 5', () => {
    expect(fib(5)).toBe(8)
  })

  it('should return the correct Fibonacci number for n = 10', () => {
    expect(fib(10)).toBe(89)
  })

  it('should return the correct Fibonacci number for n = 50', () => {
    expect(fib(50)).toBe(20365011074)
  })
})
