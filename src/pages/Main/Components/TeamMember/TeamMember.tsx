import React from 'react'
import SmartImage from '../../../../components/SmartImage/SmartImage'
import styles from './TeamMember.module.css'
import useSWR from 'swr'
import { fetcher } from '../../../../fetcher/fetcher'
import { TeamMembers } from '../../../../Types/Types'
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
      {/* <div className={styles['prfiles-container']}> */}
      <ul className={styles['profiles']}>
        {data?.map(i => {
          return (
            <li className={styles['profile']} key={i.id}>
              <SmartImage path={i.cover} />
              <h3 className={styles['author']}>{i.author}</h3>
              <p className={styles['position']}>{i.position}</p>
            </li>
          )
        })}
      </ul>
      {/* </div> */}
    </div>
  )
}
