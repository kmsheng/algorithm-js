import { test } from '../../utils/test.js'
import { arrToList } from '../../models/LinkedList.js'
import sumLists from './p2-5.js'

test('sumLists', t => {
  const head = arrToList(['(', 7, 1, 6, ')', '+', '(', 5, 9, 2, ')'])
  const res = sumLists(head)
  const expected = arrToList([2, 1, 9])
  t.deepEqual(res, expected)
})
