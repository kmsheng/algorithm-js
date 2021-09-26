import { test } from '../../utils/test.js'
import isPermutation from './p1-2.js'

test('isPermutation should return true', t => {
  t.true(isPermutation('abc', 'bca'))
})

test('isPermutation should return false', t => {
  t.false(isPermutation('abc', 'ba'))
})
