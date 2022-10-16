import React from 'react'
import { TitleOfPage } from '../TItleOfPage/TitleOfPage'
import styles from './OurCaseStudy.module.scss'
import img1 from '../../assets/images/image1.svg'
import img2 from '../../assets/images/image2.svg'
import img3 from '../../assets/images/image3.svg'
import img4 from '../../assets/images/image4.svg'
import img5 from '../../assets/images/image5.svg'
import img6 from '../../assets/images/image6.svg'
import img7 from '../../assets/images/image7.svg'
import img8 from '../../assets/images/image8.svg'
import img9 from '../../assets/images/image9.svg'
import burger from '../../assets/images/burger.svg'
import { useState } from 'react'
import { Wrapper } from '../Wrapper/Wrapper'

export default function OurCaseStudy() {
  return (
    <Wrapper>
      <TitleOfPage position="center">Our Case Study</TitleOfPage>
      <div className={styles['container-for-content']}>
        <h2 className={styles['h2-styles']}>Our Recent Project</h2>

        <ul className={styles['ul-burger']}>
          <li>
            <button>All</button>
          </li>
          <li>
            <button>UX Design</button>
          </li>
          <li>
            <button>Web Design</button>
          </li>
          <li>
            <button>App Development</button>
          </li>
          <li>
            <button>Game Design</button>
          </li>
          <li>
            <button>Graphic Design</button>
          </li>
        </ul>

        <div className={styles['blocks']}>
          <ul>
            <li>
              <img src={img1} alt="img" />
            </li>
            <li>
              <img src={img2} alt="img" />
            </li>
            <li>
              <img src={img3} alt="img" />
            </li>
            <li>
              <img src={img4} alt="img" />
            </li>
            <li>
              <img src={img5} alt="img" />
            </li>
            <li>
              <img src={img6} alt="img" />
            </li>
            <li>
              <img src={img7} alt="img" />
            </li>
            <li>
              <img src={img8} alt="img" />
            </li>
            <li>
              <img src={img9} alt="img" />
            </li>
          </ul>
        </div>
      </div>
    </Wrapper>
  )
}
