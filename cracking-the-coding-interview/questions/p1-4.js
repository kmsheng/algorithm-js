import permutation from '../../utils/permutation.js'

// 1.4
// Palindrome Permutation: Given a string, write a function to check
// if it is a permutation of a palindrome. A palindrome is a word or
// phrase that is the same forwards and backwards. A permutation is
// a rearrangement of letters. The palindrome does not need to be limited
// to just dictionary words.

export default function isPalindromePermutation(str) {

  const charMap = str.split('')
    .map(c => c.toLowerCase())
    .reduce((o, c) => {
      if (c in o) {
        o[c] += 1
      }
      else {
        o[c] = 1
      }
      return o
    }, {})

  const rows = Object.keys(charMap)
    .map(char => ({ char, count: charMap[char] }))

  const evens = []
  const odds = []

  for (const row  of rows) {
    const isEven = (row.count % 2) === 0
    if (isEven) {
      evens.push(row)
    }
    else if (row.count > 2) {
      const { char, count } = row
      evens.push({ char, count: count - 1 })
      odds.push({ char, count: 1 })
    }
    else {
      odds.push(row)
    }
  }
  const oddCount = odds.filter(row => row.char !== ' ').length

  if (oddCount > 1) {
    return 'false'
  }
  const side = evens.map(row => row.char).join('')
  const mid = odds.map(row => row.char).join('')
  const sidesArr = permutation(side)
  const permutations = sidesArr.map(s => {
    const reversedS = s.split('').reverse().join('')
    return `"${s + mid + reversedS}"`
  }).join(', ')

  return `true { permutations: ${permutations} }`
}
