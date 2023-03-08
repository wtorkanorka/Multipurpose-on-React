import React from 'react'
import { useInView } from 'react-intersection-observer'
import { Button } from '../../../../components/Button/Button'
import { Wrapper } from '../../../../components/Wrapper/Wrapper'
import styles from './Hero.module.css'
import cx from 'classnames'
import firstImg from '/src/assets/images/hero-image.svg'
export default function Hero() {
  const { ref, inView, entry } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  })
  return (
    <Wrapper
      backgroundColor="var(--background-colorful-component)"
      page="2"
      boxShadow={true}
    >
      <div className={styles['hero']} ref={ref}>
        <img
          src={firstImg}
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
          <Button>Contact Us</Button>
        </div>
      </div>
    </Wrapper>
  )
}
