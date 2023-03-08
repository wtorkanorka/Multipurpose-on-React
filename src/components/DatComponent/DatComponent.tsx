import React from 'react'
import styles from './DatComponent.module.css'
import { Post } from '../../Types/Types'
import firstImg from '/src/assets/icons/timer.svg'
import secondImg from '/src/assets/icons/person.svg'
import thirdImg from '/src/assets/icons/message-circle.svg'
export default function DatComponent() {
  return (
    <ul className={styles['data-author-comment']}>
      <li className={styles['dac-content']}>
        <img src={firstImg} alt="timer" />
        <p>January 25, 2021</p>
      </li>
      <div className={styles['dac-content']}>
        <img src={secondImg} alt="person" />
        <p>Cristofer Westervelt</p>
      </div>
      <div className={styles['dac-content']}>
        <img src={thirdImg} alt="message" />
        <p>10 Comment</p>
      </div>
    </ul>
  )
}
