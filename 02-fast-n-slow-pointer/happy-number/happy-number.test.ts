import { isHappyNumber, isHappyNumberUsingSet } from "./happy-number.solution"

describe('02 - Fast and Slow Pointer', () => {
  test('valid in a single step', () => {
    expect(isHappyNumber(1)).toBe(true)
    expect(isHappyNumber(100)).toBe(true)
  })
  test('Using set: valid in a single step', () => {
    expect(isHappyNumberUsingSet(1)).toBe(true)
    expect(isHappyNumberUsingSet(100)).toBe(true)
  })


  test('valid in multiple steps', () => {
    expect(isHappyNumber(19)).toBe(true)
    expect(isHappyNumber(23)).toBe(true)
  })

  test('Using set: valid in multiple steps', () => {
    expect(isHappyNumberUsingSet(19)).toBe(true)
    expect(isHappyNumberUsingSet(23)).toBe(true)
  })

  test('with cycles', () => {
    expect(isHappyNumber(2)).toBe(false)
  })
  test('Using Set: with cycles', () => {
    expect(isHappyNumberUsingSet(2)).toBe(false)
  })
})