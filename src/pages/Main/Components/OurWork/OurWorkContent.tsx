import React from 'react'
import SmartImage from '../../../../components/SmartImage/SmartImage'
import styles from './OurWork.module.css'
import { useState } from 'react'
import { OurWorkTypes } from '../../../../Types/Types'
export default function OurWorkContent({ i }: any) {
  const [isHovering, setIsHovering] = useState(false)
  const handleMouseOver = () => {
    setIsHovering(true)
  }

  const handleMouseOut = () => {
    setIsHovering(false)
  }
  return (
    <div
      key={i.id}
      className={styles['image-container']}
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
    >
      <SmartImage path={i.cover} />
      <div
        className={styles['hover']}
        style={{ display: isHovering == true ? 'flex' : 'none' }}
      >
        <div className={styles['image-content']}>
          <ul>
            <li>
              <img src="/src/assets/icons/search-line.svg" alt="search" />
            </li>
            <li>
              <h5>Latest work</h5>
            </li>
            <li>
              <h6>{i.type}</h6>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
