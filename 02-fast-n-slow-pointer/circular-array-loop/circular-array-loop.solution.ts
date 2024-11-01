function stepMover(arr: number[], visited: boolean[], startAt: number = 0, stepsToMove: number = 1) {
  let idx = startAt
  const MOVEMENT_DIRECTION = Math.sign(arr[idx] as number)

  return function mover() {
    if (idx === -1) return idx
    for (let i = 0; i < stepsToMove; i += 1) {
      const moveBy = arr[idx] as number
      if (Math.sign(moveBy) === MOVEMENT_DIRECTION) {
        idx = (arr.length + idx + moveBy) % arr.length
        visited[idx] = true
      } else {
        idx = -1
      }
    }
    return idx
  }
}

function isCircularStartingAt(arr: number[], visited: boolean[], startingAt: number): boolean {
  const slowPointerMover = stepMover(arr, visited, startingAt, 1)
  const fastPointerMover = stepMover(arr, visited, startingAt, 2)

  let slowPointerIdx = slowPointerMover()
  let fastPointerIdx = fastPointerMover()

  while (slowPointerIdx !== fastPointerIdx && slowPointerIdx !== -1 && fastPointerIdx !== -1) {
    slowPointerIdx = slowPointerMover()
    fastPointerIdx = fastPointerMover()
  }

  // check for min length of cycle to be > 1
  return slowPointerIdx === fastPointerIdx && slowPointerIdx !== slowPointerMover()
}

export function circularArrayLoop(arr: number[]): boolean {
  const visited = arr.map(() => false)
  for (let i = 0; i < arr.length; i += 1) {
    if (arr[i] === 0) continue
    if (visited[i]) continue
    const isCircular = isCircularStartingAt(arr, visited, i)
    if (isCircular) return true
  }
  return false
}
