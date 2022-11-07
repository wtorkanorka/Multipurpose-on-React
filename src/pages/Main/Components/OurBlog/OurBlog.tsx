import React from 'react'
import styles from './OurBlog.module.css'
import { OurBLogType } from '../../../../Types/Types'
import useSWR from 'swr'
import { fetcher } from '../../../../fetcher/fetcher'
import { useState } from 'react'
import SmartImage from '../../../../components/SmartImage/SmartImage'
export default function OurBlog() {
  const [page, setPage] = useState(1)
  const [width, setWidth] = useState(1)
  const res1 = useSWR<[]>(
    `http://localhost:3004/our_blog?_limit=2&_page=${page}`,
    fetcher,
  )
  const dataLength = useSWR<any>('http://localhost:3004/our_blog', fetcher)
  function getButtons() {
    if (dataLength?.data?.length % 2 == 0) {
      const arr = []
      for (let i = 0; i < dataLength?.data?.length; i++) {
        arr.push(i)
      }
      arr.splice(dataLength?.data?.length / 2, dataLength.data?.length)
      return arr
    } else {
      const arr = []
      for (let i = 0; i < dataLength?.data?.length; i++) {
        arr.push(i)
      }
      arr.splice(dataLength?.data?.length / 2 + 1, dataLength.data?.length)
      return arr
    }
  }
  return (
    <div className={styles['our-blog-container']}>
      <div className={styles['heading']}>
        <p>Our Blog</p>
        <h2>
          Our Latest{'\n'}
          <span className={styles['span-style']}>
            Blogs
            <br /> Will Keep
          </span>
          {'\n'}
          Everyone Updated
        </h2>
      </div>
      <div className={styles['blog-posts']}>
        {res1.data?.map((i: OurBLogType) => {
          return (
            <div className={styles['post']} key={i.id}>
              <div className={styles['title']}>
                <div className={styles['title-content']}>
                  <p className={styles['position']}>{i.position}</p>
                  <h3 className={styles['h3-style']}>{i.preview}</h3>
                </div>
                <div className={styles['title-image']}>
                  <img src={i.cover} alt="title-image" />
                </div>
              </div>
              <div className={styles['author']}>
                <div className={styles['author-photo']}>
                  <SmartImage path={i.author.photo} />
                </div>
                <div className={styles['author-content']}>
                  <h2 className={styles['name']}>{i.author.full_name}</h2>
                  <div className={styles['date']}>
                    <p>{i.author.date}</p>
                    <p>•</p>
                    <p>{i.author.time}</p>
                  </div>
                </div>
              </div>
            </div>
          )
        })}

        {res1.error && <div>Ошибка при запросе</div>}
      </div>
      <ul className={styles['pagination']}>
        {getButtons().map((index: number) => {
          return (
            <li
              className={styles['pagination-button']}
              key={index}
              style={{ width: width == index + 1 ? '49px' : '' }}
              onClick={() => {
                setPage(index + 1)
                setWidth(index + 1)
              }}
            ></li>
          )
        })}
      </ul>
    </div>
  )
}
