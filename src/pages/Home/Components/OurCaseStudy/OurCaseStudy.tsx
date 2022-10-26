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
  const [filter, setFilter] = useState('')
  const { data, error } = useSWR<OurCase[]>(
    filter == ''
      ? `http://localhost:3004/our_case_study`
      : `http://localhost:3004/our_case_study?type=${filter}`,
    fetcher,
  )
  const { ref, inView, entry } = useInView({
    threshold: 0.1,
  })

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
            <li onClick={() => setFilter('')}>
              <button
                style={{
                  background: filter == '' ? 'var(--h3-orange)' : 'none',
                  color: filter == '' ? 'white' : '#7B7B7B',
                  borderRadius: '10px',
                  transition: '0.2s',
                }}
                className={cx(filter == '' ? styles['width-button'] : '')}
              >
                All
              </button>
            </li>
            <li onClick={() => setFilter('ux_design')}>
              <button
                style={{
                  background:
                    filter == 'ux_design' ? 'var(--h3-orange)' : 'none',
                  color: filter == 'ux_design' ? 'white' : '#7B7B7B',
                  borderRadius: '10px',
                  transition: '0.2s',
                }}
                className={cx(
                  filter == 'ux_design' ? styles['width-button'] : '',
                )}
              >
                UX Design
              </button>
            </li>
            <li onClick={() => setFilter('web_design')}>
              <button
                style={{
                  background:
                    filter == 'web_design' ? 'var(--h3-orange)' : 'none',
                  color: filter == 'web_design' ? 'white' : '#7B7B7B',
                }}
                className={cx(
                  filter == 'web_design' ? styles['width-button'] : '',
                )}
              >
                Web Design
              </button>
            </li>
            <li onClick={() => setFilter('app_development')}>
              <button
                style={{
                  background:
                    filter == 'app_development' ? 'var(--h3-orange)' : 'none',
                  color: filter == 'app_development' ? 'white' : '#7B7B7B',
                  borderRadius: '10px',
                  transition: '0.2s',
                }}
                className={cx(
                  filter == 'app_development' ? styles['width-button'] : '',
                )}
              >
                App Development
              </button>
            </li>
            <li onClick={() => setFilter('game_design')}>
              <button
                style={{
                  background:
                    filter == 'game_design' ? 'var(--h3-orange)' : 'none',
                  color: filter == 'game_design' ? 'white' : '#7B7B7B',
                  borderRadius: '10px',
                  transition: '0.2s',
                }}
                className={cx(
                  filter == 'game_design' ? styles['width-button'] : '',
                )}
              >
                Game Design
              </button>
            </li>
            <li onClick={() => setFilter('graphic_design')}>
              <button
                style={{
                  background:
                    filter == 'graphic_design' ? 'var(--h3-orange)' : 'none',
                  color: filter == 'graphic_design' ? 'white' : '#7B7B7B',
                  borderRadius: '10px',
                  transition: '0.2s',
                }}
                className={cx(
                  filter == 'graphic_design' ? styles['width-button'] : '',
                )}
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
                    <OurCaseStudyTextContent i={i} filter={filter} />
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
