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
export default function Posts({ filter, setFilter }: Comp) {
  const [page, setPage] = useState<number>(1)

  const { data, error } = useSWR<[]>(
    ENDPOINTS.BLOG_POSTS + `?_limit=5&_page=${page}&preview_like=${filter}`,
  )
  console.log(data, 'BLOG DATA')
  if (error) {
    return <div>ERROR</div>
  }
  if (!data) {
    return <div>Loading ...</div>
  }
  console.log(data)
  const sliced = chunkify(data, 5)

  return (
    <>
      <div className={styles['posts-container']}>
        <PostsContent
          dataLength={data?.length}
          sliced={sliced}
          page={page}
          setFilter={setFilter}
        />
        {/* Не получается сделать среверную пагинацию, эта функция ломает весь запрос */}
        <Pagination data={data} setPage={setPage} page={page} />
      </div>
    </>
  )
}
