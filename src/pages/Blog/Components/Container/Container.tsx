import React from 'react'
import BlogArticle from '../BlogArticle/BlogArticle'
import Posts from '../Posts/Posts'
import styles from './Container.module.css'
export default function Container() {
  return (
    <div className={styles['container']}>
      <Posts />
      <BlogArticle />
    </div>
  )
}
