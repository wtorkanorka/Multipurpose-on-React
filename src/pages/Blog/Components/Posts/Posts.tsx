import React, { useState } from 'react'
import styles from './Posts.module.css'
import useSWR from 'swr'
import { ENDPOINTS } from '../../../../constants/endpoints'
import Pagination from '../Pagination/Pagination'
import { chunkify } from '../../../../functions/functions'
import PostsContent from './PostsContent'
import cx from 'classnames'
interface Comp {
  setFilter(value: string): void
  filter: string
}
interface Data {
  pagination: {}
  data: []
}
export default function Posts({ filter, setFilter }: Comp) {
  const [page, setPage] = useState<number>(1)

  const { data, error } = useSWR<Data[]>(
    ENDPOINTS.BLOG_POSTS + `?_limit=5&_page=${page}&preview_like=${filter}`,
  )

  if (error) {
    return <div>ERROR</div>
  }
  if (!data) {
    return <div>Loading ...</div>
  }
  console.log(data)

  return (
    <>
      <div className={styles['posts-container']}>
        <PostsContent
          dataLength={data?.length}
          data={data}
          page={page}
          setFilter={setFilter}
        />

        <Pagination data={data.pagination} setPage={setPage} page={page} />
      </div>
    </>
  )
}
