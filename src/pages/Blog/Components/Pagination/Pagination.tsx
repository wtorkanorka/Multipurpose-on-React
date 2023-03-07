import React, { useContext, useEffect, useState } from 'react'
import styles from './Pagination.module.css'
import { getIndexesOfPages } from '../../../../functions/functions'
import cx from 'classnames'
import { ThemeContext } from '../../../../ThemeContext'
interface Pagination {
  setPage(value: number): void
  data: any
  page: number
}
export default function Pagination({ setPage, data, page }: Pagination) {
  const [lastPage, setLastPage] = useState<number>(1)
  const { searchForTagState } = useContext(ThemeContext)
  const { searchState } = useContext(ThemeContext)
  useEffect(() => {
    if (data?.pagination?.last) {
      const lastPageNumber = Number(
        new URL(data?.pagination?.last).searchParams.get('_page'),
      )
      setLastPage(lastPageNumber)
    } else {
      setPage(1)
    }
  }, [searchState, searchForTagState])

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
