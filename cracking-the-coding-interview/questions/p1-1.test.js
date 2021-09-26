import { test } from '../../utils/test.js'
import isUniq from './p1-1.js'

test('isUniq should return true', t => {
  t.true(isUniq('abc'))
})

test('isUniq should return false', t => {
  // character c is duplicated
  t.false(isUniq('cbc'))
})
