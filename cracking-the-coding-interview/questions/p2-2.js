// 2.2
// Return Kth to Last:
// Implement an algorithm to find the kth to last
// element of a singly linked list.

export default function kth(head, k) {
  let node = head
  let i = 0
  while (node) {
    if (k === i) {
      return node
    }
    node = node.next
    i++
  }
  return null
}
