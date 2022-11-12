import React, { HTMLAttributes } from 'react'
import cx from 'classnames'
import {
  DetailedHTMLProps,
  ButtonHTMLAttributes,
  PropsWithChildren,
} from 'react'
import styles from './Button.module.css'
interface Test {
  style?: string
}
type Props = Test &
  PropsWithChildren<
    DetailedHTMLProps<
      React.ButtonHTMLAttributes<HTMLButtonElement>,
      HTMLButtonElement
    >
  >

export default function Button({ style, children, ...rest }: Props) {
  return (
    <button className={cx(styles['button'], style)} {...rest}>
      {children}
    </button>
  )
}
