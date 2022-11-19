import React from 'react'
import styles from './DatComponent.module.css'
import { Post } from '../../Types/Types'
interface Comp {
  i: Post
}
export default function DatComponent({ i }: Comp) {
  return (
    <ul className={styles['data-author-comment']}>
      <li className={styles['dac-content']}>
        <img src="/src/assets/icons/timer.svg" alt="timer" />
        <p>{i.created_at}</p>
      </li>
      <div className={styles['dac-content']}>
        <img src="/src/assets/icons/person.svg" alt="person" />
        <p>{i.author}</p>
      </div>
      <div className={styles['dac-content']}>
        <img src="/src/assets/icons/message-circle.svg" alt="message" />
        <p>10 Comment</p>
      </div>
    </ul>
  )
}
