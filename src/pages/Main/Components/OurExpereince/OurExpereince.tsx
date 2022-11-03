import React from 'react'
import SmartButton from '../../../../components/SmartButton/SmartButton'
import styles from './OurExpereince.module.css'
import cx from 'classnames'

export default function OurExpereince() {
  return (
    <div className={styles['our-expereince-container']}>
      <div className={styles['first-container']}>
        <p className={styles['title-of-page']}>OurExpereince</p>
        <h2>
          We Have
          <br /> Completed
          <span>
            150+
            <br /> Projects
          </span>
          Succesfully
        </h2>
        <div className={styles['visible-papragraph-1']}>
          <p className={styles['paragraph-1']}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nascetur
            <br />
            imperdiet at a augue ullamcorper. Leo faucibus feugiat rutrum
            aenean.
            <br />
            Nisi, lectus aliquet aliquam consectetur augue praesent. Lorem
            <br />
            vulputate orci eget mi, sed pulvinar.
            <br />
          </p>
          <p className={styles['paragraph-2']}>
            Ornare etiam erat volutpat tempor fringilla mi. Elit a blandit
            faucibus
            <br /> est, dui interdum ut amet. Adipiscing feugiat vel at posuere
            in.
            <br /> Pellentesque volutpat vestibulum.
          </p>
        </div>
        <div className={styles['visible-papragraph-2']}>
          <p className={styles['paragraph-1']}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nascetur
            imperdiet at a augue
            <br /> ullamcorper. Leo faucibus feugiat rutrum aenean. Nisi, lectus
            aliquet aliquam <br />
            consectetur augue praesent. Lorem vulputate orci eget mi, sed
            pulvinar.
          </p>
          <p className={styles['paragraph-2']}>
            Ornare etiam erat volutpat tempor fringilla mi. Elit a blandit
            faucibus est, dui
            <br /> interdum ut amet. Adipiscing feugiat vel at posuere in.
            Pellentesque volutpat vestibulum.
          </p>
        </div>
        <div className={styles['button']}>
          <SmartButton>Contact Us</SmartButton>
        </div>
      </div>
      <div className={styles['blocks-container']}>
        <ul className={cx(styles['blocks'], styles['blocks-first'])}>
          <li className={styles['block']}>
            <h3>250+</h3>
            <p>Global Customer</p>
          </li>
          <li className={styles['block']}>
            <h3>50+</h3>
            <p>Team Member</p>
          </li>
        </ul>
        <ul className={cx(styles['blocks'], styles['blocks-second'])}>
          <li className={styles['block']}>
            <h3>156+</h3>
            <p>Project Completed</p>
          </li>
          <li className={styles['block']}>
            <h3>15+</h3>
            <p>Our Company</p>
          </li>
        </ul>
      </div>
      <div className={styles['nex-container']}>
        <div className={cx(styles['test-block'], styles['position-test-1'])}>
          <div
            className={cx(
              styles['test-block-style'],
              styles['margin-bottom-block'],
            )}
          >
            <h3>250+</h3>
            <p>Global Customer</p>
          </div>
          <div className={styles['test-block-style']}>
            <h3>50+</h3>
            <p>Team Member</p>
          </div>
        </div>
        <div className={cx(styles['test-block'], styles['position-test-2'])}>
          <div
            className={cx(
              styles['test-block-style'],
              styles['margin-bottom-block'],
            )}
          >
            <h3>156+</h3>
            <p>Project Completed</p>
          </div>
          <div className={styles['test-block-style']}>
            <h3>15+</h3>
            <p>Our Company</p>
          </div>
        </div>
      </div>
    </div>
  )
}
