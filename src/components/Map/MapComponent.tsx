import React from 'react'
import styles from './MapComponent.module.css'
import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps'
export default function MapComponent() {
  const defaultState = {
    center: [38.7167, 9.13333],
    zoom: 5,
  }

  return (
    <YMaps>
      <Map defaultState={defaultState} className={styles['map']}>
        <Placemark geometry={[55.684758, 37.738521]} />
      </Map>
    </YMaps>
  )
}
