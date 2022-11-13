import React, { useState } from 'react'
import styles from './Posts.module.css'
import useSWR from 'swr'
import { HOST, ENDPOINTS } from '../../../../constants/endpoints'
import SmartImage from '../../../../components/Image/Image'
import Button from '../../../../components/Button/Button'
import { Post } from '../../../../Types/Types'
import Pagination from '../Pagination/Pagination'
import { chunkify } from '../../../../functions/functions'
import BlogArticle from '../BlogArticle/BlogArticle'
export default function Posts() {
  const [page, setPage] = useState<number>(1)
  const [filter, setFilter] = useState('')
  const { data, error } = useSWR<[]>(
    HOST + ENDPOINTS.BLOG_POST + `?preview_like=${filter}`,
  )
  if (error) {
    return <div>ERROR</div>
  }
  if (!data) {
    return <div>Loading ...</div>
  }

  const sliced = chunkify(data, 5)
  console.log(data, 'DATA')
  return (
    <div className={styles['container']}>
      <div className={styles['posts-container']}>
        {data.length == 0 ? (
          <div className={styles['no-posts']}>
            Нет таких постов
            <Button
              onClick={() => {
                setFilter('')
              }}
            >
              Вернуться
            </Button>
          </div>
        ) : null}
        {data.length !== 0 &&
          sliced[page - 1].map((i: Post) => {
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
                    <img
                      src="/src/assets/icons/message-circle.svg"
                      alt="message"
                    />
                    <p>10 Comment</p>
                  </div>
                </div>
                <h3>{i.preview}</h3>
                <p className={styles['paragraph']}>{i.full_content}</p>
                <Button>Read More</Button>
              </div>
            )
          })}
        <Pagination data={data} setPage={setPage} />
      </div>
      <BlogArticle setFilter={setFilter} />
    </div>
  )
}
