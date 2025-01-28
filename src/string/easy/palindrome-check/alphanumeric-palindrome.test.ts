import { isAlphaNumericPalindrome } from './alphanumeric-palindrome'

describe('isAlphaNumericPalindrome', () => {
  test('with special chars', () => {
    expect(isAlphaNumericPalindrome('A man, a plan, a canal: Panama')).toBe(true)
  })

  test('should return true for an empty string', () => {
    expect(isAlphaNumericPalindrome('')).toBe(true)
  })

  test('should return true for a single character', () => {
    expect(isAlphaNumericPalindrome('a')).toBe(true)
    expect(isAlphaNumericPalindrome('1')).toBe(true)
  })

  test('should return true for a valid alphanumeric palindrome', () => {
    expect(isAlphaNumericPalindrome('A man, a plan, a canal, Panama')).toBe(true)
    expect(isAlphaNumericPalindrome('No lemon, no melon')).toBe(true)
    expect(isAlphaNumericPalindrome('racecar')).toBe(true)
    expect(isAlphaNumericPalindrome('12321')).toBe(true)
  })

  test('should return false for an invalid alphanumeric palindrome', () => {
    expect(isAlphaNumericPalindrome('hello')).toBe(false)
    expect(isAlphaNumericPalindrome('world')).toBe(false)
    expect(isAlphaNumericPalindrome('12345')).toBe(false)
    expect(isAlphaNumericPalindrome('0P')).toBe(false)
  })

  test('should handle mixed case correctly', () => {
    expect(isAlphaNumericPalindrome('Aba')).toBe(true)
    expect(isAlphaNumericPalindrome('AbBa')).toBe(true)
  })

  test('should ignore non-alphanumeric characters', () => {
    expect(isAlphaNumericPalindrome('A man, a plan, a canal, Panama!')).toBe(true)
    expect(isAlphaNumericPalindrome('No lemon, no melon!')).toBe(true)
  })
})
