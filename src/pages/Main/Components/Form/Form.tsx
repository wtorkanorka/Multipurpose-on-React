import React from 'react'
import SmartButton from '../../../../components/SmartButton/SmartButton'
import styles from './Form.module.css'
export default function Form() {
  return (
    <>
      <div className={styles['form-container']}>
        <img
          src="/src/assets/images/form-image.svg"
          alt="form-image.svg"
          className={styles['form-image']}
        />
        <h2 className={styles['form-h2']}>
          Send Your
          {'\n'}
          <span>Message To Us</span>
        </h2>
        <form className={styles['input-container']}>
          <div className={styles['inputs']}>
            <input type="text" placeholder="Name" />
            <input type="text" placeholder="Email" />
            <input type="text" placeholder="Mobile No" />
            <input type="text" placeholder="Subject" />
          </div>
          <textarea
            name="Send Massage"
            placeholder="Send Massage"
            className={styles['text-area']}
          />{' '}
          <SmartButton type="submit" style={{ width: '190px' }}>
            Send Massage
          </SmartButton>
        </form>
      </div>{' '}
    </>
  )
}
