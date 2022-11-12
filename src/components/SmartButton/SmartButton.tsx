import React, { HTMLAttributes } from 'react'
import cx from 'classnames'
import {
  DetailedHTMLProps,
  ButtonHTMLAttributes,
  PropsWithChildren,
} from 'react'
import styles from './SmartButton.module.css'
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

export default function SmartButton({ style, children, ...rest }: Props) {
  return (
    <button className={cx(styles['button'], style)} {...rest}>
      {children}
    </button>
  )
}
