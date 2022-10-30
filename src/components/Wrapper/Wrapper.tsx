import React from 'react'
import styles from './Wrapper.module.css'
import cx from 'classnames'
interface Component {
  children: React.ReactNode
  backgroundColor?: string
  boxShadowProps?: string
  page: string
}
export function Wrapper({
  children,
  backgroundColor,
  boxShadowProps,
  page,
}: Component) {
  return (
    <div
      className={cx(page == '1' ? styles['wrapper'] : styles['wrapper-2'])}
      style={{ background: backgroundColor, boxShadow: boxShadowProps }}
    >
      {children}
    </div>
  )
}
