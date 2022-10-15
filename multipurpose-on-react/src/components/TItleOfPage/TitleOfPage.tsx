import React from 'react'
import styles from './TitleOfPage.module.scss'

export function TitleOfPage({ position = 'none', children }: any) {
  return (
    <div
      className={styles['title']}
      style={{ justifyContent: position == 'center' ? 'center' : 'none' }}
    >
      {position == 'center' ? <div className={styles['line']}></div> : null}
      <div>{children}</div>
      <div className={styles['line']}></div>
    </div>
  )
}
