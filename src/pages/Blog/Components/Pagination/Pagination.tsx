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
  isFilter: boolean
}
export default function Pagination({
  setPage,
  data,
  page,
  isFilter,
}: Pagination) {
  const [arrayOfPages, setArrayOfPages] = useState<number[]>([])
  const [lastPage, setLastPage] = useState<number>(0)
  console.log(arrayOfPages)

  useEffect(() => {
    if (isFilter) {
      const lastPageNumber = Number(
        new URL(data?.last).searchParams.get('_page'),
      )
      setLastPage(lastPage)

      const arr = getIndexesOfPages(lastPageNumber)
      setArrayOfPages(arr)
    } else {
      setArrayOfPages(data)
    }
  }, [])
  console.log(data, 'AAAAAAa')

  return (
    <div className={styles['buttons-container']}>
      {arrayOfPages?.map((_, index: number) => {
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
