import React from 'react'
import SmartImage from '../../../../components/Image/Image'
import styles from './ClientsFeedback.module.css'
import useSWR from 'swr'

import { ClientsFeedbackType } from '../../../../Types/Types'
import { useState } from 'react'
import PaginationButtons from '../../../../components/PaginationButtons/PaginationButtons'
import { chunkify } from '../../../../functions/functions'
import { ENDPOINTS } from '../../../../constants/endpoints'
export default function ClientsFeedback() {
  const [page, setPage] = useState(1)

  const { data, error } = useSWR<[]>(ENDPOINTS.CLIENTS_FEEDBACK)
  if (error) {
    return <div>ERROR</div>
  }
  if (!data) {
    return <div>LOADING ...</div>
  }
  const sliced = chunkify(data)

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
        {sliced !== undefined &&
          sliced[page - 1].map((i: ClientsFeedbackType) => {
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
        <PaginationButtons setPage={setPage} page={page} data={data} />
      </ul>
    </div>
  )
}
