import { parseLinkHeader } from '../functions/functions'

interface LinkHeader {
  list: []
  pagination: {}
}
type Test = LinkHeader
export async function fetcher<Test>(url: string): Promise<{}> {
  const res = await fetch(url)

  const link = res.headers.get('Link')
  if (!res.ok) {
    const error = new Error(
      'An error occurred while fetching the data.',
    ) as Error & { info: Text; status: number }
    error.info = await res.json()
    error.status = res.status
    throw error
  }
  const data = await res.json()
  if (link) {
    return {
      list: [...data],
      pagination: { ...parseLinkHeader(link) },
    }
  }

  return { list: data }
}
