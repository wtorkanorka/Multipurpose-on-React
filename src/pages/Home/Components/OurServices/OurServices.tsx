import { TitleOfPage } from '../TItleOfPage/TitleOfPage'
import styles from './OurServices.module.css'
import ux from '../../../..//assets/images/ux-interface.svg'
import { Wrapper } from '../../../../components/Wrapper/Wrapper'
import SmartImage from '../../../../components/Image/Image'
import { useInView } from 'react-intersection-observer'
export default function OurServices() {
  const { ref, inView, entry } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  })

  return (
    <div ref={ref}>
      <Wrapper>
        <TitleOfPage position="center">Our Services</TitleOfPage>
        <h2
          className={styles['h2']}
          style={{
            opacity: inView ? '1' : '0',
            transition: '1s',
            marginLeft: inView ? '0px' : '-20px',
          }}
        >
          What We Do
        </h2>
        <div className={styles['blocks']}>
          <ul>
            <li
              style={{
                opacity: inView ? '1' : '0',
                transition: '0.5s',
              }}
            >
              <div className={styles['container-for-image']}>
                <SmartImage path="images/ux-interface" />
                <article className={styles['number']}>01</article>
              </div>
              <div>
                <h3>UX Design</h3>
              </div>
              <div>
                <h5>Mobile App, Website</h5>
              </div>
              <div>
                <p className={styles['paragraph']}>
                  Lorem ipsum dolor sit amet, consec tet ur adipiscing elit.
                  Accumsan sed faucibu s faucibus augue. Cras ut.
                </p>
              </div>
            </li>
            <li
              style={{
                opacity: inView ? '1' : '0',
                transition: '1s',
              }}
            >
              <div className={styles['container-for-image']}>
                <SmartImage path="images/game-design" />
                <article className={styles['number']}>02</article>
              </div>
              <div>
                <h3>Game Design</h3>
              </div>
              <div>
                <h5>Mobile App, Website</h5>
              </div>
              <div>
                <p className={styles['paragraph']}>
                  Lorem ipsum dolor sit amet, consec tet ur adipiscing elit.
                  Accumsan sed faucibu s faucibus augue. Cras ut.
                </p>
              </div>
            </li>
            <li
              style={{
                opacity: inView ? '1' : '0',
                transition: '1.5s',
              }}
            >
              <div className={styles['container-for-image']}>
                <SmartImage path="images/graphic-design" />
                <article className={styles['number']}>03</article>
              </div>
              <div>
                <h3>Graphic Design</h3>
              </div>
              <div>
                <h5>Mobile App, Website</h5>
              </div>
              <div>
                <p className={styles['paragraph']}>
                  Lorem ipsum dolor sit amet, consec tet ur adipiscing elit.
                  Accumsan sed faucibu s faucibus augue. Cras ut.
                </p>
              </div>
            </li>
            <li
              style={{
                opacity: inView ? '1' : '0',
                transition: '2s',
              }}
            >
              <div className={styles['container-for-image']}>
                <SmartImage path="images/web-design" />
                <article className={styles['number']}>04</article>
              </div>
              <div>
                <h3>Web Design</h3>
              </div>
              <div>
                <h5>Mobile App, Website</h5>
              </div>
              <div>
                <p className={styles['paragraph']}>
                  Lorem ipsum dolor sit amet, consec tet ur adipiscing elit.
                  Accumsan sed faucibu s faucibus augue. Cras ut.
                </p>
              </div>
            </li>
            <li
              style={{
                opacity: inView ? '1' : '0',
                transition: '2.5s',
              }}
            >
              <div className={styles['container-for-image']}>
                <SmartImage path="images/app-developmen" />
                <article className={styles['number']}>05</article>
              </div>
              <div>
                <h3>App Development</h3>
              </div>
              <div>
                <h5>Mobile App, Website</h5>
              </div>
              <div>
                <p className={styles['paragraph']}>
                  Lorem ipsum dolor sit amet, consec tet ur adipiscing elit.
                  Accumsan sed faucibu s faucibus augue. Cras ut.
                </p>
              </div>
            </li>
            <li
              style={{
                opacity: inView ? '1' : '0',
                transition: '3s',
              }}
            >
              <div className={styles['container-for-image']}>
                <SmartImage path="images/digital-marketing" />
                <article className={styles['number']}>06</article>
              </div>
              <div>
                <h3>Digital Marketing</h3>
              </div>
              <div>
                <h5>Mobile App, Website</h5>
              </div>
              <div>
                <p>
                  Lorem ipsum dolor sit amet, consec tet ur adipiscing elit.
                  Accumsan sed faucibu s faucibus augue. Cras ut.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </Wrapper>
    </div>
  )
}
