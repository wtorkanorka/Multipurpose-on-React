import React from 'react'
import styles from './OurCaseStudy.module.css'
import { useState, useEffect } from 'react'
import shareBox from '../../../../assets/icons/share-box-line.svg'
import { Image } from '../../../../components/Image/Image'
import { useInView } from 'react-intersection-observer'
export default function OurCaseStudyTextContent({ i, filter }: any) {
  const [visible, setVisible] = useState(false)

  const { ref, inView, entry } = useInView({
    threshold: 0.5,
  })
  const [isHovering, setIsHovering] = useState(false)

  return (
    <li
      key={i.id}
      className={styles['li-hover']}
      ref={ref}
      onMouseOver={() => setIsHovering(true)}
      onMouseOut={() => setIsHovering(false)}
    >
      <div
        onClick={() => {
          setVisible(!visible)
        }}
        style={{
          opacity: inView ? '1' : '0',
          transition: `${i.id / (i.id + 1 * 2)}s`,
        }}
      >
        <Image path={`${i.image}`} />
      </div>

      {isHovering && (
        <div className={styles['orange-box']}>
          <a href={i.link}>
            <img src={shareBox} alt="link" />
          </a>
          <h2>{i.title}</h2>
        </div>
      )}
    </li>
  )
}
