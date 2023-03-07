import React from 'react'
import styles from './TitleBlogHero.module.css'
interface Blog {
  title: string
  pathTitle: string
}
export default function TitleBlogHero({ title, pathTitle }: Blog) {
  return (
    <div className={styles['title-container']}>
      <h1>{title}</h1>
      <h3>{pathTitle}</h3>
    </div>
  )
}
