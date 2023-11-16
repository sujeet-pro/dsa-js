class StackNode<T = unknown> {
  constructor(
    public value: T,
    public next: StackNode<T> | null = null
  ) { }
}

export class Stack<T = unknown> {
  #head: StackNode<T> | null = null

  constructor(iter?: Iterable<T>) {
    if (iter) {
      for (let item of iter) {
        this.push(item)
      }
    }
  }

  push(value: T) {
    if (!this.#head) {
      this.#head = new StackNode(value)
    } else {
      this.#head = new StackNode(value, this.#head)
    }
  }

  pop(): T | null {
    if (!this.#head) return null
    const node = this.#head
    this.#head = node.next
    node.next = null
    return node.value
  }

  get head() {
    return this.#head
  }
}

