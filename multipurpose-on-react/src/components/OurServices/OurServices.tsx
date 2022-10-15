import React from 'react'
import { TitleOfPage } from '../TItleOfPage/TitleOfPage'
import styles from './OurServices.module.scss'
import ux from '../../assets/images/ux-interface.svg'
import graphicDesign from '../../assets/images/design.svg'
import gameDesign from '../../assets/images/gaming.svg'
import webDesign from '../../assets/images/web-design.svg'
import mobileDeveloper from '../../assets/images/mobile-development.svg'
import digitalMarketing from '../../assets/images/digital-marketing.svg'
export default function OurServices() {
  return (
    <div className={styles['container']}>
      <TitleOfPage position="center">Our Services</TitleOfPage>
      <h2 className={styles['h2']}>What We Do</h2>
      <div className={styles['blocks']}>
        <ul>
          <li>
            <div className={styles['container-for-image']}>
              <img src={ux} alt="ux interface" />
              <article className={styles['number']}>01</article>
            </div>
            <div>
              <h3>UX Design</h3>
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
          <li>
            <div className={styles['container-for-image']}>
              <img src={gameDesign} alt="ux interface" />
              <article className={styles['number']}>02</article>
            </div>
            <div>
              <h3>Game Design</h3>
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
          <li>
            <div className={styles['container-for-image']}>
              <img src={graphicDesign} alt="ux interface" />
              <article className={styles['number']}>03</article>
            </div>
            <div>
              <h3>Graphic Design</h3>
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
          <li>
            <div className={styles['container-for-image']}>
              <img src={webDesign} alt="ux interface" />
              <article className={styles['number']}>04</article>
            </div>
            <div>
              <h3>Web Design</h3>
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
          <li>
            <div className={styles['container-for-image']}>
              <img src={mobileDeveloper} alt="ux interface" />
              <article className={styles['number']}>05</article>
            </div>
            <div>
              <h3>App Development</h3>
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
          <li>
            <div className={styles['container-for-image']}>
              <img src={digitalMarketing} alt="ux interface" />
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
    </div>
  )
}
