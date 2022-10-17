import React from 'react'
import { TitleOfPage } from '../TItleOfPage/TitleOfPage'
import { Wrapper } from '../Wrapper/Wrapper'
import styles from './OurBlog.module.scss'
import postImgFirst from '../../assets/images/postImgFirst.png'
import postImgSecond from '../../assets/images/postImgSecond.png'
import postImgThird from '../../assets/images/postImgThird.png'
import timer from '../../assets/icons/timer.svg'
import person from '../../assets/icons/person.svg'
import message from '../../assets/icons/message-circle.svg'
import SmartButton from '../SmartButton/SmartButton'
import useSWR from 'swr'
import { fetcher } from '../../fetcher/fetcher'
import { Posts } from '../../Types/Types'
export default function OurBlog() {
  const { data, error } = useSWR<Posts>(
    'http://localhost:3004/blog_post',
    fetcher,
  )
  console.log(data, 'dara')
  return (
    <Wrapper backgroundColor="#FFF7F4">
      <TitleOfPage position="center">Our Blog</TitleOfPage>

      <h2 className={styles['h2-style']}>Every Singel Update From Here</h2>
      <div className={styles['container']}>
        {data?.map(i => {
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
                  <img src={timer} alt="timer" />
                  <h5>{i.created_at}</h5>
                </div>
                <div>
                  <img src={person} alt="person" />
                  <h5>{i.author}</h5>
                </div>
                <div>
                  <img src={message} alt="message" />
                  <h5>10 Comment</h5>
                </div>
              </nav>
              <p className={styles['p-style']}>{i.full_content}</p>
              <SmartButton className={styles['smart-button']}>
                Read More
              </SmartButton>
            </div>
          )
        })}
      </div>
    </Wrapper>
  )
}
