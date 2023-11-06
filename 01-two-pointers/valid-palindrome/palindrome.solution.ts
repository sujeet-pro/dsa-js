export function validPalindrome(str: string): boolean {
  let i = 0
  let j = str.length - 1
  while (i < j) {
    if (str.charAt(i) !== str.charAt(j)) {
      return false
    }
    i += 1
    j -= 1
  }
  return true
}
