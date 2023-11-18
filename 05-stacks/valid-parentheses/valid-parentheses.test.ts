import { validParentheses } from "./valid-parentheses.solution"

const testCases = [
  ['m)no(q)rs(', 'mno(q)rs'],
  [')((yz)())(', '((yz)())'],
  ['ab)cca(spo)(sc(s)(', 'abcca(spo)sc(s)']
]

describe('05 Stack / Valid Parentheses', () => {
  test.each(testCases)('%j', (input, output) => {
    expect(validParentheses(input)).toBe(output)
  })
})