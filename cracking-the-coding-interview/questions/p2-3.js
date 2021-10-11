// Delete Middle Node: Implement an algorithm to
// delete a node in the middle (i.e., any node
// but the first and last node, not neccessarily
// the exact middle) of a singly linked list,
// given only access to that node.

export default function rmNode(node) {
  let target = node
  while (true) {
    target.value = target.next.value
    if (target.next && (! target.next.next)) {
      target.next = null
      break
    }
    target = target.next
  }
  return node
}
