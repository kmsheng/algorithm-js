export default function permutation(str) {
  // a                        f(1) = 1 * 1 = 1
  // ab ba                    f(2) = f(1) * 2 = 2
  // cab acb abc cba bca bac  f(3) = f(2) * 3 = 6
  //                          f(4) = f(3) * 4 = 24
  //                          f(n) = f(n - 1) * n
  //                          O(n!)
  let res = []
  for (let i = 0; i < str.length; i++) {
    const c = str[i]
    res = insert(res, c)
  }
  return res
}

function insert(arr, c) {
  if (arr.length === 0) {
    return [c]
  }
  const res = []
  for (let i = 0; i < arr.length; i++) {
    const str = arr[i]
    for (let j = 0; j <= str.length; j++) {
      const newStr = str.slice(0, j) + c + str.slice(j)
      res.push(newStr)
    }
  }
  return res
}
