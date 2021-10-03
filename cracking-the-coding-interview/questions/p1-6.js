// 1.6
// String Compression: Implement a method to perform basic
// string compression using the counts of repeated characters.
// For example, the string aabcccccaaa would become a2b1c5a3.
// If the "compressed" string would not become smaller than
// the original string, your method should return the original
// string. You can assume the string has only uppercase and
// lowercase letters (a - z)
export default function compress(str) {
  const arr = []
  let prev = ''
  let currRow = null
  for (let i = 0; i < str.length; i++) {
    const char = str[i]
    if (char === prev) {
      currRow.count++
    }
    else {
      currRow = { char, count: 1 }
      arr.push(currRow)
      prev = char
    }
  }
  const res = arr.map(row => `${row.char}${row.count}`).join('')
  return res.length < str.length ? res : str
}
