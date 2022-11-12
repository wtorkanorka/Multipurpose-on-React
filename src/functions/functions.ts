export function chunkify(array: [], chunkSize = 2) {
  if (array == undefined) {
    return
  }
  const chunks = Array.from(
    { length: Math.ceil(array.length / chunkSize) },
    (_, i) => {
      const start = chunkSize * i
      return array.slice(start, start + chunkSize)
    },
  )
  return chunks
}
