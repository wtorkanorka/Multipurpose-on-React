import React from 'react'
import { useParams } from 'react-router-dom'
import styles from './Articles.module.css'
import useSWR from 'swr'
import { ENDPOINTS } from '../../../../constants/endpoints'
import Button from '../../../../components/Button/Button'
interface Props {
  id: number
}
export default function Articles({ id }: Props) {
  const { data, error } = useSWR(ENDPOINTS.ARTICLES)
  if (!data) {
    return <div>Loading...</div>
  }
  if (error) {
    return <div>ERROR</div>
  }

  const filtered = data.filter((i: any) => {
    if (i.id === id) {
      return true
    } else {
      return false
    }
  })

  return (
    <>
      {filtered.length == 0 && (
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
      {filtered.map((i: any) => {
        return <div key={i.id}>{i.text}</div>
      })}
    </>
  )
}
