import React from 'react'
import SmartButton from '../../../../components/SmartButton/SmartButton'
import styles from './Form.module.css'
import { useForm } from 'react-hook-form'
export default function Form() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()

  //Шириная инпутов не меняется, и вылезает за страницу, как исправить
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
            onSubmit={handleSubmit(data => {
              console.log(data)
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
                  {errors.name && <span>Name is required</span>}
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
                  {errors.email && <span>Email is required</span>}
                </div>
              </div>
              <div className={styles['two-input-container']}>
                <div className={styles['input-with-error']}>
                  <input
                    type="text"
                    placeholder="Mobile No"
                    {...register('mobile', {
                      required: true,
                      pattern:
                        /^\+?(\d{1,3})?[- .]?\(?(?:\d{2,3})\)?[- .]?\d\d\d[- .]?\d\d\d\d$/,
                    })}
                    className={styles['input']}
                  />
                  {errors.mobile && <span>Mobile No is required</span>}
                </div>
                <div className={styles['input-with-error']}>
                  <input
                    type="text"
                    placeholder="Subject"
                    {...register('subject', { required: true })}
                    className={styles['input']}
                  />
                  {errors.subject && <span>Subject is required</span>}
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
              {errors.sendMassage && <span>Send Massage is required</span>}
            </div>
            <SmartButton
              style={{
                maxWidth: '190px',
                textAlign: 'center',
                pointerEvents:
                  errors.mobile &&
                  errors.sendMassage &&
                  errors.subject &&
                  errors.email &&
                  errors.name
                    ? 'none'
                    : 'auto',
              }}
              type="submit"
              disabled={
                errors.mobile &&
                errors.sendMassage &&
                errors.subject &&
                errors.email &&
                errors.name
                  ? true
                  : false
              }
            >
              Send Massage
            </SmartButton>
          </form>
        </div>
      </div>
    </>
  )
}
