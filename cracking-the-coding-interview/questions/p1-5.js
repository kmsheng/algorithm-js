// 1.5
// There are three types of edits that
// can be performed on strings:
// insert a character, remove a character,
// or replace a character. Given two strings, write a function
// to check if they are one edit (or zero edits) away.
//
// EXAMPLE
// pale, ple -> true
// pales, pale -> true
// pale, bale -> true
// pale, bake -> false

export default function isOneAway(str) {

  let [s1, s2] = str.split(',')
    .map(s => s.trim())

  if (Math.abs(s1.length - s2.length) > 1) {
    return false
  }
  // short length string first
  if (s1.length > s2.length) {
    [s1, s2] = [s2, s1]
  }
  const diffChars = getDiffChars(s1, s2)
  return diffChars.length <= 1
}

function getDiffChars(s1, s2) {
  const chars = []
  const s1Len = s1.length
  const s2Len = s2.length
  const sameLength = s1Len === s2Len
  let i = 0
  let j = 0
  while ((i < s1Len) && (j < s2Len)) {
    const equaled = s1[i] === s2[j]
    if (! equaled) {
      chars.push(s2[j])
    }
    if (equaled || sameLength) {
      i++
    }
    j++
  }
  return chars
}
