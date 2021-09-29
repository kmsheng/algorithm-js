import { test } from '../../utils/test.js'
import urlify from './p1-3.js'

test('urlify string with spaces', t => {
  t.is(urlify('  B C  '), '%20%20B%20C%20%20')
})

test('urlify string without spaces', t => {
  t.is(urlify('ABC'), 'ABC')
})
