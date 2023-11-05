import { describe, it } from 'node:test'
import assert from 'node:assert'

import { validPalindrome } from './palindrome.solution.js'
describe('Valid Palindrome', () => {
  it('Empty String', () => {
    assert.strictEqual(validPalindrome(''), true)
  })

  it('Single Characters', () => {
    assert.strictEqual(validPalindrome('A'), true)
  })

  it('Double Characters', () => {
    assert.strictEqual(validPalindrome('AA'), true)
    assert.strictEqual(validPalindrome('AB'), false)
    assert.strictEqual(validPalindrome('!!'), true)
  })

  it('ABA', () => {
    assert.strictEqual(validPalindrome('ABA'), true)
  })

  it('ABBA', () => {
    assert.strictEqual(validPalindrome('ABBA'), true)
  })

  it('ABCA', () => {
    assert.strictEqual(validPalindrome('ABCA'), false)
  })

  it('Random valids', () => {
    [
      'RACECAR'
    ].forEach(str => {
      assert.strictEqual(validPalindrome(str), true)
    })
  })

  it('Random inValids', () => {
    [
      'RACEACAR'
    ].forEach(str => {
      assert.strictEqual(validPalindrome(str), false)
    })
  })
})
