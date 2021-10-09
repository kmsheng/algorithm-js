class Node {
  constructor(value) {
    this.value = value
    this.next = null
  }
}

export const arrToList = arr => {
  let head = new Node(null)
  let node = head
  arr.forEach(value => {
    node.next = new Node(value)
    node = node.next
  })
  return head.next
}

export const each = (head, fn) => {
  let node = head
  let i = 0
  while (node) {
    fn(node, i)
    node = node.next
    i++
  }
}

export const log = head => {
  let node = head
  let str = ''
  while (node) {
    str += `${node.value}`
    if (node.next) {
      str += ` -> `
    }
    node = node.next
  }
  console.log(str)
}

export default Node
