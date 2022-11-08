import React from 'react'
import Form from '../Form/Form'

import styles from './ContactUs.module.css'
export default function ContactUs() {
  return (
    <div className={styles['contact-us-container']}>
      <div className={styles['title-container']}>
        <p>Contact Us</p>
        <h2>
          Feel {'\n'}
          <span>Free to Contact</span>
          {'\n'} With Us
        </h2>
      </div>
      <div className={styles['ul-container']}>
        <ul className={styles['blocks-container']}>
          <li className={styles['block']}>
            <div className={styles['icon-container']}>
              <div className={styles['icon']}>
                <img src="/src/assets/icons/mail.svg" alt="mail" />
              </div>
              <div className={styles['icon-title-container']}>
                <p className={styles['title-block']}>Drop a line</p>
                <p className={styles['description-block']}>Mail Us</p>
              </div>
            </div>
            <div className={styles['emails']}>
              <p>Support87@gmial.com</p>
              <p>ijkuiu874@gmial.com</p>
            </div>
          </li>
          <li className={styles['block']}>
            <div className={styles['icon-container']}>
              <div className={styles['icon']}>
                <img src="/src/assets/icons/phone-call.svg" alt="phone-call" />
              </div>
              <div className={styles['icon-title-container']}>
                <p className={styles['title-block']}>24/7 Service</p>
                <p className={styles['description-block']}>Call Us</p>
              </div>
            </div>
            <div className={styles['emails']}>
              <p>
                +880 265 98745 <span>(Toll free)</span>
              </p>
              <p>+895 855 85589</p>
            </div>
          </li>
          <li className={styles['block']}>
            <div className={styles['icon-container']}>
              <div className={styles['icon']}>
                <img src="/src/assets/icons/map-pin.svg" alt="map-pin" />
              </div>
              <div className={styles['icon-title-container']}>
                <p className={styles['title-block']}>Location</p>
                <p className={styles['description-block']}>Visit Us</p>
              </div>
            </div>
            <div className={styles['emails']}>
              <p>
                158 ralegih sit,
                <br /> houston, yk 5896,uk
              </p>
            </div>
          </li>
        </ul>
      </div>{' '}
      <Form />
    </div>
  )
}
