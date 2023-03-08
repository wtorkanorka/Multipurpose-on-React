import React from 'react'
import SiteBlocks from '../siteBlocks/SiteBlocks'
import styles from './FooterMain.module.css'
import cx from 'classnames'
import firstImg from '/src/assets/icons/send-plane-fill.svg'
import goUpImg from '/src/assets/icons/go-up.svg'
export default function FooterMain() {
  return (
    <div className={styles['footer-container']}>
      <div className={styles['footer-top']}>
        <ul className={styles['ul-container']}>
          <li>
            <h3>
              <span>Digie</span>ncy
            </h3>
            <p className={styles['paragraph']}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit a
              <br />
              laoreet libero dis eget maecenas bibendum.
            </p>
            <div className={styles['blocks-container']}>
              <SiteBlocks
                style={{ display: 'flex', gap: '11px', flexDirection: 'row' }}
              />
            </div>
          </li>
          <li>
            <h3>Company</h3>
            <ul className={cx(styles['list'], styles['company-style'])}>
              <li>About Us</li>
              <li>Our Work</li>
              <li>Client</li>
              <li>Our Blog</li>
              <li>Contact US</li>
            </ul>
          </li>
          <li>
            <h3>Sevices</h3>
            <ul className={styles['list']}>
              <li>Graphic Design</li>
              <li>UI/UX Design</li>
              <li>Web Development</li>
              <li>App Development</li>
              <li>Web Hosting</li>
            </ul>
          </li>
          <li>
            <h3>Newsletter</h3>
            <p className={styles['paragraph']}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem
              eget varius viverra in.
            </p>
            <form
              className={styles['input-container']}
              onSubmit={e => e.preventDefault()}
            >
              <input type="text" placeholder="info@gmail.com" />
              <button type="submit" className={styles['button-submit']}>
                <img src={firstImg} alt="send-plane-fill" />
              </button>
            </form>
          </li>
        </ul>
      </div>
      <div className={styles['footer-bottom']}>
        <p>© Copyright 2021. All Right Reserved By Ojjomedia</p>
        <div className={styles['go-up']}>
          <button
            onClick={() => {
              scrollTo(0, 0)
            }}
          >
            <img src={goUpImg} alt="go-up" />
          </button>
        </div>
      </div>
    </div>
  )
}
