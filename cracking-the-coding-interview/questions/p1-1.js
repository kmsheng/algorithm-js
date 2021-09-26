// 1.1
// Is Unique: Implement an algorithm to determine
// if a string has all unique characters. What
// if you cannot use additional data structures ?

// use binary to represent each character
export default function isUniq(str) {
  const length = str.length
  const base = 'a'.charCodeAt(0) - 1
  let baseNum = 0
  for (let i = 0; i < length; i++) {
    const n = (str[i].charCodeAt(0) - base)
    const num = Math.pow(2, n - 1).toString(2)
    baseNum |= num
  }
  // is unuque if 1's count is equal to string length
  return String(baseNum).replace(/0/g, '').length === length
}
