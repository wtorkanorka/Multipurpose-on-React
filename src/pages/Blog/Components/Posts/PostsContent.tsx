import React from 'react'
import { Link } from 'react-router-dom'
import Button from '../../../../components/Button/Button'
import DatComponent from '../../../../components/DatComponent/DatComponent'
import { Post } from '../../../../Types/Types'
import styles from './Posts.module.css'
interface Component {
  page: number
  dataLength: number
  data: any
  setFilter(value: string): void
}
export default function PostsContent({
  dataLength,
  data,
  page,
  setFilter,
}: Component) {
  console.log(data, 'DATA')
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
        data !== undefined &&
        data &&
        data?.list?.map((i: Post, index: number) => {
          return (
            <div className={styles['post']} key={i.id}>
              <img src={i.cover} alt={i.cover} />
              <DatComponent i={i} />
              <h3>{i.preview}</h3>
              <p className={styles['paragraph']}>{i.review}</p>
              <Link to={`/blog/${i.number_of_article}`}>
                <Button onClick={() => {}}>Read More</Button>
              </Link>
            </div>
          )
        })}
    </>
  )
}
