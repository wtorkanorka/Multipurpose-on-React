import React from 'react'
import { Button } from '../../../../components/Button/Button'
import { Wrapper } from '../../../../components/Wrapper/Wrapper'
import styles from './AboutUsHome.module.css'
import cx from 'classnames'
import { useInView } from 'react-intersection-observer'
import firstImage from '/src/assets/images/about-us-image-2.svg'
import secondImg from '/src/assets/icons/icon-file.svg'
import thirdImg from '/src/assets/icons/more-less.svg'
import fourthImg from '/src/assets/icons/gear.svg'
import fifthImg from '/src/assets/icons/share-box-line.svg'
export default function AboutUsHome() {
  const { ref, inView, entry } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  })
  return (
    <Wrapper page="2" backgroundColor="var(--background-color-white)">
      <div className={styles['about-us']} ref={ref}>
        <div className={styles['container']}>
          <img
            src={firstImage}
            alt="/src/assets/images/about-us-image-2.svg"
            className={cx(
              styles['about-us-image'],
              inView ? styles['animated'] : styles['non-animated'],
            )}
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
            <Button>Contact Us</Button>
          </div>
        </div>
        <ul className={styles['blocks']}>
          <li
            className={cx(
              styles['block'],
              inView ? styles['animated'] : styles['non-animated'],
            )}
          >
            <div className={cx(styles['block-cover'], styles['cover-color-1'])}>
              <img src={secondImg} alt="/src/assets/icons/icon-file.svg" />
            </div>
            <p className={styles['block-p']}>
              World leader in consulting and finance
            </p>
          </li>
          <li
            className={cx(
              styles['block'],
              inView ? styles['animated'] : styles['non-animated'],
            )}
          >
            <div className={cx(styles['block-cover'], styles['cover-color-2'])}>
              <img src={thirdImg} alt="/src/assets/icons/more-less.svg" />
            </div>
            <p className={styles['block-p']}>
              A focused team with a specialized skill
            </p>
          </li>
          <li
            className={cx(
              styles['block'],
              inView ? styles['animated'] : styles['non-animated'],
            )}
          >
            <div className={cx(styles['block-cover'], styles['cover-color-3'])}>
              <img src={fourthImg} alt="/src/assets/icons/gear.svg" />
            </div>
            <p className={styles['block-p']}>
              Trusted and professional advisors for you
            </p>
          </li>
          <li
            className={cx(
              styles['block'],
              inView ? styles['animated'] : styles['non-animated'],
            )}
          >
            <div className={cx(styles['block-cover'], styles['cover-color-4'])}>
              <img src={fifthImg} alt="/src/assets/icons/share-box-line.svg" />
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
