import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from '../../../../components/Button/Button'
import DatComponent from '../../../../components/DatComponent/DatComponent'
import { Post } from '../../../../Types/Types'
import styles from './Posts.module.css'
interface arr {
  id: number
  author: string
  cover: string
  created_at: string
  preview: string
  review: string
}

interface arrAndPagination {
  list: arr[]
  pagination: object
}

type response = arr[] | arrAndPagination
interface Component {
  page: number
  dataLength: number
  data: response

  setFilter(value: string): void
}
export default function PostsContent({
  dataLength,
  data,

  setFilter,
}: Component) {
  data, 'PostsContent Data'

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
      {data?.list &&
        data?.list?.map((i: Post, index: number) => {
          return (
            <div className={styles['post']} key={i.id}>
              <img src={i.cover} alt={i.cover} />
              <DatComponent i={i} />
              <h3>{i.preview}</h3>
              <p className={styles['paragraph']}>{i.review}</p>
              <Link to={`/blog/${i.id}`}>
                <Button>Read More</Button>
              </Link>
            </div>
          )
        })}
      {!data?.list &&
        data?.map((i: Post, index: number) => {
          return (
            <div className={styles['post']} key={i.id}>
              <img src={i.cover} alt={i.cover} />
              <DatComponent i={i} />
              <h3>{i.preview}</h3>
              <p className={styles['paragraph']}>{i.review}</p>
              <Link to={`/blog/${i.id}`}>
                <Button>Read More</Button>
              </Link>
            </div>
          )
        })}
    </>
  )
}
