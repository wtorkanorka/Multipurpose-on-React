import React from 'react'
import HeaderSecond from '../HeaderSecond/HeaderSecond'
import styles from './HeroSecond.module.scss'
import { useState } from 'react'
import image from '../../assets/images/second-hero-image.svg'
import SmartButton from '../SmartButton/SmartButton'

export default function HeroSecond() {
  return (
    <div className={styles['content-wrapper']}>
      <HeaderSecond backgroundColorProps={'none'} />
      <div className={styles['container']}>
        <div className={styles['content']}>
          <h1 className={styles['paragraph-h1']}>
            Choose What Matters
            <br /> To Your Business & Your <br /> Customers.
          </h1>
          <p className={styles['paragraph-p']}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam in
            digni ssim euismod purus donec mus vulputate habitant iaculis. Com
            odo enim ornare turpis tempus enim, nibh nulla. Rhoncus sed.
          </p>
          <SmartButton>Get Start Now</SmartButton>
        </div>
        <div className={styles['image']}>
          <img src={image} alt="image" />
        </div>
      </div>
    </div>
  )
}