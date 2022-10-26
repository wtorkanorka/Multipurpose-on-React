import React from 'react'

import { TitleOfPage } from '../TItleOfPage/TitleOfPage'
import styles from './AboutUs.module.css'

import { Wrapper } from '../../../../components/Wrapper/Wrapper'
import SmartImage from '../../../../components/SmartImage/SmartImage'
import { useInView } from 'react-intersection-observer'
import cx from 'classnames'

export default function AboutUs() {
  const { ref, inView, entry } = useInView({
    threshold: 0.5,
  })

  return (
    <Wrapper backgroundColor="var(--background-comp)">
      <div className={styles['about-us']} id="aboutUs" ref={ref}>
        <div>
          <div className={styles['title-of-page']}>
            <TitleOfPage>About Us</TitleOfPage>
          </div>

          <h2
            className={cx(
              styles['h2-style'],
              inView == true ? styles['visible'] : '',
            )}
          >
            Grow Your Business With Our Agency
          </h2>
          <p
            className={cx(
              styles['paragraph'],
              inView == true ? styles['visible-paragraph'] : '',
            )}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Convallis
            arcu in tincidunt sed imperdiet etiam fames. Tincidunt augue risus
            mattis eget sem habitant id ultrices augue. Sit rhoncus .
          </p>
          <ul
            className={cx(
              styles['about-us-ul'],
              inView == true ? styles['visible-ul'] : '',
            )}
          >
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
        <div
          className={cx(
            styles['container-for-img'],
            inView == true ? styles['visible-img'] : '',
          )}
        >
          <img
            src="/src/assets/images/statistic-pana.svg"
            alt="statistic-pana"
          />
        </div>
        <div className={styles['second-title']}>
          <TitleOfPage position="center">About Us</TitleOfPage>
        </div>
      </div>
    </Wrapper>
  )
}
