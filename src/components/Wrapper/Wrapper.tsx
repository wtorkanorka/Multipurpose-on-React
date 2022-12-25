import React, { memo } from 'react'
import styles from './Wrapper.module.css'
import cx from 'classnames'
interface Component {
  children: React.ReactNode
  backgroundColor?: string
  boxShadow?: boolean
  page?: string
}
export const Wrapper = memo(
  ({ children, backgroundColor, boxShadow, page }: Component) => {
    return (
      <div
        className={cx(
          page == '1' ? styles['wrapper'] : styles['wrapper-2'],
          boxShadow == true ? styles['boxShadow'] : '',
        )}
        style={{ background: backgroundColor }}
      >
        {children}
      </div>
    )
  },
)
