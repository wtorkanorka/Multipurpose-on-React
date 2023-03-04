import React, { DetailedHTMLProps } from 'react'
import styles from './TeamMember.module.css'
import { useState } from 'react'
import { Image } from '../../../../components/Image/Image'
import SiteBlocks from '../../../../components/siteBlocks/SiteBlocks'
import cx from 'classnames'
type Props = DetailedHTMLProps<
  React.LiHTMLAttributes<HTMLLIElement>,
  HTMLLIElement
>
interface I {
  id: number
  author: string
  position: string
  cover: string
}
interface DataContent {
  i: I
}
export default function TeamMemberContent({ i }: DataContent) {
  const [isHovering, setIsHovering] = useState(false)

  return (
    <li
      className={styles['profile']}
      key={i.id}
      onMouseOver={() => setIsHovering(true)}
      onMouseOut={() => setIsHovering(false)}
    >
      <Image path={i.cover} />
      <h3 className={styles['author']}>{i.author}</h3>
      <p className={styles['position']}>{i.position}</p>
      <div
        className={cx(
          isHovering ? styles['site-blocks'] : styles['not-visible'],
        )}
      >
        <SiteBlocks />
      </div>
    </li>
  )
}
