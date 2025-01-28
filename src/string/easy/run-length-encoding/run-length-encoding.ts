export function runLengthEncoding(string: string) {
  // Write your code here.
  const entries: [number, string][] = []
  let currentChar: string | null = null
  let currentCount: number = 0

  for (let idx = 0; idx < string.length; idx++) {
    const char = string.charAt(idx)

    if (currentChar === null) {
      currentChar = char
      currentCount = 1
      continue
    }

    if (currentChar !== char) {
      entries.push([currentCount, currentChar])
      currentChar = char
      currentCount = 1
      continue
    }

    if (currentCount === 9) {
      entries.push([currentCount, currentChar])
      currentCount = 1
      continue
    }

    currentCount++
  }

  if (currentCount > 0 && currentChar) {
    entries.push([currentCount, currentChar])
  }
  return entries.map(([count, char]) => `${count}${char}`).join('')
}
