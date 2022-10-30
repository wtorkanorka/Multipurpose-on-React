import React from 'react'
import {
  DetailedHTMLProps,
  ButtonHTMLAttributes,
  PropsWithChildren,
} from 'react'
import styles from './SmartButton.module.css'
type Props = PropsWithChildren<
  DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>
>
export default function SmartButton({ children, ...rest }: Props) {
  return (
    <button className={styles['button']} {...rest}>
      {children}
    </button>
  )
}
