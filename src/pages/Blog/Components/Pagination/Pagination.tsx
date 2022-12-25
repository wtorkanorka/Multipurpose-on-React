import React, { useEffect, useState } from 'react'
import styles from './Pagination.module.css'
import {
  chunkify,
  getIndexesOfPages,
  parseLinkHeader,
} from '../../../../functions/functions'
import cx from 'classnames'
import useSWR from 'swr'
import { ENDPOINTS } from '../../../../constants/endpoints'
interface Pagination {
  setPage(value: number): void
  data: any
  page: number
  filter: string
}
export default function Pagination({
  setPage,
  data,
  page,
  filter,
}: Pagination) {
  const [lastPage, setLastPage] = useState<number>(1)

  useEffect(() => {
    if (data?.pagination?.last) {
      const lastPageNumber = Number(
        new URL(data?.pagination?.last).searchParams.get('_page'),
      )
      setLastPage(lastPageNumber)
    } else {
      setPage(1)
    }
  }, [filter])

  const indexes = getIndexesOfPages(lastPage)

  return (
    <div className={styles['buttons-container']}>
      {indexes?.map((_, index: number) => {
        const pageNumber = index + 1
        return (
          <button
            className={cx(
              styles['button'],
              pageNumber == page ? styles['active-button'] : '',
            )}
            onClick={() => {
              setPage(pageNumber)
              scrollTo(0, 400)
            }}
            key={index}
          >
            {pageNumber < 10 ? '0' + pageNumber : pageNumber}
          </button>
        )
      })}
    </div>
  )
}
