export default function uniq(arr) {
  const map = {}
  const res = []
  arr.forEach(value => {
    if (value in map) {
      return
    }
    res.push(value)
    map[value] = true
  })
  return res
}
