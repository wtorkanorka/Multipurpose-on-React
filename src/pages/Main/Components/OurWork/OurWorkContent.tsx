import React from 'react'
import { Image } from '../../../../components/Image/Image'
import styles from './OurWork.module.css'
import { useState } from 'react'

export default function OurWorkContent({ i }: any) {
  const [isHovering, setIsHovering] = useState(false)

  return (
    <div
      key={i.id}
      className={styles['image-container']}
      onMouseOver={() => setIsHovering(true)}
      onMouseOut={() => setIsHovering(false)}
    >
      <Image path={i.cover} />
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
              <h6>{i.title}</h6>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
