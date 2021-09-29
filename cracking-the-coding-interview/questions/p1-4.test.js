import { test } from '../../utils/test.js'
import isPalindromePermutation from './p1-4.js'

test('isPalindromePermutation should return false', t => {
  t.is(isPalindromePermutation('wtf ddd'), 'false')
})

test('isPalindromePermutation should return true', t => {
  t.is(isPalindromePermutation('taco cat'), 'true { permutations: "cato tac", "acto tca", "atco cta", "ctao atc", "tcao act", "taco cat" }')
})
