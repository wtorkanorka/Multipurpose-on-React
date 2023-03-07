import useSWR from 'swr'
import { ENDPOINTS } from '../../../../constants/endpoints'
import { Button } from '../../../../components/Button/Button'

import '../../../../global.css'
interface Props {
  id: number
}
interface Test {
  content: string
  id: number
  path_title: string
}
interface Data {
  id: number
  content?: string
  list: Test
}
export default function Article({ id }: Props) {
  const { data, error } = useSWR<Data>(ENDPOINTS.ARTICLES + '/' + id)
  if (!data) {
    return <div>Loading...</div>
  }
  if (error) {
    return <div>ERROR</div>
  }

  function createMarkup() {
    return { __html: `${data?.list.content}` }
  }

  return (
    <>
      {Object.keys(data.list).length === 0 && (
        <div>
          <p>Нет данных о статье на сервере</p>
          <Button
            onClick={() => {
              history.back()
            }}
          >
            Вернуться?
          </Button>
        </div>
      )}

      <div dangerouslySetInnerHTML={createMarkup()} />
    </>
  )
}
