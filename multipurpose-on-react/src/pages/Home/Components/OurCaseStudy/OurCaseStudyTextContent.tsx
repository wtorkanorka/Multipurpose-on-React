import React from 'react'
import styles from './OurCaseStudy.module.css'
import { useState } from 'react'
import shareBox from '../../../../assets/icons/share-box-line.svg'
import SmartImage from '../../../../components/SmartImage/SmartImage'
export default function OurCaseStudyTextContent({ i }: any) {
   const [visible, setVisible] = useState(false)
   return (
      <li key={i.id} className={styles['li-hover']}>
         <div
            onClick={() => {
               setVisible(!visible)
            }}
         >
            <SmartImage path={`${i.image}`} />
         </div>

         <div
            className={styles['orange-box']}
            style={{ display: visible ? 'flex' : 'none', alignItems: 'center' }}
            onClick={() => {
               setVisible(!visible)
            }}
         >
            <a href={i.link}>
               <img src={shareBox} alt="link" />
            </a>
            <h2>Web Template</h2>
         </div>
      </li>
   )
}
