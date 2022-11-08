import React from 'react'
import SmartImage from '../../../../components/SmartImage/SmartImage'
import styles from './ClientsFeedback.module.css'
import useSWR from 'swr'
import { fetcher } from '../../../../fetcher/fetcher'
import { ClientsFeedbackType } from '../../../../Types/Types'
import { useState } from 'react'
import PaginationButtons from '../../../../components/PaginationButtons/PaginationButtons'

export default function ClientsFeedback() {
  const [page, setPage] = useState(1)
  const [width, setWidth] = useState(1)
  const res1 = useSWR<[]>(
    `http://localhost:3004/clients_feedback?_limit=2&_page=${page}`,
    fetcher,
  )
  const dataLength = useSWR<any>(
    `http://localhost:3004/clients_feedback`,
    fetcher,
  )

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
    <div className={styles['clients-feedback-container']}>
      <p>Clients Feedback</p>
      <h2 className={styles['h2-style']}>
        Some
        {'\n'}
        <span className={styles['span-style']}>
          Great
          <br /> Words {'\n'}
        </span>
        From Our Clients
      </h2>

      <div className={styles['commentary-container']}>
        {res1.data?.map((i: ClientsFeedbackType) => {
          return (
            <div className={styles['review']} key={i.id}>
              <div className={styles['cover']}>
                <SmartImage path={i.cover} />
              </div>
              <h3 className={styles['author']}>{i.author}</h3>
              <p className={styles['position']}>{i.position}</p>
              <p className={styles['comment']}>{i.comment}</p>
            </div>
          )
        })}
      </div>
      <ul className={styles['pagination']}>
        <PaginationButtons
          setPage={setPage}
          page={page}
          dataLength={dataLength}
        />
      </ul>
    </div>
  )
}
