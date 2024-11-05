import { validPalindrome } from './palindrome.solution'

describe('Valid Palindrome', () => {
  test('Empty String', () => {
    expect(validPalindrome('')).toBe(true)
  })

  test('Single Characters', () => {
    expect(validPalindrome('A')).toBe(true)
    expect(validPalindrome('B')).toBe(true)
    expect(validPalindrome('@')).toBe(true)
  })

  test('Double Characters', () => {
    expect(validPalindrome('AA')).toBe(true)
    expect(validPalindrome('AB')).toBe(false)
    expect(validPalindrome('!!')).toBe(true)
  })

  test('Three Chars', () => {
    expect(validPalindrome('ABA')).toBe(true)
    expect(validPalindrome('EAR')).toBe(false)
  })

  test('Random valids', () => {
    ;['RACECAR'].forEach(str => {
      expect(validPalindrome(str)).toBe(true)
    })
  })

  test('Random inValids', () => {
    ;['RACEACAR'].forEach(str => {
      expect(validPalindrome(str)).toBe(false)
    })
  })
})
