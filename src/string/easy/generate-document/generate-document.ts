export function generateDocument(characters: string, document: string) {
  // Write your code here.
  const charCountMap = new Map()
  for(const char of characters) {
    const currentCount = charCountMap.get(char) ?? 0
    charCountMap.set(char, currentCount+1)
  }
  for(const char of document) {
    const currentCount = charCountMap.get(char) ?? 0
    if(currentCount === 0) return false
    charCountMap.set(char, currentCount - 1)
  }
  return true;
}
