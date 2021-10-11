import { test } from '../../utils/test.js'
import { arrToList, log } from '../../models/LinkedList.js'
import partition from './p2-4.js'

test('partition', t => {
  const head = arrToList([3, 5, 8, 5, 10, 2, 1])
  const res = partition(head, 5)
  t.deepEqual(res, arrToList([3, 2, 1, 5, 8, 5, 10]))
})
