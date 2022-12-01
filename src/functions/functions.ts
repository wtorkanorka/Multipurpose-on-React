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
export function parseLinkHeader(linkHeader: any) {
  const linkHeadersArray = linkHeader
    .split(', ')
    .map((header: any) => header.split('; '))
  const linkHeadersMap = linkHeadersArray.map((header: any) => {
    const thisHeaderRel = header[1].replace(/"/g, '').replace('rel=', '')
    const thisHeaderUrl = header[0].slice(1, -1)
    return [thisHeaderRel, thisHeaderUrl]
  })
  return Object.fromEntries(linkHeadersMap)
}

export function getButtons(length: number) {
  const arr = []
  for (let i = 1; i <= length; i++) {
    arr.push(i)
  }
  return arr
}
