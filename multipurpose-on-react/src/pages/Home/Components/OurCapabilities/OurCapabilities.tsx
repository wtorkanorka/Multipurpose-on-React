import React from 'react'
import { Wrapper } from '../../../../components/Wrapper/Wrapper'
import styles from './OurCapabilities.module.css'
import analysis from '../../../../assets/icons/analysis.svg'
import man from '../../../../assets/icons/man.svg'
import target from '../../../../assets/icons/target.svg'
import dataAnalytics from '../../../../assets/icons/data-analytics.svg'
import image from '../../../../assets/images/our-capabilites-image.svg'
import { TitleOfPage } from '../TItleOfPage/TitleOfPage'
import SmartImage from '../../../../components/SmartImage/SmartImage'
export default function OurCapabilities() {
   return (
      <Wrapper>
         <div className={styles['block']}>
            <div className={styles['conainer-of-content']}>
               <div className={styles['title-pc']}>
                  <TitleOfPage>Our Capabilities</TitleOfPage>
               </div>
               <div className={styles['title-mobile']}>
                  <TitleOfPage position="center">Our Capabilities</TitleOfPage>
               </div>
               <h2 className={styles['h2-style']}>
                  Forward Thinking Team Of Designers & Developers
               </h2>
               <p className={styles['p-style']}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Cursus ut nisi, amet rhoncus volutpat neque. Ipsum in aliquam
                  eget vitae purus felis eget massa felis. Eu mattis in
                  malesuada facilisi proin vel.
               </p>
               <ul className={styles['ul-styles']}>
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
               />
            </div>
         </div>
         <div className={styles['performance']}>
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
   )
}
