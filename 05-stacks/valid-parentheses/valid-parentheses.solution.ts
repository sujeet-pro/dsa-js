export function validParentheses(str: string): string {
  const stack: number[] = []
  const output = Array.from(str)
  for (let i = 0; i < output.length; i += 1) {
    if (output[i] === '(') {
      stack.push(i)
    } else if (output[i] === ')') {
      if (stack.length) {
        stack.pop()
      } else {
        output[i] = ''
      }
    }
  }
  for (let invalidIdx of stack) {
    output[invalidIdx] = ''
  }

  return output.join('')
  // const stack = new Stack<number>()
  // const ignored = new Set<number>()

  // for (let i = 0; i < str.length; i += 1) {
  //   const char = str.charAt(i)
  //   if (char === '(') {
  //     stack.push(i)
  //   } else if (char === ')') {
  //     const poped = stack.pop()
  //     if (!poped) {
  //       ignored.add(i)
  //     }
  //   }
  // }
  // while (!stack.isEmpty) {
  //   ignored.add(stack.pop() as number)
  // }

  // return Array.from(str).filter((_, i) => !ignored.has(i)).join('')
}