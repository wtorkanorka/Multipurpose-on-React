import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { Button } from '../../../../components/Button/Button'
import DatComponent from '../../../../components/DatComponent/DatComponent'
import { ThemeContext } from '../../../../ThemeContext'
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

interface response {
  list: arr[]
}
interface Component {
  page: number
  dataLength: number
  data: response
}
export default function PostsContent({ dataLength, data, page }: Component) {
  const { toggleSearch } = useContext(ThemeContext)

  return (
    <>
      {dataLength == 0 ? (
        <div className={styles['no-posts']}>
          Нет таких постов
          <Button
            onClick={() => {
              toggleSearch('')
            }}
          >
            Вернуться
          </Button>
        </div>
      ) : null}
      {data?.list &&
        data?.list?.map((i: arr) => {
          return (
            <div className={styles['post']} key={i.id}>
              <img src={i.cover} alt={i.cover} />
              <DatComponent />
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
