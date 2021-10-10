import { test } from '../../utils/test.js'
import { arrToList } from '../../models/LinkedList.js'
import kth from './p2-2.js'

test('kth: should return the kth node', t => {
  const head = arrToList([1, 2, 3, 4, 5])
  t.is(kth(head, 2).value, 3)
})

test('kth: should return null if k weren\'t present', t => {
  const head = arrToList([1, 2, 3, 4, 5])
  t.is(kth(head, -1), null)
})
