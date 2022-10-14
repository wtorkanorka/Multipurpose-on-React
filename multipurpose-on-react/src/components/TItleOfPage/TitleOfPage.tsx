import React from 'react'
import styles from './TitleOfPage.module.scss'

export function TitleOfPage({ position = 'none' }: any) {
  return (
    <div className={styles['title']}>
      {position == 'center' ? <div className={styles['line']}></div> : null}
      <div>TitleOfPage</div>
      <div className={styles['line']}></div>
    </div>
  )
}
