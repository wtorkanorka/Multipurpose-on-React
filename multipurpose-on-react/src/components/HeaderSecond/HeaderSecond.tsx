import React from 'react'
import styles from './HeaderSecond.module.scss'
import logo from '../../assets/images/logo.svg'
import { useState } from 'react'
import burger from '../../assets/images/burger.svg'
export default function HeaderSecond() {
  const [visible, setVisible] = useState(false)
  return (
    <>
      <div className={styles['header']}>
        <div className={styles['logo']}>
          <img src={logo} alt="" />
        </div>
        <div className={styles['navigation']}>
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Services</li>
            <li>Portfolio</li>
            <li>Blog</li>
            <li>Contact Us</li>
          </ul>
          <div className={styles['lets-talk']}>
            <button>Let`s Talk</button>
          </div>
        </div>
      </div>
      <div className={styles['header-second']}>
        <div className={styles['logo']}>
          <img src={logo} alt="" />
        </div>
        <div className={styles['lets-talk']}>
          <button>Let`s Talk</button>
        </div>
        <div className={styles['navigation']}>
          <img src={burger} alt="burger" onClick={() => setVisible(!visible)} />
        </div>
      </div>{' '}
      {visible && (
        <ul className={styles['nav-ul']}>
          <li>Home</li>
          <li>About Us</li>
          <li>Services</li>
          <li>Portfolio</li>
          <li>Blog</li>
          <li>Contact Us</li>
        </ul>
      )}
    </>
  )
}
