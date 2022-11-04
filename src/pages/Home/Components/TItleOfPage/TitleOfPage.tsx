import React from 'react'
import styles from './TitleOfPage.module.css'
import cx from 'classnames'
import { DetailedHTMLProps, HTMLAttributes, PropsWithChildren } from 'react'

interface Types {
  children: React.ReactNode
  position?: string
  color?: string
}

export function TitleOfPage({
  position = 'none',
  children,
  color = '#FF5300',
}: Types) {
  return (
    <div
      className={styles['title']}
      style={{ justifyContent: position == 'center' ? 'center' : 'none' }}
    >
      {position == 'center' ? (
        <div
          className={cx(
            color == 'white' ? styles['another-line'] : styles['line'],
          )}
        ></div>
      ) : null}
      <div style={{ color: color }}>{children}</div>
      <div
        className={cx(
          color == 'white' ? styles['another-line'] : styles['line'],
        )}
      ></div>
    </div>
  )
}
