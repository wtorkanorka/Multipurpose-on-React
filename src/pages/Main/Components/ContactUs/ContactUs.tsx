import React from 'react'
import Form from '../Form/Form'
import styles from './ContactUs.module.css'
import MapComponent from '../../../../components/Map/MapComponent'
import firstImg from '/src/assets/icons/mail.svg'
import secondImg from '/src/assets/icons/phone-call.svg'
import thirdImg from '/src/assets/icons/map-pin.svg'
import fourthImg from '/src/assets/images/clients-logos-1.svg'
import fifthImg from '/src/assets/images/clients-logos-2.svg'
import sixthImg from '/src/assets/images/clients-logos-3.svg'
import seventhImg from '/src/assets/images/clients-logos-4.svg'
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
                <img src={firstImg} alt="mail" />
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
                <img src={secondImg} alt="phone-call" />
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
                <img src={thirdImg} alt="map-pin" />
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
      </div>
      <Form />
      <MapComponent />
      <ul className={styles['clients-logo']}>
        <li>
          <img src={fourthImg} alt="clients-logos" />
        </li>
        <li>
          <img src={fifthImg} alt="clients-logos" />
        </li>
        <li>
          <img src={sixthImg} alt="clients-logos" />
        </li>
        <li>
          <img src={seventhImg} alt="clients-logos" />
        </li>
      </ul>
    </div>
  )
}
