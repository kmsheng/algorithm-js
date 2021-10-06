// 1.8
// Write an algorithm that if an element
// in an MxN matrix is 0, its entire row
// and column are set to 0

export default function zeroMatrix(matrix) {

  const size = matrix.length
  const iSet = new Set()
  const jSet = new Set()

  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
      if (matrix[i][j] === 0) {
        iSet.add(i)
        jSet.add(j)
      }
    }
  }
  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
      if (iSet.has(i) || jSet.has(j)) {
        matrix[i][j] = 0
      }
    }
  }
  return matrix
}
