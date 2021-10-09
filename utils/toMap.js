export default function toMap(arr) {
  return arr.reduce((map, value) => {
    map[value] = true
    return map
  }, {})
}
