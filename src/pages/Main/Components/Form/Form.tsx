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
        <div className={styles['content-container']}>
          <h2 className={styles['form-h2']}>
            Send Your
            {'\n'}
            <span>Message To Us</span>
          </h2>
          <form
            className={styles['input-container']}
            onSubmit={e => e.preventDefault()}
          >
            <div className={styles['inputs']}>
              <div className={styles['two-input-container']}>
                <input
                  type="text"
                  placeholder="Name"
                  className={styles['input']}
                />
                <input
                  type="text"
                  placeholder="Email"
                  className={styles['input']}
                />
              </div>
              <div className={styles['two-input-container']}>
                <input
                  type="text"
                  placeholder="Mobile No"
                  className={styles['input']}
                />
                <input
                  type="text"
                  placeholder="Subject"
                  className={styles['input']}
                />
              </div>
            </div>
            <textarea
              name="Send Massage"
              placeholder="Send Massage"
              className={styles['text-area']}
              rows={1}
              cols={1}
            />
            <SmartButton style={{ maxWidth: '190px', textAlign: 'center' }}>
              Send Massage
            </SmartButton>
          </form>
        </div>
      </div>
    </>
  )
}
