function intersection(set1: Set<string>, set2: Set<string>) {
  const result = new Set<string>()
  for (const item of set1) {
    if (set2.has(item)) {
      result.add(item)
    }
  }
  return result
}
export function commonCharacters(strings: string[]) {
  let result = new Set(strings[0])
  for (let i = 1; i < strings.length; i++) {
    const set = new Set(strings[i])
    result = intersection(result, set)
  }
  return Array.from(result)
}

export function commonCharactersNew(strings: string[]) {
  let result = new Set(strings[0])
  for (let i = 1; i < strings.length; i++) {
    const set = new Set(strings[i])
    result = result.intersection(set)
  }
  return Array.from(result)
}
