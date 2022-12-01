import React, { useEffect, useState } from 'react'
import styles from './Pagination.module.css'
import {
  chunkify,
  getButtons,
  parseLinkHeader,
} from '../../../../functions/functions'
import cx from 'classnames'
import useSWR from 'swr'
import { ENDPOINTS } from '../../../../constants/endpoints'
interface Pagination {
  setPage(value: number): void
  data: any
  page: number
  boolean: boolean
}
export default function Pagination({
  setPage,
  data,
  page,
  boolean,
}: Pagination) {
  const [array, setArray] = useState<number[]>([])
  useEffect(() => {
    if (boolean) {
      const lastPage = Number(new URL(data?.last).searchParams.get('_page'))

      const arr = getButtons(lastPage)
      setArray(arr)
    } else {
      setArray(data)
    }
  }, [])

  return (
    <div className={styles['buttons-container']}>
      {array?.map((_, index: number) => {
        return (
          <button
            className={cx(
              styles['button'],
              index + 1 == page ? styles['active-button'] : '',
            )}
            onClick={() => {
              setPage(index + 1)
              scrollTo(0, 400)
            }}
            key={index}
          >
            {index + 1 < 10 ? '0' + (index + 1) : index + 1}
          </button>
        )
      })}
    </div>
  )
}
