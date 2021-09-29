import permutation from '../../utils/permutation.js'

// 1.2
// Check Permutation: Given two strings, write a method to
// decide if one is a permutation of the other.

export default function isPermutation(s1, s2) {
  const arr = permutation(s1)
  return arr.includes(s2)
}
