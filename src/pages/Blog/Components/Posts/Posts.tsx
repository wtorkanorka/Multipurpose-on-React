import React, { useEffect, useState } from 'react'
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

export default function Posts({ filter, setFilter }: Comp) {
  const [page, setPage] = useState<number>(1)
  const [array, setArray] = useState<[]>([])
  const { data, error } = useSWR(
    // ENDPOINTS.BLOG_POSTS + `?_limit=5&_page=${page}&preview_like=${filter}`,
    ENDPOINTS.BLOG_POSTS + `?_limit=5&_page=${page}`,
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
        {data !== undefined && (
          <Pagination
            data={filter == '' ? data?.pagination : data}
            setPage={setPage}
            page={page}
            boolean={filter == '' ? true : false}
          />
        )}
      </div>
    </>
  )
}
