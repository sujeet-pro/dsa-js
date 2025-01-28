/**
 * Given a string s, partition s such that every substring of the partition is a palindrome.
 * Return all possible palindrome partitioning of s.
 */
export function solution(s: string): string[][] {
  const result: string[][] = []

  function backtrack(start: number, path: string[]) {
    if (start === s.length) {
      result.push([...path])
      return
    }

    for (let end = start; end < s.length; end++) {
      const sub = s.slice(start, end + 1)
      if (isPalindrome(sub)) {
        path.push(sub)
        backtrack(end + 1, path)
        path.pop()
      }
    }
  }
  backtrack(0, [])
  return result
}

function isPalindrome(sub: string) {
  let left = 0
  let right = sub.length - 1
  while (left < right) {
    if (sub[left] !== sub[right]) {
      return false
    }
    left++
    right--
  }
  return true
}
