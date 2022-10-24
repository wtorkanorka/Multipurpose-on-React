import React from 'react'
import { Wrapper } from '../../../../components/Wrapper/Wrapper'
import styles from './OurCapabilities.module.css'
import { TitleOfPage } from '../TItleOfPage/TitleOfPage'
import SmartImage from '../../../../components/SmartImage/SmartImage'
import { useInView } from 'react-intersection-observer'
export default function OurCapabilities() {
  const { ref, inView, entry } = useInView({
    threshold: 0.1,
  })

  return (
    <div ref={ref}>
      <Wrapper>
        <div className={styles['block']}>
          <div className={styles['conainer-of-content']}>
            <div
              className={styles['title-pc']}
              style={{
                opacity: inView ? '1' : '0',
                transition: '1s',
                marginLeft: inView ? '0px' : '-20px',
              }}
            >
              <TitleOfPage>Our Capabilities</TitleOfPage>
            </div>
            <div
              className={styles['title-mobile']}
              style={{
                opacity: inView ? '1' : '0',
                transition: '1s',
                marginTop: inView ? '0px' : '-20px',
              }}
            >
              <TitleOfPage position="center">Our Capabilities</TitleOfPage>
            </div>
            <h2
              className={styles['h2-style']}
              style={{
                opacity: inView ? '1' : '0',
                transition: '1s',
              }}
            >
              Forward Thinking Team Of Designers & Developers
            </h2>
            <p
              className={styles['p-style']}
              style={{
                opacity: inView ? '1' : '0',
                transition: '1s',
                marginLeft: inView ? '0px' : '-20px',
              }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus ut
              nisi, amet rhoncus volutpat neque. Ipsum in aliquam eget vitae
              purus felis eget massa felis. Eu mattis in malesuada facilisi
              proin vel.
            </p>
            <ul
              className={styles['ul-styles']}
              style={{
                opacity: inView ? '1' : '0',
                transition: '1s',
              }}
            >
              <li>
                <h3>80%</h3>
                <h4>Softwer Development</h4>
              </li>
              <li>
                <h3>90%</h3>
                <h4>Graphic Design</h4>
              </li>
              <li>
                <h3>85%</h3>
                <h4>Game Deisgn</h4>
              </li>
              <li>
                <h3>100%</h3>
                <h4>Web Development</h4>
              </li>
            </ul>
          </div>
          <div className={styles['image']}>
            <img
              src="/src/assets/images/presentation-pana.svg"
              alt="presentation-pana"
              style={{
                opacity: inView ? '1' : '0',
                transition: '1s',
                marginRight: inView ? '0px' : '-20px',
              }}
            />
          </div>
        </div>
        <div
          className={styles['performance']}
          style={{
            opacity: inView ? '1' : '0',
            transition: '1s',
          }}
        >
          <div className={styles['content']}>
            <div className={styles['img-style']}>
              <SmartImage path="/src/assets/images/man" />
            </div>
            <h3>120</h3>
            <h4>Top Experts</h4>
          </div>
          <div className={styles['vertical-line']}></div>
          <div className={styles['content']}>
            <div className={styles['img-style']}>
              <SmartImage path="/src/assets/images/target" />
            </div>
            <h3>500</h3>
            <h4>Strategies</h4>
          </div>
          <div className={styles['vertical-line']}></div>
          <div className={styles['content']}>
            <div className={styles['img-style']}>
              <SmartImage path="/src/assets/images/analysis" />
            </div>
            <h3>347</h3>
            <h4>Great Results</h4>
          </div>
          <div className={styles['vertical-line']}></div>
          <div className={styles['content']}>
            <div className={styles['img-style']}>
              <SmartImage path="/src/assets/images/data-analytics" />
            </div>
            <h3>120</h3>
            <h4>Hight Rankings</h4>
          </div>
        </div>
      </Wrapper>
    </div>
  )
}
