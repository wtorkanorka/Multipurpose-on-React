import React from 'react'
import styles from './Wrapper.module.scss'
export function Wrapper({ children, backgroundColor }: any) {
  return (
    <div className={styles['wrapper']} style={{ background: backgroundColor }}>
      {children}
    </div>
  )
}
