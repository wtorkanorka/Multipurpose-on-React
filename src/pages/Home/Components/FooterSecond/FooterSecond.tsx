import React from 'react'
import styles from './FooterSecond.module.css'
import cx from 'classnames'
import GoUpButton from '../../../../components/GoUpButton/GoUpButton'
import { useInView } from 'react-intersection-observer'
export default function FooterSecond() {
  const { ref, inView, entry } = useInView({
    threshold: 0.2,
  })

  return (
    <div className={styles['wrapper']} ref={ref}>
      <div className={styles['data-footer']}>
        <div className={cx(styles['container'], styles['logo-footer'])}>
          <h3
            style={{
              color: inView ? '' : 'black',
              transition: '1s',
              marginLeft: inView ? '0px' : '-20px',
            }}
          >
            <span>Digi</span>
            ency
          </h3>
          <p
            style={{
              color: inView ? '' : 'black',
              transition: '1s',
              marginLeft: inView ? '0px' : '-20px',
            }}
          >
            Lorem ipsum dolor sit amet ,<br /> consectetur adipiscing elit.
            Tortor
            <br />
            facilisi quis risus egestas ipsum.
          </p>
        </div>
        <div
          className={styles['container']}
          style={{
            opacity: inView ? '1' : '0',
            transition: '1s',
            marginLeft: inView ? '0px' : '-20px',
          }}
        >
          <h3>Location</h3>
          <p>
            3517 W. Gray St. Utica,
            <br /> Pennsylvania 57867
          </p>
        </div>
        <div className={styles['container']}>
          <h3
            style={{
              opacity: inView ? '1' : '0',
              transition: '1s',
              marginLeft: inView ? '0px' : '-20px',
            }}
          >
            Call Us
          </h3>
          <p
            style={{
              opacity: inView ? '1' : '0',
              transition: '1s',
              marginLeft: inView ? '0px' : '-20px',
            }}
          >
            (252) 555-0126
          </p>
          <p
            style={{
              opacity: inView ? '1' : '0',
              transition: '1s',
              marginLeft: inView ? '0px' : '-20px',
            }}
          >
            info@youremai.com
          </p>
        </div>
        <div className={styles['container']}>
          <h3>Follow Us</h3>
          <div className={styles['container-of-buttons']}>
            <button>
              {/* <img src={facebook} alt="facebook" /> */}
              <svg
                width="11"
                height="20"
                viewBox="0 0 11 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7 11.5H9.5L10.5 7.5H7V5.5C7 4.47 7 3.5 9 3.5H10.5V0.14C10.174 0.0970001 8.943 0 7.643 0C4.928 0 3 1.657 3 4.7V7.5H0V11.5H3V20H7V11.5Z"
                  fill="#373737"
                />
              </svg>
            </button>
            <button>
              {/* ЗАМЕНИЛ НА СВГ ЧТОБЫ МенЯТЬ ЦВЕТ ПРИ КЛИКЕ
               <img src={instagramm} alt="instagramm" />  */}
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 2C14.717 2 15.056 2.01 16.122 2.06C17.187 2.11 17.912 2.277 18.55 2.525C19.21 2.779 19.766 3.123 20.322 3.678C20.8305 4.1779 21.224 4.78259 21.475 5.45C21.722 6.087 21.89 6.813 21.94 7.878C21.987 8.944 22 9.283 22 12C22 14.717 21.99 15.056 21.94 16.122C21.89 17.187 21.722 17.912 21.475 18.55C21.2247 19.2178 20.8311 19.8226 20.322 20.322C19.822 20.8303 19.2173 21.2238 18.55 21.475C17.913 21.722 17.187 21.89 16.122 21.94C15.056 21.987 14.717 22 12 22C9.283 22 8.944 21.99 7.878 21.94C6.813 21.89 6.088 21.722 5.45 21.475C4.78233 21.2245 4.17753 20.8309 3.678 20.322C3.16941 19.8222 2.77593 19.2175 2.525 18.55C2.277 17.913 2.11 17.187 2.06 16.122C2.013 15.056 2 14.717 2 12C2 9.283 2.01 8.944 2.06 7.878C2.11 6.812 2.277 6.088 2.525 5.45C2.77524 4.78218 3.1688 4.17732 3.678 3.678C4.17767 3.16923 4.78243 2.77573 5.45 2.525C6.088 2.277 6.812 2.11 7.878 2.06C8.944 2.013 9.283 2 12 2ZM12 7C10.6739 7 9.40215 7.52678 8.46447 8.46447C7.52678 9.40215 7 10.6739 7 12C7 13.3261 7.52678 14.5979 8.46447 15.5355C9.40215 16.4732 10.6739 17 12 17C13.3261 17 14.5979 16.4732 15.5355 15.5355C16.4732 14.5979 17 13.3261 17 12C17 10.6739 16.4732 9.40215 15.5355 8.46447C14.5979 7.52678 13.3261 7 12 7ZM18.5 6.75C18.5 6.41848 18.3683 6.10054 18.1339 5.86612C17.8995 5.6317 17.5815 5.5 17.25 5.5C16.9185 5.5 16.6005 5.6317 16.3661 5.86612C16.1317 6.10054 16 6.41848 16 6.75C16 7.08152 16.1317 7.39946 16.3661 7.63388C16.6005 7.8683 16.9185 8 17.25 8C17.5815 8 17.8995 7.8683 18.1339 7.63388C18.3683 7.39946 18.5 7.08152 18.5 6.75ZM12 9C12.7956 9 13.5587 9.31607 14.1213 9.87868C14.6839 10.4413 15 11.2044 15 12C15 12.7956 14.6839 13.5587 14.1213 14.1213C13.5587 14.6839 12.7956 15 12 15C11.2044 15 10.4413 14.6839 9.87868 14.1213C9.31607 13.5587 9 12.7956 9 12C9 11.2044 9.31607 10.4413 9.87868 9.87868C10.4413 9.31607 11.2044 9 12 9Z"
                  fill="#373737"
                />
              </svg>
            </button>
            <button>
              {/* <img src={skype} alt="skype" /> */}
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="1"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11.31 18.4C9.98768 18.6066 8.63529 18.4979 7.3629 18.083C6.09051 17.6681 4.93407 16.9586 3.98773 16.0122C3.04138 15.0659 2.33187 13.9095 1.91695 12.6371C1.50203 11.3647 1.39342 10.0123 1.59997 8.69C1.07871 7.69851 0.88823 6.56629 1.05638 5.45882C1.22454 4.35134 1.74251 3.32669 2.53458 2.53461C3.32666 1.74253 4.35132 1.22456 5.45879 1.05641C6.56626 0.888256 7.69848 1.07873 8.68997 1.6C10.0123 1.39345 11.3647 1.50206 12.6371 1.91698C13.9094 2.3319 15.0659 3.04141 16.0122 3.98775C16.9586 4.9341 17.6681 6.09053 18.083 7.36292C18.4979 8.63531 18.6065 9.9877 18.4 11.31C18.9212 12.3015 19.1117 13.4337 18.9436 14.5412C18.7754 15.6487 18.2574 16.6733 17.4654 17.4654C16.6733 18.2575 15.6486 18.7754 14.5412 18.9436C13.4337 19.1117 12.3015 18.9213 11.31 18.4ZM10.052 15.156H10.012C12.884 15.156 14.315 13.77 14.315 11.913C14.315 10.715 13.764 9.442 11.589 8.955L9.60597 8.515C8.85097 8.343 7.98397 8.115 7.98397 7.4C7.98397 6.685 8.60397 6.187 9.70797 6.187C11.938 6.187 11.735 7.715 12.839 7.715C13.415 7.715 13.932 7.373 13.932 6.785C13.932 5.415 11.735 4.385 9.87597 4.385C7.85497 4.385 5.70297 5.244 5.70297 7.529C5.70297 8.627 6.09697 9.799 8.26297 10.342L10.952 11.013C11.768 11.215 11.97 11.672 11.97 12.085C11.97 12.772 11.286 13.443 10.052 13.443C7.63497 13.443 7.97397 11.586 6.67797 11.586C6.09797 11.586 5.67497 11.984 5.67497 12.557C5.67497 13.671 7.02697 15.155 10.052 15.155V15.156Z"
                  fill="#373737"
                />
              </svg>
            </button>
            <button>
              {/* <img src={twitter} alt="twitter" /> */}
              <svg
                width="22"
                height="18"
                viewBox="0 0 22 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M21.162 2.656C20.3986 2.9937 19.589 3.21548 18.76 3.314C19.6337 2.79144 20.2877 1.96902 20.6 1C19.78 1.488 18.881 1.83 17.944 2.015C17.3146 1.34158 16.4804 0.894966 15.5709 0.744588C14.6615 0.594209 13.7279 0.748494 12.9153 1.18346C12.1026 1.61842 11.4564 2.30969 11.0771 3.1498C10.6978 3.9899 10.6067 4.93178 10.818 5.829C9.1551 5.74566 7.52832 5.31353 6.04328 4.56067C4.55823 3.80781 3.24812 2.75105 2.19799 1.459C1.82628 2.09745 1.63095 2.82323 1.63199 3.562C1.63199 5.012 2.36999 6.293 3.49199 7.043C2.828 7.0221 2.17862 6.84278 1.59799 6.52V6.572C1.59819 7.5377 1.93236 8.47362 2.54384 9.22106C3.15532 9.96851 4.00647 10.4815 4.95299 10.673C4.33661 10.84 3.6903 10.8647 3.06299 10.745C3.32986 11.5762 3.85 12.3032 4.55058 12.8241C5.25117 13.345 6.09712 13.6338 6.96999 13.65C6.10247 14.3313 5.10917 14.835 4.04687 15.1322C2.98458 15.4294 1.87412 15.5143 0.778992 15.382C2.69069 16.6114 4.91609 17.2641 7.18899 17.262C14.882 17.262 19.089 10.889 19.089 5.362C19.089 5.182 19.084 5 19.076 4.822C19.8949 4.23017 20.6016 3.49702 21.163 2.657L21.162 2.656Z"
                  fill="#373737"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div className={styles['copyright-container']}>
        <div>
          <div
            className={styles['text-content']}
            style={{
              opacity: inView ? '1' : '0',
              transition: '1s',
              marginLeft: inView ? '0px' : '-20px',
            }}
          >
            <p>©</p>
            <p>Copyright 2021. All Right Reserved By Ojjomedia</p>
          </div>
        </div>
        <GoUpButton />
      </div>
    </div>
  )
}
