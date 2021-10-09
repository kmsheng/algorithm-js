import { test } from '../../utils/test.js'
import Node, { arrToList, each, log } from '../../models/LinkedList.js'
import rmDups from './p2-1.js'
import shuffle from '../../utils/shuffle.js'
import uniq from '../../utils/uniq.js'
import toMap from '../../utils/toMap.js'

test('should remove random duplicated nodes', t => {
  const arr = shuffle([1, 1, 2, 2, 3, 3, 4, 4])
  const head = arrToList(arr)
  const res = rmDups(head)
  const uniqArr = uniq(arr)

  each(res, node => {
    if (uniqArr.length > 0) {
      t.is(node.value, uniqArr.shift())
    }
  })
})
