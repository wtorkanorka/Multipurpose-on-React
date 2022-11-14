import React from 'react'
import styles from './BlogHero.module.css'
interface Blog {
  title: string
  path: string
}
export default function BlogHero({ title, path }: Blog) {
  return (
    <div className={styles['title-container']}>
      <h1>{title}</h1>
      <h3>{path}</h3>
    </div>
  )
}
