import { semordnilap } from './semordnilap'

describe('semordnilap', () => {
  test('should return pairs of semordnilap words', () => {
    const words = ['desserts', 'stressed', 'god', 'dog', 'evil', 'live']
    const result = semordnilap(words)
    expect(result).toEqual([
      ['desserts', 'stressed'],
      ['god', 'dog'],
      ['evil', 'live'],
    ])
  })

  test('should return an empty array when no semordnilap pairs are found', () => {
    const words = ['hello', 'world', 'test']
    const result = semordnilap(words)
    expect(result).toEqual([])
  })

  test('should not pair a word with itself', () => {
    const words = ['abc', 'cba', 'abc']
    const result = semordnilap(words)
    expect(result).toEqual([['abc', 'cba']])
  })

  test('should handle an empty array', () => {
    const words: string[] = []
    const result = semordnilap(words)
    expect(result).toEqual([])
  })

  test('should handle words with different cases', () => {
    const words = ['God', 'dog', 'Desserts', 'stressed']
    const result = semordnilap(words)
    expect(result).toEqual([])
  })
})
