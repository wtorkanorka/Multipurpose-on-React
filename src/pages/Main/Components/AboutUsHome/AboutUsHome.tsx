import React from 'react'
import SmartButton from '../../../../components/SmartButton/SmartButton'
import { Wrapper } from '../../../../components/Wrapper/Wrapper'
import styles from './AboutUsHome.module.css'
import cx from 'classnames'
export default function AboutUsHome() {
  return (
    <Wrapper page="2">
      <div className={styles['about-us']}>
        <div className={styles['container']}>
          <img
            src="/src/assets/images/about-us-image-2.svg"
            alt="/src/assets/images/about-us-image-2.svg"
            className={styles['about-us-image']}
          />
          <div>
            <p>About Us</p>
            <h2>
              We Are <span>Making Ideas Better</span> For Everyone
            </h2>
            <p className={styles['about-us-paragraph']}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nascetur
              imperdiet at a augue ullamcorper. Leo faucibus feugiat rutrum
              aenean. Nisi, lectus aliquet aliquam consectetur augue praesent.
              Lorem vulputate orci eget mi, sed
            </p>
            <p className={styles['about-us-paragraph-second']}>
              pulvinar. Ornare etiam erat volutpat tempor fringilla mi. Elit a
              blandit faucibus est, dui interdum ut amet. Adipiscing feugiat vel
              at posuere in. Pellentesque volutpat vestibulum.
            </p>
            <SmartButton>Contact Us</SmartButton>
          </div>
        </div>
        <ul className={styles['blocks']}>
          <li className={styles['block']}>
            <div className={cx(styles['block-cover'], styles['cover-color-1'])}>
              <img
                src="/src/assets/icons/icon-file.svg"
                alt="/src/assets/icons/icon-file.svg"
              />
            </div>
            <p className={styles['block-p']}>
              World leader in consulting and finance
            </p>
          </li>
          <li className={styles['block']}>
            <div className={cx(styles['block-cover'], styles['cover-color-2'])}>
              <img
                src="/src/assets/icons/more-less.svg"
                alt="/src/assets/icons/more-less.svg"
              />
            </div>
            <p className={styles['block-p']}>
              A focused team with a specialized skill
            </p>
          </li>
          <li className={styles['block']}>
            <div className={cx(styles['block-cover'], styles['cover-color-3'])}>
              <img
                src="/src/assets/icons/gear.svg"
                alt="/src/assets/icons/gear.svg"
              />
            </div>
            <p className={styles['block-p']}>
              Trusted and professional advisors for you
            </p>
          </li>
          <li className={styles['block']}>
            <div className={cx(styles['block-cover'], styles['cover-color-4'])}>
              <img
                src="/src/assets/icons/share-box-line.svg"
                alt="/src/assets/icons/share-box-line.svg"
              />
            </div>
            <p className={styles['block-p']}>
              Experience to give you a better results
            </p>
          </li>
        </ul>
      </div>
    </Wrapper>
  )
}
