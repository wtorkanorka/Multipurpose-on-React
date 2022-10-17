import React from 'react'
import { TitleOfPage } from '../TItleOfPage/TitleOfPage'
import styles from './OurCaseStudy.module.scss'
import { useState } from 'react'
import { Wrapper } from '../Wrapper/Wrapper'
import useSWR from 'swr'
import { fetcher } from '../../fetcher/fetcher'
import { OurCase } from '../../Types/Types'
export default function OurCaseStudy() {
  const [number, setNumber] = useState(1)
  const { data, error } = useSWR<OurCase[]>(
    `http://localhost:3004/our_case_study?_limit=9&_page=${number}`,
    fetcher,
  )
  console.log(data)
  if (error) {
    return <div>Ошибка при запросе</div>
  }
  return (
    <Wrapper>
      <TitleOfPage position="center">Our Case Study</TitleOfPage>
      <div className={styles['container-for-content']}>
        <h2 className={styles['h2-styles']}>Our Recent Project</h2>

        <ul className={styles['ul-burger']}>
          <li>
            <button
              onClick={() => setNumber(1)}
              style={{
                background: number == 1 ? '#ff5300' : 'none',
                color: number == 1 ? 'white' : '#7B7B7B',
                borderRadius: '10px',
                transition: '0.2s',
              }}
            >
              All
            </button>
          </li>
          <li>
            <button
              onClick={() => setNumber(2)}
              style={{
                background: number == 2 ? '#ff5300' : 'none',
                color: number == 2 ? 'white' : '#7B7B7B',
                borderRadius: '10px',
                transition: '0.2s',
              }}
            >
              UX Design
            </button>
          </li>
          <li>
            <button
              onClick={() => setNumber(3)}
              style={{
                background: number == 3 ? '#ff5300' : 'none',
                color: number == 3 ? 'white' : '#7B7B7B',
              }}
            >
              Web Design
            </button>
          </li>
          <li>
            <button
              onClick={() => setNumber(4)}
              style={{
                background: number == 4 ? '#ff5300' : 'none',
                color: number == 4 ? 'white' : '#7B7B7B',
                borderRadius: '10px',
                transition: '0.2s',
              }}
            >
              App Development
            </button>
          </li>
          <li>
            <button
              onClick={() => setNumber(5)}
              style={{
                background: number == 5 ? '#ff5300' : 'none',
                color: number == 5 ? 'white' : '#7B7B7B',
                borderRadius: '10px',
                transition: '0.2s',
              }}
            >
              Game Design
            </button>
          </li>
          <li>
            <button
              onClick={() => setNumber(6)}
              style={{
                background: number == 6 ? '#ff5300' : 'none',
                color: number == 6 ? 'white' : '#7B7B7B',
                borderRadius: '10px',
                transition: '0.2s',
              }}
            >
              Graphic Design
            </button>
          </li>
        </ul>

        <div className={styles['blocks']}>
          <ul>
            {data?.map(i => {
              return (
                <li key={i.id}>
                  <img src={i.image} alt="img" />
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </Wrapper>
  )
}
