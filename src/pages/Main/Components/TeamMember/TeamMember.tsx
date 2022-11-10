import React from 'react'
import SmartImage from '../../../../components/SmartImage/SmartImage'
import styles from './TeamMember.module.css'
import useSWR from 'swr'
import { fetcher } from '../../../../fetcher/fetcher'
import { TeamMembers } from '../../../../Types/Types'
import TeamMemberContent from './TeamMemberContent'
export default function TeamMember() {
  const { data, error } = useSWR<TeamMembers[]>(
    'http://localhost:3004/team_member',
    fetcher,
  )
  console.log(data)

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
