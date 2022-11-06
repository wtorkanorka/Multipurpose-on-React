import React from 'react'
import styles from './OurWork.module.css'
import { useState } from 'react'
import SmartImage from '../../../../components/SmartImage/SmartImage'
import useSWR from 'swr'
import { fetcher } from '../../../../fetcher/fetcher'
import { OurWorkTypes } from '../../../../Types/Types'
import cx from 'classnames'
import OurWorkContent from './OurWorkContent'
export default function OurWork() {
  const [active, setActive] = useState(1)
  const [filter, setFilter] = useState('all')

  const { data, error } = useSWR<[]>(
    filter == 'all'
      ? 'http://localhost:3004/our_work'
      : `http://localhost:3004/our_work?type=${filter}`,
    fetcher,
  )
  console.log(data)

  return (
    <div className={styles['our-work-container']}>
      <div>
        <p className={styles['p-style']}>OurWork</p>
        <h2 className={styles['h2-style']}>
          We Have <br /> Some
          {'\n'}
          <span>
            Designed & <br /> Development
          </span>
          {'\n'}
          Projects
        </h2>
        <div className={styles['nav-container']}>
          <ul className={styles['nav']}>
            <li
              onClick={() => {
                setActive(1), setFilter('all')
              }}
            >
              <div>
                <p style={{ color: active == 1 ? 'var(--h3-orange)' : '' }}>
                  All
                </p>
              </div>
            </li>
            <li
              onClick={() => {
                setActive(2), setFilter('graphic_design')
              }}
            >
              <div>
                <p style={{ color: active == 2 ? 'var(--h3-orange)' : '' }}>
                  Graphic Design
                </p>
              </div>
            </li>
            <li
              onClick={() => {
                setActive(3), setFilter('ui/ux_design')
              }}
            >
              <div>
                <p style={{ color: active == 3 ? 'var(--h3-orange)' : '' }}>
                  UI/UX Design
                </p>
              </div>
            </li>
            <li
              onClick={() => {
                setActive(4), setFilter('web_development')
              }}
            >
              <div>
                <p style={{ color: active == 4 ? 'var(--h3-orange)' : '' }}>
                  Web Development
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div className={styles['images-container']}>
        {data?.map((i: OurWorkTypes) => {
          return <OurWorkContent i={i} />
        })}

        {error ? <div>ошибка при запросе</div> : null}
      </div>
    </div>
  )
}
