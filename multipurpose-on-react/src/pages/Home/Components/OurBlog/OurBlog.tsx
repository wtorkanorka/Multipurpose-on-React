import React from 'react'
import { TitleOfPage } from '../TItleOfPage/TitleOfPage'
import { Wrapper } from '../../../../components/Wrapper/Wrapper'
import styles from './OurBlog.module.css'
import SmartButton from '../../../../components/SmartButton/SmartButton'
import useSWR from 'swr'
import { fetcher } from '../../../../fetcher/fetcher'
import { Posts } from '../../../../Types/Types'
import SmartImage from '../../../../components/SmartImage/SmartImage'
export default function OurBlog() {
  const { data, error } = useSWR<Posts>(
    'http://localhost:3004/blog_post',
    fetcher,
  )

  if (error) {
    return <p>An error occurred while fetching the data.</p>
  }
  return (
    <Wrapper backgroundColor="#FFF7F4">
      <TitleOfPage position="center">Our Blog</TitleOfPage>

      <h2 className={styles['h2-style']}>Every Singel Update From Here</h2>
      <div className={styles['container']}>
        {data?.length !== 0 ? (
          data?.map(i => {
            return (
              <div className={styles['blog-post']} key={i.id}>
                <img
                  src={i.cover}
                  alt="first img"
                  className={styles['blog-post-img']}
                />
                <h3>{i.preview}</h3>
                <nav className={styles['nav']}>
                  <div>
                    <SmartImage path="/src/assets/images/timer" />
                    <h5>{i.created_at}</h5>
                  </div>
                  <div>
                    <SmartImage path="/src/assets/images/person" />
                    <h5>{i.author}</h5>
                  </div>
                  <div>
                    <SmartImage path="/src/assets/images/message" />
                    <h5>10 Comment</h5>
                  </div>
                </nav>
                <p className={styles['p-style']}>{i.full_content}</p>
                <SmartButton className={styles['smart-button']}>
                  Read More
                </SmartButton>
              </div>
            )
          })
        ) : (
          <div>Тут ничего, обидно?</div>
        )}
      </div>
    </Wrapper>
  )
}
