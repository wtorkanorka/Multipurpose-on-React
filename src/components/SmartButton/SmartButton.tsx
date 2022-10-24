import React from 'react'
import styles from './SmartButton.module.css'
export default function SmartButton({ children, type = 'button' }: any) {
  return (
    <button className={styles['button']} type={type}>
      {children}
    </button>
  )
}
