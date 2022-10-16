import React from 'react'
import useSWR from 'swr'
import { fetcher } from '../../fetcher/fetcher'
import { TitleOfPage } from '../TItleOfPage/TitleOfPage'
import { Wrapper } from '../Wrapper/Wrapper'
import styles from './OurTestimonial.module.scss'
import img from '../../assets/images/burger.svg'
import dots from '../../assets/images/dots.svg'
import { Reviews } from '../../Types/Types'
import arrow from '../../assets/icons/arrow.svg'
import { useState, useEffect } from 'react'
export default function OurTestimonial() {
  const [page, setPage] = useState(1)
  const { data, error } = useSWR<Reviews>(
    `http://localhost:3004/our_testimonial?_limit=3&_page=${page}`,
    fetcher,
  )
  console.log(data)
  useEffect(() => {
    if (page < 1) {
      setPage(1)
    }
    if (data?.length == 0) {
      setPage(() => page - 1)
    }
  }, [page])
  console.log(page)
  return (
    <Wrapper backgroundColor="#FFF7F4">
      <TitleOfPage position="center">Our Testimonial</TitleOfPage>
      <div>
        <h2 className={styles['h2']}>What Our Client Saying</h2>
        <div className={styles['commentary']}>
          <button
            className={styles['nav-button-first']}
            onClick={() => setPage(() => page - 1)}
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
                className={styles['test']}
              />
            </svg>
          </button>
          {data?.map(i => {
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
                    <img src={dots} alt="dots" />
                  </div>
                </div>
              </div>
            )
          })}
          <button
            className={styles['nav-button-second']}
            onClick={() => setPage(() => page + 1)}
          >
            <img src={arrow} alt="arrow" />
          </button>
        </div>
      </div>
    </Wrapper>
  )
}
{
  /* <div className={styles['comment']}>
            <div>rating</div>
            <p>
              Lorem ipsum dolor sit amet, consecte tur adipiscing elit. Ultrices
              blandit pelle ntesque nibh arcu elementum odio justo. Rhoncus.
            </p>
            <div className={styles['author']}>
              <div className={styles['author-name']}>
                <img src={img} alt="img" />
                <div>
                  <p>Phillip Levin</p>
                  <h5>CEO / Creative IT</h5>
                </div>
              </div>
              <div>
                <img src={dots} alt="dots" />
              </div>
            </div>
          </div> */
}
