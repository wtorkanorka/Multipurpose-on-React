import React from 'react'

import { TitleOfPage } from '../TItleOfPage/TitleOfPage'
import styles from './AboutUs.module.css'

import { Wrapper } from '../../../../components/Wrapper/Wrapper'
import { Image } from '../../../../components/Image/Image'
import { useInView } from 'react-intersection-observer'
import cx from 'classnames'
import pana from '/src/assets/images/statistic-pana.svg'
export default function AboutUs() {
  const { ref, inView, entry } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  })

  return (
    <Wrapper backgroundColor="var(--background-colorful-component)">
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
          <div className={styles['test']}>
            <ul
              className={cx(
                styles['about-us-ul'],
                inView == true ? styles['visible-ul'] : '',
              )}
            >
              <li>
                <Image path="images/checkbox" />
                Innovative website design
              </li>
              <li>
                <Image path="images/checkbox" />
                UI/UX design with global trends
              </li>
              <li>
                <Image path="images/checkbox" />
                Web and email hosting service
              </li>
            </ul>
          </div>
        </div>
        <div
          className={cx(
            styles['container-for-img'],
            inView == true ? styles['visible-img'] : '',
          )}
        >
          <img src={pana} alt="statistic-pana" />
        </div>
        <div className={styles['second-title']}>
          <TitleOfPage position="center">About Us</TitleOfPage>
        </div>
      </div>
    </Wrapper>
  )
}
