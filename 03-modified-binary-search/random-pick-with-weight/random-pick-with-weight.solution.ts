export class RandomPickWithWeight {
  // #minRandomNumber: number
  #maxRandomeNumber: number
  #runningWeights: number[]

  constructor(weights: readonly number[]) {
    // this.#minRandomNumber = weights[0] as number
    this.#maxRandomeNumber = 0
    this.#runningWeights = []
    for (const weight of weights) {
      this.#maxRandomeNumber += weight
      this.#runningWeights.push(this.#maxRandomeNumber)
    }
  }


  pickIndex() {
    const target = 1 + Math.floor(Math.random() * this.#maxRandomeNumber)

    let lowIdx = 0
    let highIdx = this.#runningWeights.length - 1

    while (lowIdx < highIdx) {
      const midIdx = Math.floor(lowIdx + (highIdx - lowIdx) / 2)
      if (target > (this.#runningWeights[midIdx] as number)) {
        lowIdx = midIdx + 1
      } else {
        highIdx = midIdx
      }
    }
    return lowIdx
  }
}