import React from 'react'
import styles from './Posts.module.css'
import useSWR from 'swr'
import { HOST, ENDPOINTS } from '../../../../constants/endpoints'
import SmartImage from '../../../../components/Image/Image'
import Button from '../../../../components/Button/Button'
import { PostsType } from '../../../../Types/Types'
export default function Posts() {
  const { data, error } = useSWR<PostsType>(HOST + ENDPOINTS.BLOG_POST)
  if (error) {
    return <div>ERROR</div>
  }
  if (!data) {
    return <div>Loading ...</div>
  }
  return (
    <div className={styles['posts-container']}>
      {data.map(i => {
        return (
          <div className={styles['post']} key={i.id}>
            <SmartImage path={i.cover} />
            <div className={styles['data-author-comment']}>
              <div className={styles['dac-content']}>
                <img src="/src/assets/icons/timer.svg" alt="timer" />
                <p>{i.created_at}</p>
              </div>
              <div className={styles['dac-content']}>
                <img src="/src/assets/icons/person.svg" alt="person" />
                <p>{i.author}</p>
              </div>
              <div className={styles['dac-content']}>
                <img src="/src/assets/icons/message-circle.svg" alt="message" />
                <p>10 Comment</p>
              </div>
            </div>
            <h3>{i.preview}</h3>
            <p className={styles['paragraph']}>{i.full_content}</p>
            <Button>Read More</Button>
          </div>
        )
      })}
    </div>
  )
}
