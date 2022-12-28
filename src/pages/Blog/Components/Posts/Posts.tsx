import React, { useContext, useEffect, useState } from 'react'
import styles from './Posts.module.css'
import useSWR from 'swr'
import { ENDPOINTS } from '../../../../constants/endpoints'
import Pagination from '../Pagination/Pagination'
import PostsContent from './PostsContent'
import { ThemeContext } from '../../../../ThemeContext'
interface Comp {
  setFilter(value: string): void
  filter: string
}

export default function Posts() {
  const [page, setPage] = useState<number>(1)
  const { searchForTagState } = useContext(ThemeContext)
  const { searchState } = useContext(ThemeContext)
  const { data, error } = useSWR(
    ENDPOINTS.BLOG_POSTS +
      `?preview_like=${searchState}&tag_like=${searchForTagState}&_limit=5&_page=${page}`,
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
        <PostsContent dataLength={data?.length} data={data} page={page} />
        {data && <Pagination data={data} setPage={setPage} page={page} />}
      </div>
    </>
  )
}
