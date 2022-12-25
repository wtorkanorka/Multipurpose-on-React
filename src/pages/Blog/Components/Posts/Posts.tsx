import React, { useEffect, useState } from 'react'
import styles from './Posts.module.css'
import useSWR from 'swr'
import { ENDPOINTS } from '../../../../constants/endpoints'
import Pagination from '../Pagination/Pagination'
import PostsContent from './PostsContent'
interface Comp {
  setFilter(value: string): void
  filter: string
}

export default function Posts({ filter, setFilter }: Comp) {
  const [page, setPage] = useState<number>(1)
  const { data, error } = useSWR(
    ENDPOINTS.BLOG_POSTS + `?preview_like=${filter}&_limit=5&_page=${page}`,
  )

  if (error) {
    return <div>ERROR</div>
  }
  if (!data) {
    return <div>Loading ...</div>
  }

  return (
    <>
      <div className={styles['posts-container']}>
        <PostsContent
          dataLength={data?.length}
          data={data}
          page={page}
          setFilter={setFilter}
        />
        {data && (
          <Pagination
            data={data}
            setPage={setPage}
            page={page}
            filter={filter}
          />
        )}
      </div>
    </>
  )
}
