import React from 'react'
import styles from './OurBlog.module.css'
import { OurBLogType } from '../../../../Types/Types'
import useSWR from 'swr'
import { useState } from 'react'
import { Image } from '../../../../components/Image/Image'
import { PaginationButtons } from '../../../../components/PaginationButtons/PaginationButtons'
import { chunkify } from '../../../../functions/functions'
import { ENDPOINTS } from '../../../../constants/endpoints'
export default function OurBlog() {
  const [page, setPage] = useState(1)

  const { data, error } = useSWR<[]>(ENDPOINTS.OUR_BLOG)

  if (error) {
    return <div>ERROR</div>
  }
  if (!data) {
    return <div>LAODING...</div>
  }
  const sliced = chunkify(data)
  return (
    <div className={styles['our-blog-container']}>
      <div className={styles['heading']}>
        <p className={styles['paragraph']}>Our Blog</p>
        <h2 className={styles['h2-style']}>
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
        {sliced !== undefined &&
          sliced[page - 1].map((i: OurBLogType) => {
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
                    <Image path={i.author.photo} />
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

        {error && <div>Ошибка при запросе</div>}
      </div>
      <ul className={styles['pagination']}>
        <PaginationButtons setPage={setPage} page={page} data={data} />
      </ul>
    </div>
  )
}
