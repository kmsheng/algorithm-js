import { test } from '../../utils/test.js'
import compress from './p1-6.js'

test('compress', t => {
  t.is(compress('aabcccccaaa'), 'a2b1c5a3')
  t.is(compress('wtf'), 'wtf')
  t.is(compress('wtffffff'), 'w1t1f6')
})

