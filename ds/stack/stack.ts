class StackNode<T = unknown> {
  constructor(
    public value: T,
    public next: StackNode<T> | null = null,
  ) {}
}

export class Stack<T = unknown> {
  #head: StackNode<T> | null = null
  #size: number = 0

  constructor(iter?: Iterable<T>) {
    if (iter) {
      for (let item of iter) {
        this.push(item)
      }
    }
  }

  push(value: T): void {
    if (!this.#head) {
      this.#head = new StackNode(value)
    } else {
      this.#head = new StackNode(value, this.#head)
    }
    this.#size += 1
  }

  pop(): T | null {
    if (!this.#head) return null
    this.#size -= 1
    const node = this.#head
    this.#head = node.next
    node.next = null
    return node.value
  }

  get isEmpty(): boolean {
    return this.#size === 0
  }

  get top(): T | null {
    return this.#head?.value ?? null
  }

  get size(): number {
    return this.#size
  }
}

export class StackUsingArray<T = unknown> {
  #stackList: T[] = []

  constructor(iter?: Iterable<T>) {
    if (iter) {
      for (let item of iter) {
        this.push(item)
      }
    }
  }

  push(value: T): void {
    this.#stackList.push(value)
  }

  pop(): T | null {
    if (this.isEmpty) {
      return null
    }
    return this.#stackList.pop() ?? null
  }

  get isEmpty(): boolean {
    return this.#stackList.length === 0
  }

  get top(): T | null {
    if (this.isEmpty) {
      return null
    }
    return this.#stackList[this.#stackList.length - 1] ?? null
  }

  get size(): number {
    return this.#stackList.length
  }
}
