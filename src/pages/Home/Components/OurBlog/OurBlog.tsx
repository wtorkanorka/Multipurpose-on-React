import React from 'react'
import { TitleOfPage } from '../TItleOfPage/TitleOfPage'
import { Wrapper } from '../../../../components/Wrapper/Wrapper'
import styles from './OurBlog.module.css'
import SmartButton from '../../../../components/SmartButton/SmartButton'
import useSWR from 'swr'
import { fetcher } from '../../../../fetcher/fetcher'
import { Posts } from '../../../../Types/Types'
import SmartImage from '../../../../components/SmartImage/SmartImage'
import { useInView } from 'react-intersection-observer'
export default function OurBlog() {
  const { data, error } = useSWR<Posts>(
    'http://localhost:3004/blog_post',
    fetcher,
  )
  const { ref, inView, entry } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })
  if (error) {
    return <p>An error occurred while fetching the data.</p>
  }

  return (
    <div ref={ref}>
      <Wrapper backgroundColor="var(--background-comp)">
        <TitleOfPage position="center">Our Blog</TitleOfPage>

        <h2
          className={styles['h2-style']}
          style={{
            opacity: inView ? '1' : '0',
            transition: '1s',
            marginLeft: inView ? '0px' : '-20px',
          }}
        >
          Every Singel Update From Here
        </h2>
        <div
          className={styles['container']}
          style={{
            opacity: inView ? '1' : '0',
            transition: '1s',
          }}
        >
          {data?.length !== 0 ? (
            data?.map(i => {
              return (
                <div className={styles['blog-post']} key={i.id}>
                  <SmartImage path={i.cover} />
                  <h3>{i.preview}</h3>
                  <nav className={styles['nav']}>
                    <div>
                      <SmartImage path="images/timer" />
                      <h5>{i.created_at}</h5>
                    </div>
                    <div>
                      <SmartImage path="images/person" />
                      <h5>{i.author}</h5>
                    </div>
                    <div>
                      <SmartImage path="images/message" />
                      <h5>10 Comment</h5>
                    </div>
                  </nav>
                  <p className={styles['p-style']}>{i.full_content}</p>
                  <div className={styles['smart-button']}>
                    <SmartButton type="button">Read More</SmartButton>
                  </div>
                </div>
              )
            })
          ) : (
            <div>Тут ничего, обидно?</div>
          )}
        </div>
      </Wrapper>
    </div>
  )
}
