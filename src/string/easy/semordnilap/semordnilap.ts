function reverse(word: string) {
  const len = word.length
  const charArr = new Array(len)
  for(let idx = 0; idx < len; idx++) {
    charArr[idx] = word.charAt(len - 1 - idx)
  }
  return charArr.join('')
}
export function semordnilap(words: string[]) {
  // Write your code here.
  const wordSet = new Set(words)
  const entries: [string, string][] = []
  
  for(const word of  words) {
    const reversed = reverse(word)
    if(wordSet.has(word) && wordSet.has(reversed) && word != reversed) {
      entries.push([word, reversed])
      wordSet.delete(word)
      wordSet.delete(reversed)
    }
  }
  
  return entries
}
