import { test } from '../../utils/test.js'
import strRotation from './p1-9.js'

test('strRotation', t => {
  t.true(strRotation('waterbottle', 'erbottlewat'))
  t.true(strRotation('waterbottle', 'terbottlewa'))
  t.true(strRotation('waterbottle', 'ewaterbottle'))
})
