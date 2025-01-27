export function isPalindrome(string: string) {
  // Write your code here.
  let left = 0
  let right = string.length - 1
  while (right > left) {
    if(string.charAt(left) !== string.charAt(right)) {
      return false
    } 
    left++
    right--
  }
  return true;
}
