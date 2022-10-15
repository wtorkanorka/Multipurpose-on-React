import React from 'react'
import styles from './HeaderSecond.module.scss'
import logo from '../../assets/images/logo.svg'
import { useState } from 'react'
import burger from '../../assets/images/burger.svg'
import { Link } from 'react-router-dom'
import sun from '../../assets/icons/light.svg'
export default function HeaderSecond({ backgroundColorProps = 'white' }: any) {
  const [visible, setVisible] = useState(false)
  return (
    <>
      <div
        className={styles['header']}
        style={{
          backgroundColor: backgroundColorProps,
          boxShadow:
            backgroundColorProps == 'white'
              ? '0px 1px 10px rgba(0, 0, 0, 0.1)'
              : 'none',
        }}
      >
        <div className={styles['logo']}>
          <Link to="/1">
            <img src={logo} alt="" />
          </Link>
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
      <div
        className={styles['header-second']}
        style={{ backgroundColor: backgroundColorProps }}
      >
        <div className={styles['logo']}>
          <img src={logo} alt="" />
        </div>
        {backgroundColorProps !== 'white' && (
          <div className={styles['lets-talk']}>
            <button>Let`s Talk</button>
          </div>
        )}
        {backgroundColorProps == 'white' && (
          <div className={styles['sun']}>
            <button>
              <img src={sun} alt="sun" />
            </button>
          </div>
        )}
        <div className={styles['navigation']}>
          <img src={burger} alt="burger" onClick={() => setVisible(!visible)} />
        </div>
      </div>
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
