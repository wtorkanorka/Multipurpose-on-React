import React from 'react'
import useSWR from 'swr'
import { fetcher } from '../../../../fetcher/fetcher'
import { TitleOfPage } from '../TItleOfPage/TitleOfPage'
import { Wrapper } from '../../../../components/Wrapper/Wrapper'
import styles from './OurTestimonial.module.css'

import { Reviews } from '../../../../Types/Types'

import { useState, useEffect } from 'react'
import cx from 'classnames'
import SmartImage from '../../../../components/SmartImage/SmartImage'
export default function OurTestimonial() {
  const [page, setPage] = useState(1)
  const { data, error } = useSWR<Reviews>(
    `http://localhost:3004/our_testimonial?_limit=3&_page=${page}`,
    fetcher,
  )

  if (page < 1) {
    setPage(1)
  }
  if (data?.length == 0) {
    setPage(() => page - 1)
  }

  console.log(page)
  if (error) {
    return <p>An error occurred while fetching the data.</p>
  }
  return (
    <Wrapper backgroundColor="#FFF7F4">
      <TitleOfPage position="center">Our Testimonial</TitleOfPage>
      <div>
        <h2 className={styles['h2']}>What Our Client Saying</h2>
        <div className={styles['commentary']}>
          {page > 1 ? (
            <button
              className={cx(styles['nav-button-first'], styles['visible'])}
              onClick={() => {
                setPage(() => page - 1)
              }}
            >
              <svg
                width="10"
                height="16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.465 8 .278 1.812 2.045.045 10 8l-7.955 7.955-1.767-1.768L6.465 8Z"
                  fill="#373737"
                />
              </svg>
            </button>
          ) : null}
          {!error ? (
            data?.map(i => {
              return (
                <div className={styles['comment']} key={i.id}>
                  <div>{i.rating}</div>
                  <p>{i.review}</p>
                  <div className={styles['author']}>
                    <div className={styles['author-name']}>
                      <img src={i.author.photo} alt="img" />
                      <div>
                        <p>{i.author.name}</p>
                        <h5>{i.author.position}</h5>
                      </div>
                    </div>
                    <div>
                      <SmartImage path="/src/assets/images/dots" />
                    </div>
                  </div>
                </div>
              )
            })
          ) : (
            <div>Ошибка при запросе</div>
          )}
          {data?.length == 0 ? (
            <div className={styles['comment']}>Ничего нет</div>
          ) : null}
          {page !== 0 && data?.length == 3 ? (
            <button
              className={cx(styles['nav-button-second'], styles['visible'])}
              onClick={() => {
                setPage(() => page + 1)
              }}
            >
              <svg
                width="10"
                height="16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.465 8 .278 1.812 2.045.045 10 8l-7.955 7.955-1.767-1.768L6.465 8Z"
                  fill="#373737"
                />
              </svg>
            </button>
          ) : null}
        </div>
      </div>
    </Wrapper>
  )
}
