function getAllDigits(number: number): number[] {
  const nums = []
  let num = number
  while (num > 0) {
    nums.push(num % 10)
    num = Math.floor(num / 10)
  }
  return nums.reverse()
}

function sumOfSquaredDigits(num: number) {
  return getAllDigits(num).reduce((sum, num) => sum + num * num, 0)
}

export function isHappyNumberUsingSet(num: number): boolean {
  if (num <= 0) {
    throw new Error('Invalid number')
  }
  const visitedNumbers = new Set()
  for (let currNum = num; !visitedNumbers.has(currNum); currNum = sumOfSquaredDigits(currNum)) {
    visitedNumbers.add(currNum)
    if (currNum === 1) return true
  }
  return false
}

export function isHappyNumber(num: number): boolean {
  let slowPointer = num
  let fastPointer = sumOfSquaredDigits(num)

  while (fastPointer !== slowPointer) {
    slowPointer = sumOfSquaredDigits(slowPointer)
    fastPointer = sumOfSquaredDigits(sumOfSquaredDigits(fastPointer))
    if (fastPointer === 1) return true
  }

  return fastPointer === 1
}
