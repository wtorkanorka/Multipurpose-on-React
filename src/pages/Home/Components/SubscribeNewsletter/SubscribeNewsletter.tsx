import React from 'react'
import SmartButton from '../../../../components/Button/Button'
import { TitleOfPage } from '../TItleOfPage/TitleOfPage'
import { Wrapper } from '../../../../components/Wrapper/Wrapper'
import styles from './SubscribeNewsletter.module.css'
import { useInView } from 'react-intersection-observer'
export default function SubscribeNewsletter() {
  const { ref, inView, entry } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  })

  return (
    <div ref={ref}>
      <Wrapper>
        <div
          className={styles['container']}
          style={{
            opacity: inView ? '1' : '0',
            transition: '1s',
          }}
        >
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
    </div>
  )
}
