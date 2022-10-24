import React, { ChildContextProvider, PropsWithChildren } from 'react'
import styles from './ContentWrapper.module.scss'
export default function ContentWrapper({ children }: any) {
  return <div className={styles['wrapper']}>{children}</div>
}
