import React from 'react'
import SmartButton from '../../../../components/SmartButton/SmartButton'
import { TitleOfPage } from '../TItleOfPage/TitleOfPage'
import { Wrapper } from '../../../../components/Wrapper/Wrapper'
import styles from './SubscribeNewsletter.module.css'
export default function SubscribeNewsletter() {
  return (
    <Wrapper>
      <div className={styles['container']}>
        <div>
          <div className={styles['title']}>
            <TitleOfPage color="white">Subscribe Newsletter</TitleOfPage>
          </div>
          <div className={styles['title-second']}>
            <TitleOfPage color="white" position="center">
              Subscribe Newsletter
            </TitleOfPage>
          </div>
          <h2 className={styles['h2-style']}>Lets Stay In Touch</h2>
        </div>
        <form className={styles['form-style']}>
          <input
            type="text"
            placeholder="Enter your email"
            className={styles['input']}
            name="input-value"
          />
          <div className={styles['button-position']}>
            <SmartButton type="submit">Subscribe Now</SmartButton>
          </div>
        </form>
      </div>
    </Wrapper>
  )
}
