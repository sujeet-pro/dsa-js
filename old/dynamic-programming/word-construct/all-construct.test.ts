import { allConstruct } from './all-construct'

describe('allConstruct', () => {
  it('should return an empty array when target is an empty string', () => {
    expect(allConstruct('', ['cat', 'dog', 'mouse'])).toEqual([])
  })

  it('should return an empty array when no words can construct the target', () => {
    expect(allConstruct('abcdef', ['gh', 'ij', 'kl'])).toEqual([])
  })

  // it('should return all combinations of words that construct the target', () => {
  //   expect(allConstruct('purple', ['purp', 'p', 'ur', 'le', 'purpl'])).toEqual([
  //     ['purp', 'le'],
  //     ['p', 'ur', 'p', 'le'],
  //   ])
  // })

  // it('should handle cases with repeated words', () => {
  //   expect(allConstruct('aaaa', ['a', 'aa'])).toEqual([
  //     ['a', 'a', 'a', 'a'],
  //     ['aa', 'a', 'a'],
  //     ['a', 'aa', 'a'],
  //     ['a', 'a', 'aa'],
  //     ['aa', 'aa'],
  //   ])
  // })

  // it('should handle cases with no possible constructions', () => {
  //   expect(allConstruct('skateboard', ['bo', 'rd', 'ate', 't', 'ska', 'sk', 'boar'])).toEqual([])
  // })

  // it('should handle larger inputs efficiently', () => {
  //   const result = allConstruct('eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef', [
  //     'e',
  //     'ee',
  //     'eee',
  //     'eeee',
  //     'eeeee',
  //     'eeeeee',
  //   ])
  //   expect(result).toEqual([])
  // })
})
