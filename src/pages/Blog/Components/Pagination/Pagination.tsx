import React from 'react'
import styles from './Pagination.module.css'
import { chunkify } from '../../../../functions/functions'
interface Pagination {
  setPage(value: number): void
  data: any
}
export default function Pagination({ setPage, data }: Pagination) {
  const lengthData = chunkify(data, 5)

  return (
    <div className={styles['buttons-container']}>
      {lengthData?.map((_, index: number) => {
        return (
          <button
            className={styles['button']}
            onClick={() => {
              setPage(index + 1)
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
