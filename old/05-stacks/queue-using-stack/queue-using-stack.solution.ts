import { Stack } from '../../ds/stack/stack'

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
    while (!this.#reversedStack.isEmpty) {
      tempStack.push(this.#reversedStack.pop() as T)
    }
    this.#reversedStack.push(item)
    while (!tempStack.isEmpty) {
      this.#reversedStack.push(tempStack.pop() as T)
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
