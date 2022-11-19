import React from 'react'
import Button from '../../../../components/Button/Button'
import DatComponent from '../../../../components/DatComponent/DatComponent'
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
              <DatComponent i={i} />
              <h3>{i.preview}</h3>
              <p className={styles['paragraph']}>{i.review}</p>
              <Button>Read More</Button>
            </div>
          )
        })}
    </>
  )
}
