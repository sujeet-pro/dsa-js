export class SinglyLinkedListNode<T> {
  constructor(
    public value: T,
    public next: SinglyLinkedListNode<T> | null = null
  ) {
  }
}


export class SinglyLinkedList<T> {
  head: SinglyLinkedListNode<T> | null = null

  constructor(iterable?: Iterable<T>) {
    if (iterable) {
      for (let item of iterable) {
        const node = new SinglyLinkedListNode(item)
        this.add(node)
      }
    }
  }

  add(node: SinglyLinkedListNode<T>): SinglyLinkedList<T> {
    if (this.head === null) {
      this.head = node
      return this
    }
    let currNode = this.head
    while (currNode.next != null) {
      currNode = currNode.next
    }
    currNode.next = node
    return this
  }

  *[Symbol.iterator]() {
    let node = this.head
    while (node) {
      yield node.value
      node = node.next
    }
  }

  toString() {
    return [...this].join(' -> ')
  }

  print() {
    console.log(this.toString())
  }
}

