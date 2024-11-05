import { canConstruct } from './can-construct'

describe('Dynamic Programming - Word Construction - canConstruct', () => {
  test('returns true when target can be constructed from wordBank', () => {
    expect(canConstruct('abcdef', ['ab', 'abc', 'cd', 'def', 'abcd'])).toBe(true)
  })

  test('returns false when target cannot be constructed from wordBank', () => {
    expect(canConstruct('skateboard', ['bo', 'rd', 'ate', 't', 'ska', 'sk', 'boar'])).toBe(false)
  })

  test('returns true for empty target string', () => {
    expect(canConstruct('', ['cat', 'dog', 'mouse'])).toBe(true)
  })

  test('returns true when target can be constructed with repeated words from wordBank', () => {
    expect(canConstruct('enterapotentpot', ['a', 'p', 'ent', 'enter', 'ot', 'o', 't'])).toBe(true)
  })

  test('returns false when target cannot be constructed due to missing word in wordBank', () => {
    expect(canConstruct('eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef', ['e', 'ee', 'eee', 'eeee', 'eeeee', 'eeeeee'])).toBe(
      false,
    )
  })
})
