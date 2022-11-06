import React from 'react'
import useSWR from 'swr'
import { fetcher } from '../../../../fetcher/fetcher'
import { TitleOfPage } from '../TItleOfPage/TitleOfPage'
import { Wrapper } from '../../../../components/Wrapper/Wrapper'
import styles from './OurTestimonial.module.css'
import StarRatings from 'react-star-ratings'
import { Reviews } from '../../../../Types/Types'

import { useState, useEffect } from 'react'
import cx from 'classnames'
import SmartImage from '../../../../components/SmartImage/SmartImage'
import { useInView } from 'react-intersection-observer'
export default function OurTestimonial() {
  const [page, setPage] = useState(1)
  const { data, error } = useSWR<Reviews>(
    `http://localhost:3004/our_testimonial?_limit=3&_page=${page}`,

    fetcher,
  )

  const res1 = useSWR<Reviews>(`http://localhost:3004/our_testimonial`, fetcher)
  const { ref, inView, entry } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  })
  if (page < 1) {
    setPage(1)
  }
  if (data?.length == 0) {
    setPage(() => page - 1)
  }

  if (error) {
    return <p>An error occurred while fetching the data.</p>
  }

  return (
    <div ref={ref}>
      <Wrapper backgroundColor="var(--background-comp)">
        <TitleOfPage position="center">Our Testimonial</TitleOfPage>
        <div>
          <h2
            className={styles['h2']}
            style={{
              opacity: inView ? '1' : '0',
              transition: '1s',
              marginLeft: inView ? '0px' : '-20px',
            }}
          >
            What Our Client Saying
          </h2>
          <div className={styles['commentary']}>
            {page > 1 ? (
              <button
                className={cx(
                  styles['nav-button-first'],
                  styles['visible'],
                  styles['nav-button'],
                )}
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
            ) : (
              <button
                className={cx(styles['nav-button-first'], styles['nav-button'])}
                style={{
                  opacity: 0.1,
                  pointerEvents: 'none',
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
            )}
            {!error ? (
              data?.map(i => {
                return (
                  <div
                    className={styles['comment']}
                    key={i.id}
                    style={{
                      opacity: inView ? '1' : '0',
                      transition: '1s',
                      marginLeft: inView ? '0px' : '-20px',
                    }}
                  >
                    <StarRatings
                      rating={i.rating / 2}
                      starRatedColor="var(--background)"
                      numberOfStars={5}
                      name="rating"
                      starDimension="20px"
                      starSpacing="5px"
                    />
                    <p>{i.review}</p>
                    <div className={styles['author']}>
                      <div className={styles['author-name']}>
                        <img src={`${i.author.photo}`} alt="img" />
                        <div>
                          <p>{i.author.name}</p>
                          <h5>{i.author.position}</h5>
                        </div>
                      </div>
                      <div>
                        <SmartImage path="images/dots" />
                      </div>
                    </div>
                  </div>
                )
              })
            ) : (
              <div>Ошибка при запросе</div>
            )}

            {data?.length == 0 || data?.length < 3 ? (
              <div className={styles['comment']}>Ничего нет</div>
            ) : null}
            {data?.length * page !== res1.data?.length ? (
              <button
                className={cx(
                  styles['nav-button-second'],
                  styles['visible'],
                  styles['nav-button'],
                )}
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
            ) : (
              <button
                className={cx(
                  styles['nav-button-second'],
                  styles['nav-button'],
                )}
                style={{ opacity: 0.1, pointerEvents: 'none' }}
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
            )}
          </div>
        </div>
      </Wrapper>
    </div>
  )
}
