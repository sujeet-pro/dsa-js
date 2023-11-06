import { SinglyLinkedList, removeNthNode } from './remove-node.solution'

describe('Remove nth Node from End of List', () => {
  let linkedList: SinglyLinkedList<number>
  beforeEach(() => {
    linkedList = new SinglyLinkedList([23, 28, 10, 5, 67, 39, 70])
  })

  test('Remove zeroth item fron end', () => {
    const ll = removeNthNode(linkedList, 0)
    const expected = [23, 28, 10, 5, 67, 39, 70]
    const items = [...ll]
    expect(items).toHaveLength(expected.length)
    expect(items).toEqual(expect.arrayContaining(expected))
    expect(items.toString()).toEqual(expected.toString())
  })
  test('Remove negative item from end', () => {
    const ll = removeNthNode(linkedList, -1)
    const expected = [23, 28, 10, 5, 67, 39, 70]
    const items = [...ll]
    expect(items).toHaveLength(expected.length)
    expect(items).toEqual(expect.arrayContaining(expected))
    expect(items.toString()).toEqual(expected.toString())
  })
  test('Remove item within bound', () => {
    const ll = removeNthNode(linkedList, 3)
    const expected = [23, 28, 10, 5, 39, 70]
    const items = [...ll]
    expect(items).toHaveLength(expected.length)
    expect(items).toEqual(expect.arrayContaining(expected))
    expect(items.toString()).toEqual(expected.toString())
  })

  test('Remove last item', () => {
    const ll = removeNthNode(linkedList, 1)
    const expected = [23, 28, 10, 5, 67, 39]
    const items = [...ll]
    expect(items).toHaveLength(expected.length)
    expect(items).toEqual(expect.arrayContaining(expected))
    expect(items.toString()).toEqual(expected.toString())
  })

  test('Remove first item', () => {
    const ll = removeNthNode(linkedList, 7)
    const expected = [28, 10, 5, 67, 39, 70]
    const items = [...ll]
    expect(items).toHaveLength(expected.length)
    expect(items).toEqual(expect.arrayContaining(expected))
    expect(items.toString()).toEqual(expected.toString())
  })

  test('Remove outside bound', () => {
    const ll = removeNthNode(linkedList, 8)
    const expected = [23, 28, 10, 5, 67, 39, 70]
    const items = [...ll]
    expect(items).toHaveLength(expected.length)
    expect(items).toEqual(expect.arrayContaining(expected))
    expect(items.toString()).toEqual(expected.toString())
  })
})