import { test } from '../../utils/test.js'
import { arrToList, log } from '../../models/LinkedList.js'
import rmNode from './p2-3.js'

test('rmNode', t => {
  const head = arrToList([1, 2, 3, 4, 5])
  const res = rmNode(head)
  t.is(res.value, 2)
})
