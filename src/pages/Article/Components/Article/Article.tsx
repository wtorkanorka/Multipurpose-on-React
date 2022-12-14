import React from 'react'
import { useParams } from 'react-router-dom'
import styles from './Article.module.css'
import useSWR from 'swr'
import { ENDPOINTS } from '../../../../constants/endpoints'
import Button from '../../../../components/Button/Button'
import DatComponent from '../../../../components/DatComponent/DatComponent'
import cx from 'classnames'
import '../../../../global.css'
interface Props {
  id: number
}
interface Data {
  id: number
  content?: string
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
    return { __html: `${data?.content}` }
  }
  return (
    <>
      {Object.keys(data).length === 0 && (
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
