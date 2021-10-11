import Node from '../../models/LinkedList.js'

// Partition: Write code to partition a linked
// list around a value x, such that all nodes
// less than x come before all nodes greater
// than or equal to x ( see below ). The partition
// element x can appear anywhere in the "right partition";
// it does not need to appear between the left and right
// partitions.
//
// EXAMPLE
// Input: 3 -> 5 -> 8 -> 5 -> 10 -> 2 -> 1 [partition = 5]
// Output: 3 -> 1 -> 2 -> 10 -> 5 -> 5 -> 8

export default function partition(head, x) {
  const left = new Node(null)
  const right = new Node(null)
  let lastLeft = left
  let lastRight = right
  let node = head

  while (node) {
    const next = node.next
    node.next = null

    if (node.value < x) {
      lastLeft.next = node
      lastLeft = lastLeft.next
    }
    else {
      lastRight.next = node
      lastRight = lastRight.next
    }
    node = next
  }
  lastLeft.next = right.next
  return left.next
}
