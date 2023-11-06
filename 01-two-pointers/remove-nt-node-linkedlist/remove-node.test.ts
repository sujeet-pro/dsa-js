import { LinkedListNode, LinkedList, removeNthNodeFromEnd } from './remove-node.solution' // './remove-node.solution'

describe('Remove nth Node from End of List', () => {
  let linkedListHead: LinkedListNode<number> | null
  beforeEach(() => {
    const linkedList = new LinkedList([9, 8, 7, 6, 5, 4, 3, 2, 1])
    linkedListHead = linkedList.head
  })

  test('Remove zeroth item fron end', () => {
    const ll = removeNthNodeFromEnd(linkedListHead, 0)
    const expected = [9, 8, 7, 6, 5, 4, 3, 2, 1]
    const items = ll ? [...ll] : []
    expect(items).toHaveLength(expected.length)
    expect(items).toEqual(expect.arrayContaining(expected))
    expect(items.toString()).toEqual(expected.toString())
  })
  test('Remove negative item from end', () => {
    const ll = removeNthNodeFromEnd(linkedListHead, -1)
    const expected = [9, 8, 7, 6, 5, 4, 3, 2, 1]
    const items = ll ? [...ll] : []
    expect(items).toHaveLength(expected.length)
    expect(items).toEqual(expect.arrayContaining(expected))
    expect(items.toString()).toEqual(expected.toString())
  })
  test('Remove item within bound', () => {
    const ll = removeNthNodeFromEnd(linkedListHead, 3)
    const expected = [9, 8, 7, 6, 5, 4, 2, 1]
    const items = ll ? [...ll] : []
    expect(items).toHaveLength(expected.length)
    expect(items).toEqual(expect.arrayContaining(expected))
    expect(items.toString()).toEqual(expected.toString())
  })

  test('Remove last item', () => {
    const ll = removeNthNodeFromEnd(linkedListHead, 1)
    const expected = [9, 8, 7, 6, 5, 4, 3, 2]
    const items = ll ? [...ll] : []
    expect(items).toHaveLength(expected.length)
    expect(items).toEqual(expect.arrayContaining(expected))
    expect(items.toString()).toEqual(expected.toString())
  })

  test('Remove first item', () => {
    const ll = removeNthNodeFromEnd(linkedListHead, 9)
    const expected = [8, 7, 6, 5, 4, 3, 2, 1]
    const items = ll ? [...ll] : []
    expect(items).toHaveLength(expected.length)
    expect(items).toEqual(expect.arrayContaining(expected))
    expect(items.toString()).toEqual(expected.toString())
  })

  test('Remove outside bound', () => {
    const ll = removeNthNodeFromEnd(linkedListHead, 10)
    const expected = [9, 8, 7, 6, 5, 4, 3, 2, 1]
    const items = ll ? [...ll] : []
    expect(items).toHaveLength(expected.length)
    expect(items).toEqual(expect.arrayContaining(expected))
    expect(items.toString()).toEqual(expected.toString())
  })
})