import React from 'react'
import SmartButton from '../../../../components/SmartButton/SmartButton'
import { Wrapper } from '../../../../components/Wrapper/Wrapper'
import styles from './Hero.module.css'
export default function Hero() {
  return (
    <Wrapper backgroundColor="var(--background-comp)" page="2">
      <div className={styles['hero']}>
        <img src="/src/assets/images/hero-image.svg" alt="hero-iamge" />
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
