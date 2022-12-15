import React from 'react'
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
}
export default function Pagination({ setPage, data, page }: Pagination) {
  const lastPage = new URL(data.last).searchParams.get('_page')
  const arr = getButtons(2)

  return (
    <div className={styles['buttons-container']}>
      {arr?.map((_, index: number) => {
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
