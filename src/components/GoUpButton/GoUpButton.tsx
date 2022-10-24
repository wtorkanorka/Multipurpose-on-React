import React from 'react'
import styles from './GoUpButton.module.css'
import GoUp from '../../assets/icons/go-up.svg'
export default function GoUpButton() {
  return (
    <button
      className={styles['go-up']}
      onClick={() => {
        window.scrollTo(0, 0)
      }}
    >
      <img src={GoUp} alt="arrow" />
    </button>
  )
}
