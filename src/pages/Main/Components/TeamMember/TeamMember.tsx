import React from 'react'
import { Image } from '../../../../components/Image/Image'
import styles from './TeamMember.module.css'
import useSWR from 'swr'
import cx from 'classnames'
import { TeamMembers } from '../../../../Types/Types'
import TeamMemberContent from './TeamMemberContent'
import { ENDPOINTS } from '../../../../constants/endpoints'
import { useInView } from 'react-intersection-observer'
export default function TeamMember() {
  interface Arr {
    list: TeamMembers[]
  }
  const { ref, inView, entry } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  })
  const { data, error } = useSWR<Arr>(ENDPOINTS.TEAM_MEMBER)
  if (error) {
    return <div>ERROR</div>
  }
  return (
    <div className={styles['team-member-container']} ref={ref}>
      <p>Team Member</p>
      <h2 className={styles['h2-style']}>
        We Have
        <br /> <span>Some Awesome</span> People
      </h2>

      <ul
        className={cx(
          styles['profiles'],
          inView ? styles['animated'] : styles['non-animated'],
        )}
      >
        {data?.list.map((i, index: number) => {
          return <TeamMemberContent i={i} key={index} />
        })}
      </ul>
    </div>
  )
}
