import { Stack } from "../../ds/stack/stack";

export class QueueUsingStack<T = unknown> {
  #reversedStack = new Stack<T>()

  constructor(iter?: Iterable<T>) {
    if (iter) {
      for (let item of iter) {
        this.push(item)
      }
    }
  }

  push(item: T): void {
    const tempStack = new Stack<T>()
    let nextNode = this.#reversedStack.pop()
    while (nextNode) {
      tempStack.push(nextNode)
      nextNode = this.#reversedStack.pop()
    }

    this.#reversedStack.push(item)
    nextNode = tempStack.pop()
    while (nextNode) {
      this.#reversedStack.push(nextNode)
      nextNode = tempStack.pop()
    }
  }

  pop(): T | null {
    return this.#reversedStack.pop()
  }

  peek(): T | null {
    return this.#reversedStack.top
  }

  isEmpty(): boolean {
    return this.#reversedStack.isEmpty
  }

}