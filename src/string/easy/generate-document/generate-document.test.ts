import { generateDocument } from './generate-document'

describe('generateDocument', () => {
  test('should return true when characters can generate the document', () => {
    expect(generateDocument('aabbcc', 'abc')).toBe(true)
  })

  test('should return false when characters cannot generate the document', () => {
    expect(generateDocument('aabbcc', 'abcd')).toBe(false)
  })

  test('should return true for an empty document', () => {
    expect(generateDocument('aabbcc', '')).toBe(true)
  })

  test('should return false for an empty characters string with non-empty document', () => {
    expect(generateDocument('', 'abc')).toBe(false)
  })

  test('should return true when characters and document are the same', () => {
    expect(generateDocument('abc', 'abc')).toBe(true)
  })

  test('should return false when characters do not have enough of a specific character', () => {
    expect(generateDocument('aabbcc', 'aabbccc')).toBe(false)
  })

  test('should handle special characters correctly', () => {
    expect(generateDocument('a!b@c#', '!@#')).toBe(true)
  })

  test('should handle spaces correctly', () => {
    expect(generateDocument('a b c', 'a b')).toBe(true)
  })
})
