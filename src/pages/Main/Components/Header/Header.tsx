import React from 'react'
import styles from './Header.module.css'
import { Link } from 'react-router-dom'
import SmartImage from '../../../../components/SmartImage/SmartImage'
import { useState } from 'react'
import cx from 'classnames'
export default function Header() {
  const [visible, setVisible] = useState(false)
  return (
    <>
      <div className={styles['header-mobile']}>
        <Link to="/">
          <p>
            <span>Digi</span>
            ency
          </p>
        </Link>
        <img
          src="/src/assets/icons/light.svg"
          alt="light"
          className={styles['img-position']}
        />

        <button
          onClick={() => setVisible(!visible)}
          className={styles['button-burger']}
        >
          <SmartImage path="images/burger" />
        </button>
        <ul
          className={cx(
            !visible ? styles['visible'] : '',
            styles['navigation-mobile'],
          )}
        >
          <li>Home</li>
          <li>About Us</li>
          <li>Services</li>
          <li>Portfolio</li>
          <li>Blog</li>
          <li>Contact Us</li>
        </ul>
      </div>
      <div className={styles['header-pc']}>
        <Link to="/">
          <p>
            <span>Digi</span>
            ency
          </p>
        </Link>
        <nav>
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Services</li>
            <li>Portfolio</li>
            <li>Blog</li>
            <li>Contact Us</li>
          </ul>
        </nav>
        <img
          src="/src/assets/icons/light.svg"
          alt="light"
          className={styles['img-position']}
        />
      </div>
    </>
  )
}
