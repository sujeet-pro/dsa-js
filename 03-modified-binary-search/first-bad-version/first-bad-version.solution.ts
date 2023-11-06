export class API {
  #firstBadVersion: number
  #execution: number = 0

  constructor(firstBadVersion: number) {
    this.#firstBadVersion = firstBadVersion
  }

  isBadVersion(ver: number) {
    this.#execution += 1
    return ver >= this.#firstBadVersion
  }

  get executionCount(): number {
    return this.#execution
  }
}

export function getFirstVersion(totalVersions: number, api: API): [number, number] {
  let attempt = 0

  let low = 1
  let high = totalVersions
  while (low < high) {
    const mid = Math.floor(low + (high - low) / 2)
    attempt += 1
    if (api.isBadVersion(mid)) {
      high = mid
    } else {
      low = mid + 1
    }
  }
  return [low, attempt]
}