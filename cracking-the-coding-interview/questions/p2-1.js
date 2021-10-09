import { each } from '../../models/LinkedList.js'

// 2.1
// Remove Dups: Write code to remove duplicates
// from an unsorted linked list.
//
// How would you solve the problem if temporary
// buffer is not allowed ?

export default function rmDups(head) {
  each(head, node => {
    let prev = node
    each(node.next, n2 => {
      if (node.value === n2.value) {
        prev.next = n2.next
      }
      prev = n2
    })
  })
  return head
}
