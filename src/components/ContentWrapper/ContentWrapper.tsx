import React, { PropsWithChildren } from 'react'
import styles from './ContentWrapper.module.scss'
type children = PropsWithChildren
export default function ContentWrapper({ children }: children) {
  return <div className={styles['wrapper']}>{children}</div>
}
