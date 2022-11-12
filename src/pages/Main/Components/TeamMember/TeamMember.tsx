import React from 'react'
import SmartImage from '../../../../components/Image/Image'
import styles from './TeamMember.module.css'
import useSWR from 'swr'

import { TeamMembers } from '../../../../Types/Types'
import TeamMemberContent from './TeamMemberContent'
import { HOST, ENDPOINTS } from '../../../../constants/endpoints'
export default function TeamMember() {
  const { data, error } = useSWR<TeamMembers[]>(HOST + ENDPOINTS.TEAM_MEMBER)
  if (error) {
    return <div>ERROR</div>
  }
  return (
    <div className={styles['team-member-container']}>
      <p>Team Member</p>
      <h2 className={styles['h2-style']}>
        We Have
        <br /> <span>Some Awesome</span> People
      </h2>

      <ul className={styles['profiles']}>
        {data?.map((i, index: number) => {
          return <TeamMemberContent i={i} key={index} />
        })}
      </ul>
    </div>
  )
}
