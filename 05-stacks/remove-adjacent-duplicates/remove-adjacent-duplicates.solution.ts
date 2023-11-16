import { Stack } from "../../ds/stack/stack"

export function stackRemoveDuplicateAdjacentInString(str: string) {
  const outputStack = new Stack<string>()
  for (let char of str) {
    if (outputStack.head?.value === char) {
      outputStack.pop()
    } else {
      outputStack.push(char)
    }
  }
  const outputArr = []
  while (outputStack.head) {
    outputArr.push(outputStack.pop())
  }
  return outputArr.reverse().join('')
}