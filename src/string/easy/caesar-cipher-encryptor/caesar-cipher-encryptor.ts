export function caesarCipherEncryptor(string: string, key: number) {
  // Write your code here.
  const charArr = new Array<string>(string.length)
  for (let charIdx = 0; charIdx < string.length; charIdx++) {
    const alphabetIdx = (string.charCodeAt(charIdx) % 32) - 1
    const adjustedCharCode = (alphabetIdx + key) % 26
    charArr[charIdx] = String.fromCharCode(97 + adjustedCharCode)
  }
  return charArr.join('')
}
