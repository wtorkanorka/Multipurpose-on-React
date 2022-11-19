import React from 'react'
import styles from './TitleBlogHero.module.css'
interface Blog {
  title: string
  path: string
}
export default function TitleBlogHero({ title, path }: Blog) {
  return (
    <div className={styles['title-container']}>
      <h1>{title}</h1>
      <h3>{path}</h3>
    </div>
  )
}
