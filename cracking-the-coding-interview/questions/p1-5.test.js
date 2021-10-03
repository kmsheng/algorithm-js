import { test } from '../../utils/test.js'
import isOneAway from './p1-5.js'

test('isOneAway', t => {
  t.true(isOneAway('pale, ple'))
  t.true(isOneAway('pales, pale'))
  t.true(isOneAway('pale, bale'))
  t.false(isOneAway('pale, bake'))
})

