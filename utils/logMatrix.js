export default function logMatrix(matrix) {
  const str = matrix.map(row =>  row.join("  "))
    .join("\n")
  console.log(str)
}
