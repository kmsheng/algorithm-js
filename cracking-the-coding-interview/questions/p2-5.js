import { arrToList, each } from '../../models/LinkedList.js'

// 2.5 Sum Lists: You have two numbers
// represented by a linked list, where each node
// contains a single digit. The digits are stored
// in reverse order, such that the 1's digit is at
// the head of the list. Write a function
// that adds the two numbers and returns the sum as
// a linked list.
//
// EXAMPLE
// Input (7 -> 1 -> 6) + (5 -> 9 -> 2) That is, 617 + 295.
// Output 2 -> 1 -> 9. That is, 912.

export default function sumLists(head) {
  const arr = []
  let current = ''
  each(head, node => {
    const { value } = node
    if (value === '(') {
      current = ''
    }
    else if (Number.isInteger(value)) {
      current = value + current
    }
    else if (value === ')') {
      arr.push(parseInt(current, 10))
    }
  })
  const sum = arr.reduce((s, v) => s + v, 0)
  const res = String(sum).split('').reverse().map(v => parseInt(v, 10))
  return arrToList(res)
}
