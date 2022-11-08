import React from 'react'
import { useState } from 'react'
import styles from './PaginationButtons.module.css'
export default function PaginationButtons({ setPage, page, dataLength }: any) {
  const [width, setWidth] = useState(1)
  function getButtons() {
    if (dataLength?.data?.length % 2 == 0) {
      const arr = []
      for (let i = 0; i < dataLength?.data?.length; i++) {
        arr.push(i)
      }
      arr.splice(dataLength?.data?.length / 2, dataLength.data?.length)
      return arr
    } else {
      const arr = []
      for (let i = 0; i < dataLength?.data?.length; i++) {
        arr.push(i)
      }
      arr.splice(dataLength?.data?.length / 2 + 1, dataLength.data?.length)
      return arr
    }
  }
  return (
    <>
      {getButtons().map((index: number) => {
        return (
          <li
            className={styles['pagination-button']}
            key={index}
            style={{ width: width == index + 1 ? '49px' : '' }}
            onClick={() => {
              setPage(index + 1)
              setWidth(index + 1)
            }}
          ></li>
        )
      })}
    </>
  )
}
