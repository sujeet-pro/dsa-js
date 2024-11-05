import { SinglyLinkedList } from './singly-linked-list'

describe('Singly Linked List', () => {
  test('gives the same array', () => {
    const inputArr = [1, 2, 3, 4]
    const ll = new SinglyLinkedList(inputArr)
    const items = [...ll]
    const str = [...ll].join('_')
    expect(str).toBe(inputArr.join('_'))

    expect(items).toHaveLength(inputArr.length)
    expect(items).toEqual(expect.arrayContaining(inputArr))
    expect(items.toString()).toBe(inputArr.toString())
  })
})
