export class SinglyLinkedListNode<T> {
  constructor(
    public value: T,
    public next: SinglyLinkedListNode<T> | null = null
  ) {
  }

  *[Symbol.iterator]() {
    let node: SinglyLinkedListNode<T> | null = this
    while (node) {
      yield node.value
      node = node.next
    }
  }
}


export class SinglyLinkedList<T> {
  #head: SinglyLinkedListNode<T> | null = null
  #tail: SinglyLinkedListNode<T> | null = null

  constructor(iterable?: Iterable<T>) {
    if (iterable) {
      for (let item of iterable) {
        const node = new SinglyLinkedListNode(item)
        this.append(node)
      }
    }
  }

  prepend(node: SinglyLinkedListNode<T>) {
    if (this.#head) {
      node.next = this.#head
      this.#head = node
    } else {
      this.#head = node
      this.#tail = node
    }
    return this
  }

  append(node: SinglyLinkedListNode<T>) {
    if (this.#tail) {
      this.#tail.next = node
      this.#tail = node
    } else {
      this.#head = node
      this.#tail = node
    }
    return this
  }

  *[Symbol.iterator]() {
    let node = this.#head
    while (node) {
      yield node.value
      node = node.next
    }
  }

  toString() {
    return [...this].join(' -> ')
  }

  get head() {
    return this.#head
  }
}

