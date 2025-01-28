import { caesarCipherEncryptor } from './caesar-cipher-encryptor'

describe('caesarCipherEncryptor', () => {
  it('should encrypt the string with a key of 1', () => {
    expect(caesarCipherEncryptor('abc', 1)).toBe('bcd')
  })

  it('should encrypt the string with a key of 2', () => {
    expect(caesarCipherEncryptor('xyz', 2)).toBe('zab')
  })

  it('should encrypt the string with a key of 0', () => {
    expect(caesarCipherEncryptor('abc', 0)).toBe('abc')
  })

  it('should encrypt the string with a key greater than 26', () => {
    expect(caesarCipherEncryptor('abc', 27)).toBe('bcd')
  })

  it('should encrypt the string with a key of 26', () => {
    expect(caesarCipherEncryptor('abc', 26)).toBe('abc')
  })

  it('should encrypt the string with a key of 52', () => {
    expect(caesarCipherEncryptor('abc', 52)).toBe('abc')
  })

  it('should handle empty string', () => {
    expect(caesarCipherEncryptor('', 5)).toBe('')
  })
})
