// 1.9
// String rotation: Assume you have a method
// isSubstring which checks if one word is a
// substring of another. Given two strings, s1 and s2,
// write code to check if s2 is a rotation of s1 using
// only one call to isSubstring.
// (e.g. "waterbottle" is a rotation of "erbottlewat")

export default function strRotation(s1, s2) {
  let i = 0
  let j = 0
  while ((i < s1.length) && (j < s2.length)) {
    const c1 = s1[i]
    const c2 = s2[j]
    if (c2 === c1) {
      j++
    }
    i++
  }
  const s3 = s2.slice(j)
  return isSubstring(s1, s3)
}

function isSubstring(s1, s2) {
  return s1.includes(s2)
}
