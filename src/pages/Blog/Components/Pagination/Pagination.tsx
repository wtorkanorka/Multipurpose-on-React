import React from 'react'
import styles from './Pagination.module.css'
import { chunkify, parseLinkHeader } from '../../../../functions/functions'
import cx from 'classnames'
import useSWR from 'swr'
import { ENDPOINTS } from '../../../../constants/endpoints'
interface Pagination {
  setPage(value: number): void
  data: any
  page: number
}
export default function Pagination({ setPage, data, page }: Pagination) {
  const lengthData = chunkify(data, 5)

  return (
    <div className={styles['buttons-container']}>
      {lengthData?.map((_, index: number) => {
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
