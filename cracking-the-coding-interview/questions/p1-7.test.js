import { test } from '../../utils/test.js'
import rotateMatrix from './p1-7.js'

test('rotateMatrix: 2x2', t => {
  t.deepEqual(rotateMatrix([
    [1, 2],
    [3, 4]
  ]), [
    [3, 1],
    [4, 2]
  ])
})

test('rotateMatrix: 3x3', t => {
  t.deepEqual(rotateMatrix([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ]), [
    [7, 4, 1],
    [8, 5, 2],
    [9, 6, 3]
  ])
})

test('rotateMatrix: 4x4', t => {
  t.deepEqual(rotateMatrix([
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
    [13, 14, 15, 16]
  ]), [
    [13, 9, 5, 1],
    [14, 10, 6, 2],
    [15, 11, 7, 3],
    [16, 12, 8, 4]
  ])
})
