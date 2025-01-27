export function firstNonRepeatingCharacter(string: string) {
  const charCountMap = new Map<string, number>()
  for(const char of string) {
    charCountMap.set(char, (charCountMap.get(char) || 0) + 1)
  }
  for(let idx = 0; idx < string.length; idx++) {
    if(charCountMap.get(string.charAt(idx)) === 1) {
      return idx
    }
  }
  return -1;
}
