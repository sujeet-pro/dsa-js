const code_0 = '0'.charCodeAt(0)
const code_9 = '9'.charCodeAt(0)
const code_a = 'a'.charCodeAt(0)
const code_z = 'z'.charCodeAt(0)
const code_A = 'A'.charCodeAt(0)
const code_Z = 'Z'.charCodeAt(0)

function isValidChar(string: string, charIdx: number) {
  const charCode = string.charCodeAt(charIdx)
  return (
    (charCode >= code_0 && charCode <= code_9) ||
    (charCode >= code_a && charCode <= code_z) ||
    (charCode >= code_A && charCode <= code_Z)
  )
}

function getComparisionCodeForAphabets(charCode: number) {
  if ((charCode >= code_a && charCode <= code_z) || (charCode >= code_A && charCode <= code_Z)) {
    return charCode % 32
  }
  return charCode
}
function getNextIdx(string: string, currentIdx: number) {
  while (++currentIdx < string.length && !isValidChar(string, currentIdx)) {}
  return currentIdx
}

function getPrevIdx(string: string, currentIdx: number) {
  while (--currentIdx >= 0 && !isValidChar(string, currentIdx)) {}
  return currentIdx
}

export function isAlphaNumericPalindrome(string: string): boolean {
  let left = getNextIdx(string, -1)
  let right = getPrevIdx(string, string.length)
  while (right > left && right >= 0 && left < string.length) {
    if (
      getComparisionCodeForAphabets(string.charCodeAt(left)) !== getComparisionCodeForAphabets(string.charCodeAt(right))
    ) {
      return false
    }
    left = getNextIdx(string, left)
    right = getPrevIdx(string, right)
  }
  return true
}
