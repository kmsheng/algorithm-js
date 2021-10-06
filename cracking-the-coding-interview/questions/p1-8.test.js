import { test } from '../../utils/test.js'
import zeroMatrix from './p1-8.js'

test('zeroMatrix: 3x3', t => {
  t.deepEqual(zeroMatrix([
    [1, 2, 3],
    [4, 0, 6],
    [7, 8, 9]
  ]), [
    [1, 0, 3],
    [0, 0, 0],
    [7, 0, 9]
  ])
})

test('zeroMatrix: 5x5', t => {
  t.deepEqual(zeroMatrix([
    [0, 2, 3, 4, 5],
    [1, 2, 3, 4, 5],
    [1, 2, 3, 4, 5],
    [1, 2, 3, 4, 5],
    [1, 2, 3, 4, 0],
  ]), [
    [0, 0, 0, 0, 0],
    [0, 2, 3, 4, 0],
    [0, 2, 3, 4, 0],
    [0, 2, 3, 4, 0],
    [0, 0, 0, 0, 0],
  ])
})
