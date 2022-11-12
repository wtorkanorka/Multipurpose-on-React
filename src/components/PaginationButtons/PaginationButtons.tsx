import React from 'react'
import { useState, useEffect } from 'react'
import { chunkify } from '../../functions/functions'
import styles from './PaginationButtons.module.css'
export default function PaginationButtons({ setPage, page, data }: any) {
  const sliced = chunkify(data)

  return (
    <>
      {sliced?.map((_, index: number) => {
        return (
          <li
            className={styles['pagination-button']}
            key={index}
            style={{ width: page == index + 1 ? '49px' : '' }}
            onClick={() => {
              setPage(index + 1)
            }}
          ></li>
        )
      })}
    </>
  )
}
