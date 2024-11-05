import { countContruct } from './count-construct'

describe('countContruct', () => {
  test('returns 0 when target cannot be constructed', () => {
    expect(countContruct('abcdef', ['ab', 'abc', 'cd', 'de', 'abcd'])).toBe(0)
  })

  test('returns correct count when target can be constructed', () => {
    expect(countContruct('purple', ['purp', 'p', 'ur', 'le', 'purpl'])).toBe(2)
    expect(countContruct('abcdef', ['ab', 'abc', 'cd', 'def', 'abcd', 'ef', 'c'])).toBe(4)
  })

  test('returns 0 for empty wordBank', () => {
    expect(countContruct('abcdef', [])).toBe(0)
  })

  test('returns 1 for empty target', () => {
    expect(countContruct('', ['cat', 'dog', 'mouse'])).toBe(1)
  })

  test('returns correct count for repeated words in wordBank', () => {
    expect(countContruct('aaaa', ['a', 'aa', 'aaa'])).toBe(7)
  })
})
