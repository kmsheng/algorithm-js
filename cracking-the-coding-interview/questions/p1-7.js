// 1.7
// Given an image represented by an NxM matrix,
// where each pixel in the image is 4 bytes, write
// a method to rotate the image by 90 degrees.
// Can you do this in place ?

export default function rotateMatrix(matrix) {

  const len = matrix.length
  const end = Math.floor(len / 2)

  for (let i = 0; i < end; i++) {
    const jEnd = len - 1 - i
    for (let j = i; j < jEnd; j++) {
      // bottom right
      const tmp = matrix[j][jEnd]
      matrix[j][jEnd] = matrix[i][j]

      // bottom left
      const tmp2 = matrix[jEnd][jEnd - j + i]
      matrix[jEnd][jEnd - j + i] = tmp

      // top left
      const tmp3 = matrix[jEnd - j + i][i]
      matrix[jEnd - j + i][i] = tmp2

      // top right
      matrix[i][j] = tmp3
    }
  }
  return matrix
}
