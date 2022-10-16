import React from 'react'
import { TitleOfPage } from '../TItleOfPage/TitleOfPage'
import { Wrapper } from '../Wrapper/Wrapper'
import styles from './OurBlog.module.scss'
import postImgFirst from '../../assets/images/postImgFirst.png'
import postImgSecond from '../../assets/images/postImgSecond.png'
import postImgThird from '../../assets/images/postImgThird.png'
import timer from '../../assets/icons/timer.svg'
import person from '../../assets/icons/person.svg'
import message from '../../assets/icons/message-circle.svg'
import SmartButton from '../SmartButton/SmartButton'
export default function OurBlog() {
  return (
    <Wrapper backgroundColor="#FFF7F4">
      <TitleOfPage position="center">Our Blog</TitleOfPage>

      <h2 className={styles['h2-style']}>Every Singel Update From Here</h2>
      <div className={styles['container']}>
        <div className={styles['blog-post']}>
          <img
            src={postImgFirst}
            alt="first img"
            className={styles['blog-post-img']}
          />
          <h3>
            35 Stellar Graphic Design Blogs to Keep YouEducated and Inspired
          </h3>
          <nav className={styles['nav']}>
            <div>
              <img src={timer} alt="timer" />
              <h5>January 25, 2021</h5>
            </div>
            <div>
              <img src={person} alt="person" />
              <h5>Cristofer Westervelt</h5>
            </div>
            <div>
              <img src={message} alt="message" />
              <h5>10 Comment</h5>
            </div>
          </nav>
          <p className={styles['p-style']}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget nunc,
            sed sed sed. Sit integer at dui at non ipsum tellus ac. Est.
          </p>
          <SmartButton className={styles['smart-button']}>
            Read More
          </SmartButton>
        </div>
        <div className={styles['blog-post']}>
          <img
            src={postImgSecond}
            alt="first img"
            className={styles['blog-post-img']}
          />
          <h3>Ridiculously powerful 2021 iPad Pro may drop this month</h3>
          <nav className={styles['nav']}>
            <div>
              <img src={timer} alt="timer" />
              <h5>January 25, 2021</h5>
            </div>
            <div>
              <img src={person} alt="person" />
              <h5>Cristofer Westervelt</h5>
            </div>
            <div>
              <img src={message} alt="message" />
              <h5>10 Comment</h5>
            </div>
          </nav>
          <p className={styles['p-style']}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget nunc,
            sed sed sed. Sit integer at dui at non ipsum tellus ac. Est.
          </p>
          <SmartButton className={styles['smart-button']}>
            Read More
          </SmartButton>
        </div>
        <div className={styles['blog-post']}>
          <img
            src={postImgThird}
            alt="first img"
            className={styles['blog-post-img']}
          />
          <h3>Memphis Design: the defining look of the 1980s</h3>
          <nav className={styles['nav']}>
            <div>
              <img src={timer} alt="timer" />
              <h5>January 25, 2021</h5>
            </div>
            <div>
              <img src={person} alt="person" />
              <h5>Cristofer Westervelt</h5>
            </div>
            <div>
              <img src={message} alt="message" />
              <h5>10 Comment</h5>
            </div>
          </nav>
          <p className={styles['p-style']}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget nunc,
            sed sed sed. Sit integer at dui at non ipsum tellus ac. Est.
          </p>
          <SmartButton className={styles['smart-button']}>
            Read More
          </SmartButton>
        </div>
      </div>
    </Wrapper>
  )
}
