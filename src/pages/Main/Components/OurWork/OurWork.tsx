import React from 'react'
import styles from './OurWork.module.css'
import { useState } from 'react'
import { Image } from '../../../../components/Image/Image'
import useSWR from 'swr'

import { OurWorkTypes } from '../../../../Types/Types'

import OurWorkContent from './OurWorkContent'
import { ENDPOINTS } from '../../../../constants/endpoints'
export default function OurWork() {
  interface Arr {
    list: []
  }
  const [active, setActive] = useState(1)
  const [filter, setFilter] = useState('all')

  const { data, error } = useSWR<Arr>(
    filter == 'all'
      ? ENDPOINTS.OUR_WORK
      : ENDPOINTS.OUR_WORK + `?type=${filter}`,
  )

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
                <p
                  style={{
                    color:
                      active == 1
                        ? 'var(--orange-permanent)'
                        : 'var(--paragraph-permanent)',
                  }}
                >
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
                <p
                  style={{
                    color:
                      active == 2
                        ? 'var(--orange-permanent)'
                        : 'var(--paragraph-permanent)',
                  }}
                >
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
                <p
                  style={{
                    color:
                      active == 3
                        ? 'var(--orange-permanent)'
                        : 'var(--paragraph-permanent)',
                  }}
                >
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
                <p
                  style={{
                    color:
                      active == 4
                        ? 'var(--orange-permanent)'
                        : 'var(--paragraph-permanent)',
                  }}
                >
                  Web Development
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div className={styles['images-container']}>
        {data?.list.map((i: OurWorkTypes, index: number) => {
          return <OurWorkContent i={i} key={index} />
        })}

        {error ? <div>ошибка при запросе</div> : null}
      </div>
    </div>
  )
}
