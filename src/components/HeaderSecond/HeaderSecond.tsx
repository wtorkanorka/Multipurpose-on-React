import React from 'react'
import styles from './HeaderSecond.module.css'
import logo from '../../assets/images/logo.svg'
import { useState } from 'react'
import burger from '../../assets/images/burger.svg'
import { Link } from 'react-router-dom'
import sun from '../../assets/icons/light.svg'
import SmartImage from '../SmartImage/SmartImage'
import SmartButton from '../SmartButton/SmartButton'
import { useInView } from 'react-intersection-observer'
export default function HeaderSecond({ backgroundColorProps = 'white' }: any) {
  const [visible, setVisible] = useState(false)
  const { ref, inView, entry } = useInView({
    threshold: 0.5,
  })
  return (
    <div ref={ref}>
      <div
        className={styles['header']}
        style={{
          backgroundColor:
            backgroundColorProps !== 'white' ? '#fff7f4' : 'white',
          boxShadow:
            backgroundColorProps == 'white'
              ? '0px 1px 10px rgba(0, 0, 0, 0.1)'
              : 'none',
        }}
      >
        <div className={styles['logo']}>
          <Link to="/1">
            <p
              style={{
                opacity: inView ? '1' : '0',
                transition: '1s',
                marginLeft: inView ? '0px' : '-20px',
              }}
            >
              <span>Digi</span>ency
            </p>
          </Link>
        </div>
        <div className={styles['navigation']}>
          <ul
            style={{
              opacity: inView ? '1' : '0',
              transition: '1s',
              marginBottom: inView ? '0px' : '-20px',
            }}
          >
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
        style={{
          backgroundColor: backgroundColorProps,
          opacity: inView ? '1' : '0',
          transition: '1s',
          marginLeft: inView ? '0px' : '-20px',
        }}
      >
        <div className={styles['logo']}>
          <Link to="/1">
            <p>
              <span>Digi</span>ency
            </p>
          </Link>
        </div>
        {backgroundColorProps !== 'white' && (
          <div className={styles['lets-talk']}>
            <button>Let`s Talk</button>
          </div>
        )}
        {backgroundColorProps == 'white' && (
          <div className={styles['sun']}>
            <button>
              <SmartImage path="/src/assets/images/sun" />
            </button>
          </div>
        )}
        <div
          className={styles['navigation']}
          onClick={() => setVisible(!visible)}
        >
          <SmartImage path="/src/assets/images/burger" />
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
    </div>
  )
}
