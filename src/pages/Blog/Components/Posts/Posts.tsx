import React, { useState } from 'react'
import styles from './Posts.module.css'
import useSWR from 'swr'
import { ENDPOINTS } from '../../../../constants/endpoints'
import SmartImage from '../../../../components/Image/Image'
import Button from '../../../../components/Button/Button'
import { Post } from '../../../../Types/Types'
import Pagination from '../Pagination/Pagination'
import { chunkify } from '../../../../functions/functions'
import BlogArticle from '../BlogArticle/BlogArticle'
import PostsContent from './PostsContent'
export default function Posts() {
  const [page, setPage] = useState<number>(1)
  const [filter, setFilter] = useState('')
  const { data, error } = useSWR<[]>(
    ENDPOINTS.BLOG_POST + `?preview_like=${filter}`,
  )
  if (error) {
    return <div>ERROR</div>
  }
  if (!data) {
    return <div>Loading ...</div>
  }

  const sliced = chunkify(data, 5)

  return (
    <div className={styles['container']}>
      <div className={styles['posts-container']}>
        <PostsContent
          dataLength={data?.length}
          sliced={sliced}
          page={page}
          setFilter={setFilter}
        />
        <Pagination data={data} setPage={setPage} page={page} />
      </div>
      <BlogArticle setFilter={setFilter} />
    </div>
  )
}
