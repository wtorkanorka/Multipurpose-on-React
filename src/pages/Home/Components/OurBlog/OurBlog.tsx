import React from 'react'
import { TitleOfPage } from '../TItleOfPage/TitleOfPage'
import { Wrapper } from '../../../../components/Wrapper/Wrapper'
import styles from './OurBlog.module.css'
import { Button } from '../../../../components/Button/Button'
import useSWR from 'swr'
import { PostsType } from '../../../../Types/Types'
import { Image } from '../../../../components/Image/Image'
import { useInView } from 'react-intersection-observer'
import { ENDPOINTS } from '../../../../constants/endpoints'

import { Link } from 'react-router-dom'

export default function OurBlog() {
  const { data, error } = useSWR<PostsType>(ENDPOINTS.BLOG_POSTS)
  const { ref, inView, entry } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })
  if (error) {
    return <p>An error occurred while fetching the data.</p>
  }

  return (
    <div ref={ref}>
      <Wrapper backgroundColor="var(--background-colorful-component)">
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
            data?.list.slice(0, 3).map(i => {
              return (
                <div className={styles['blog-post']} key={i.id}>
                  <div className={styles['image']}>
                    <img src={i.cover} alt={i.cover} />
                  </div>
                  <h3>{i.preview}</h3>
                  <nav className={styles['nav']}>
                    <div>
                      <Image path="images/timer" />
                      <h5>{i.created_at}</h5>
                    </div>
                    <div>
                      <Image path="images/person" />
                      <h5>{i.author}</h5>
                    </div>
                    <div>
                      <Image path="images/message" />
                      <h5>10 Comment</h5>
                    </div>
                  </nav>
                  <p className={styles['p-style']}>{i.review}</p>
                  <div className={styles['smart-button']}>
                    <Link to={`/blog/${i.id}`}>
                      <Button type="button">Read More</Button>
                    </Link>
                  </div>
                </div>
              )
            })
          ) : (
            <div>Ошибка</div>
          )}
        </div>
      </Wrapper>
    </div>
  )
}
