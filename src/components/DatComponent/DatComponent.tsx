import React from 'react'
import styles from './DatComponent.module.css'
import { Post } from '../../Types/Types'

export default function DatComponent() {
  return (
    <ul className={styles['data-author-comment']}>
      <li className={styles['dac-content']}>
        <img src="/src/assets/icons/timer.svg" alt="timer" />
        <p>January 25, 2021</p>
      </li>
      <div className={styles['dac-content']}>
        <img src="/src/assets/icons/person.svg" alt="person" />
        <p>Cristofer Westervelt</p>
      </div>
      <div className={styles['dac-content']}>
        <img src="/src/assets/icons/message-circle.svg" alt="message" />
        <p>10 Comment</p>
      </div>
    </ul>
  )
}
