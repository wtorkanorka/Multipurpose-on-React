import React from 'react'
import { TitleOfPage } from '../TItleOfPage/TitleOfPage'
import styles from './OurCaseStudy.module.css'
import { useState } from 'react'
import { Wrapper } from '../../../../components/Wrapper/Wrapper'
import useSWR from 'swr'
import { fetcher } from '../../../../fetcher/fetcher'
import { OurCase } from '../../../../Types/Types'
import OurCaseStudyTextContent from './OurCaseStudyTextContent'
import cx from 'classnames'
import { useInView } from 'react-intersection-observer'

export default function OurCaseStudy() {
  const [number, setNumber] = useState(1)
  const { data, error } = useSWR<OurCase[]>(
    `http://localhost:3004/our_case_study?_limit=9&_page=${number}`,
    fetcher,
  )
  const { ref, inView, entry } = useInView({
    threshold: 0.1,
  })
  console.log(data)
  if (error) {
    return <div>Ошибка при запросе</div>
  }

  return (
    <div ref={ref}>
      <Wrapper>
        <TitleOfPage position="center">Our Case Study</TitleOfPage>
        <div className={styles['container-for-content']}>
          <h2
            className={styles['h2-styles']}
            style={{
              opacity: inView ? '1' : '0',
              transition: '1s',
              marginLeft: inView ? '0px' : '-20px',
            }}
          >
            Our Recent Project
          </h2>

          <ul className={styles['ul-burger']}>
            <li
              onClick={() => setNumber(1)}
              className={cx(number == 1 ? styles['width-button'] : '')}
            >
              <button
                style={{
                  background: number == 1 ? 'var(--h3-orange)' : 'none',
                  color: number == 1 ? 'white' : '#7B7B7B',
                  borderRadius: '10px',
                  transition: '0.2s',
                }}
              >
                All
              </button>
            </li>
            <li onClick={() => setNumber(2)}>
              <button
                style={{
                  background: number == 2 ? 'var(--h3-orange)' : 'none',
                  color: number == 2 ? 'white' : '#7B7B7B',
                  borderRadius: '10px',
                  transition: '0.2s',
                }}
                className={cx(number == 2 ? styles['width-button'] : '')}
              >
                UX Design
              </button>
            </li>
            <li onClick={() => setNumber(3)}>
              <button
                style={{
                  background: number == 3 ? 'var(--h3-orange)' : 'none',
                  color: number == 3 ? 'white' : '#7B7B7B',
                }}
                className={cx(number == 3 ? styles['width-button'] : '')}
              >
                Web Design
              </button>
            </li>
            <li onClick={() => setNumber(4)}>
              <button
                style={{
                  background: number == 4 ? 'var(--h3-orange)' : 'none',
                  color: number == 4 ? 'white' : '#7B7B7B',
                  borderRadius: '10px',
                  transition: '0.2s',
                }}
                className={cx(number == 4 ? styles['width-button'] : '')}
              >
                App Development
              </button>
            </li>
            <li onClick={() => setNumber(5)}>
              <button
                style={{
                  background: number == 5 ? 'var(--h3-orange)' : 'none',
                  color: number == 5 ? 'white' : '#7B7B7B',
                  borderRadius: '10px',
                  transition: '0.2s',
                }}
                className={cx(number == 5 ? styles['width-button'] : '')}
              >
                Game Design
              </button>
            </li>
            <li onClick={() => setNumber(6)}>
              <button
                style={{
                  background: number == 6 ? 'var(--h3-orange)' : 'none',
                  color: number == 6 ? 'white' : '#7B7B7B',
                  borderRadius: '10px',
                  transition: '0.2s',
                }}
                className={cx(number == 6 ? styles['width-button'] : '')}
              >
                Graphic Design
              </button>
            </li>
          </ul>

          <div className={styles['blocks']}>
            <ul>
              {data?.map(i => {
                return (
                  <div key={i.id}>
                    <OurCaseStudyTextContent i={i} />
                  </div>
                )
              })}
            </ul>
          </div>
        </div>
      </Wrapper>
    </div>
  )
}
