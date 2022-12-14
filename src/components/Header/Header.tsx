import React from 'react'
import styles from './Header.module.css'
import { Link } from 'react-router-dom'
import SmartImage from '../Image/Image'
import { useState } from 'react'
import cx from 'classnames'
import { useInView } from 'react-intersection-observer'

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
        <div>
          <img
            src="/src/assets/icons/light.svg"
            alt="light"
            className={styles['img-position']}
          />
        </div>

        <button
          onClick={() => setVisible(!visible)}
          className={styles['button-burger']}
        >
          <SmartImage path="images/burger" />
        </button>
        <ul
          className={cx(
            !visible ? styles['visible'] : styles['animated'],
            styles['navigation-mobile'],
          )}
        >
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/about-us">About Us</Link>
          </li>
          <li>
            <Link to="/services">Services</Link>
          </li>
          <li>
            <Link to="/portfolio">Portfolio</Link>
          </li>
          <li>
            <Link to="/blog">Blog</Link>
          </li>
          <li>
            <Link to="/contact-us">Contact Us</Link>
          </li>
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
            <li>
              <Link to="/home">Home</Link>
            </li>
            <li>
              <Link to="/about-us">About Us</Link>
            </li>
            <li>
              <Link to="/services">Services</Link>
            </li>
            <li>
              <Link to="/portfolio">Portfolio</Link>
            </li>
            <li>
              <Link to="/blog">Blog</Link>
            </li>
            <li>
              <Link to="/contact-us">Contact Us</Link>
            </li>
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
