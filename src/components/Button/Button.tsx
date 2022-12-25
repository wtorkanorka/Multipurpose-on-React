import React, { HTMLAttributes, memo, useEffect } from 'react'
import cx from 'classnames'
import {
  DetailedHTMLProps,
  ButtonHTMLAttributes,
  PropsWithChildren,
} from 'react'
import { Link } from 'react-router-dom'
import styles from './Button.module.css'
interface Test {
  style?: string
  Link?: string
}
type Props = Test &
  PropsWithChildren<
    DetailedHTMLProps<
      React.ButtonHTMLAttributes<HTMLButtonElement>,
      HTMLButtonElement
    >
  >

export const Button = memo(({ Link, style, children, ...rest }: Props) => {
  useEffect(() => {
    ;('Рендер Кнопки')
  }, [])
  return (
    <button className={cx(styles['button'], style)} {...rest}>
      {children}
    </button>
  )
})
