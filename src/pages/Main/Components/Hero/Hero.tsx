import React from 'react'
import { useInView } from 'react-intersection-observer'
import SmartButton from '../../../../components/Button/Button'
import { Wrapper } from '../../../../components/Wrapper/Wrapper'
import styles from './Hero.module.css'
import cx from 'classnames'
export default function Hero() {
  const { ref, inView, entry } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  })
  return (
    <Wrapper backgroundColor="var(--background-comp)" page="2" boxShadow={true}>
      <div className={styles['hero']} ref={ref}>
        <img
          src="/src/assets/images/hero-image.svg"
          alt="hero-iamge"
          className={cx(inView ? styles['animated'] : styles['non-animated'])}
        />
        <div className={styles['inner-block']}>
          <h1>
            We Are The Best <br />
            <span>Digital Agency</span> for <br /> business
          </h1>
          <p>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit <br /> officia consequat duis enim velit mollit.
            <br />
            Exercitation veniam consequat sunt nostrud amet.
          </p>
          <SmartButton>Contact Us</SmartButton>
        </div>
      </div>
    </Wrapper>
  )
}
