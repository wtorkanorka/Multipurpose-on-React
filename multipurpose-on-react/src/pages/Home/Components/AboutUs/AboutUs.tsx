import React from 'react'

import { TitleOfPage } from '../TItleOfPage/TitleOfPage'
import styles from './AboutUs.module.css'

import { Wrapper } from '../../../../components/Wrapper/Wrapper'
import SmartImage from '../../../../components/SmartImage/SmartImage'

export default function AboutUs() {
  return (
    <Wrapper backgroundColor="#fff7f4">
      <div className={styles['about-us']}>
        <div>
          <div className={styles['title-of-page']}>
            <TitleOfPage>About Us</TitleOfPage>
          </div>

          <h2 className={styles['h2-style']}>
            Grow Your Business With Our Agency
          </h2>
          <p className={styles['paragraph']}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Convallis
            arcu in tincidunt sed imperdiet etiam fames. Tincidunt augue risus
            mattis eget sem habitant id ultrices augue. Sit rhoncus .
          </p>
          <ul>
            <li>
              <SmartImage path="/src/assets/images/checkbox" />
              Innovative website design
            </li>
            <li>
              <SmartImage path="/src/assets/images/checkbox" />
              UI/UX design with global trends
            </li>
            <li>
              <SmartImage path="/src/assets/images/checkbox" />
              Web and email hosting service
            </li>
          </ul>
        </div>
        <div className={styles['container-for-img']}>
          <SmartImage path="/src/assets/images/pana" />
        </div>
        <div className={styles['second-title']}>
          <TitleOfPage position="center">About Us</TitleOfPage>
        </div>
      </div>
    </Wrapper>
  )
}
