import React from 'react'

import styles from './Form.module.css'
import { useForm } from 'react-hook-form'
import ReactInputMask from 'react-input-mask'
import { Button } from '../../../../components/Button/Button'
import firstImg from '/src/assets/images/form-image.svg'
export default function Form() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()

  return (
    <>
      <div className={styles['form-container']}>
        <img
          src={firstImg}
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
            onSubmit={handleSubmit(data => {
              data
            })}
          >
            <div className={styles['inputs']}>
              <div className={styles['two-input-container']}>
                <div className={styles['input-with-error']}>
                  <input
                    type="text"
                    placeholder="Name"
                    {...register('name', {
                      required: true,
                      pattern: /^[а-яА-ЯёЁa-zA-Z]/,
                    })}
                    className={styles['input']}
                  />
                  <div className={styles['container-of-incorrect']}>
                    {errors.name && (
                      <p className={styles['incorrect']}>Name is required</p>
                    )}
                  </div>
                </div>
                <div className={styles['input-with-error']}>
                  <input
                    type="text"
                    placeholder="Email"
                    {...register('email', {
                      required: true,
                      minLength: 5,
                      pattern: /^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i,
                    })}
                    className={styles['input']}
                  />
                  <div className={styles['container-of-incorrect']}>
                    {errors.email && (
                      <p className={styles['incorrect']}>Email is required</p>
                    )}
                  </div>
                </div>
              </div>
              <div className={styles['two-input-container']}>
                <div className={styles['input-with-error']}>
                  <input
                    type="tel"
                    placeholder="Mobile No"
                    {...register('mobile', {
                      required: true,
                      pattern:
                        /^\+?(\d{1,3})?[- .]?\(?(?:\d{2,3})\)?[- .]?\d\d\d[- .]?\d\d\d\d$/,
                    })}
                    className={styles['input']}
                  />

                  <div className={styles['container-of-incorrect']}>
                    {errors.mobile && (
                      <p className={styles['incorrect']}>
                        Mobile No is required
                      </p>
                    )}
                  </div>
                </div>
                <div className={styles['input-with-error']}>
                  <input
                    type="text"
                    placeholder="Subject"
                    {...register('subject', { required: true })}
                    className={styles['input']}
                  />
                  <div className={styles['container-of-incorrect']}>
                    {errors.subject && (
                      <p className={styles['incorrect']}>Subject is required</p>
                    )}
                  </div>
                </div>
              </div>
            </div>
            <div className={styles['text-area-container']}>
              <textarea
                {...register('sendMassage', { required: true })}
                placeholder="Send Massage"
                className={styles['text-area']}
                rows={1}
                cols={10}
              />
              <div className={styles['container-of-incorrect']}>
                {errors.sendMassage && (
                  <p className={styles['incorrect']}>
                    Send Massage is required
                  </p>
                )}
              </div>
            </div>
            <Button
              type="submit"
              style={styles['smart-button']}
              disabled={Object.keys(errors).length > 0}
            >
              Send Massage
            </Button>
          </form>
        </div>
      </div>
    </>
  )
}
