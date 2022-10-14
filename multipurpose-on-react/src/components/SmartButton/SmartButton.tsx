import React from 'react'
import styles from './SmartButton.module.scss'
export default function SmartButton({ children }: any) {
  return <button className={styles['button']}>{children}</button>
}
