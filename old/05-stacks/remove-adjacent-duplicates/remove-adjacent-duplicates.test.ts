import { stackRemoveDuplicateAdjacentInString } from './remove-adjacent-duplicates.solution'

const testCases = [
  ['abc', 'abc'],
  ['abbaaca', 'aca'],
  ['g', 'g'],
  ['ggaabcdeb', 'bcdeb'],
  ['abbddaccaaabcd', 'abcd'],
  ['aabbccdd', ''],
  ['aannkwwwkkkwna', 'kwkwna'],
]

describe('05 - Stacks / remove adjacent duplicates in string', () => {
  test.each(testCases)('%s, %s', (input, output) => {
    const result = stackRemoveDuplicateAdjacentInString(input)
    expect(result).toBe(output)
  })
})
