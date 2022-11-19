import React from 'react'
import Button from '../../../../components/Button/Button'
import { Post } from '../../../../Types/Types'
import styles from './Posts.module.css'
interface Component {
  page: number
  dataLength: number
  sliced: any
  setFilter(value: string): void
}
export default function PostsContent({
  dataLength,
  sliced,
  page,
  setFilter,
}: Component) {
  return (
    <>
      {dataLength == 0 ? (
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
      {dataLength !== 0 &&
        sliced !== undefined &&
        sliced[page - 1].map((i: Post) => {
          return (
            <div className={styles['post']} key={i.id}>
              <img src={i.cover} alt={i.cover} />
              <ul className={styles['data-author-comment']}>
                <li className={styles['dac-content']}>
                  <img src="/src/assets/icons/timer.svg" alt="timer" />
                  <p>{i.created_at}</p>
                </li>
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
              </ul>
              <h3>{i.preview}</h3>
              <p className={styles['paragraph']}>{i.review}</p>
              <Button>Read More</Button>
            </div>
          )
        })}
    </>
  )
}
