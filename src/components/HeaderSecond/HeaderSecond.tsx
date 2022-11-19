import styles from './HeaderSecond.module.css'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useInView } from 'react-intersection-observer'
import Image from '../Image/Image'
export default function HeaderSecond({ backgroundColorProps = 'white' }: any) {
  const [visible, setVisible] = useState(false)
  const { ref, inView, entry } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  })
  return (
    <div ref={ref}>
      <div
        className={styles['header']}
        style={{
          backgroundColor:
            backgroundColorProps !== 'white' ? '#fff7f4' : 'white',
          boxShadow:
            backgroundColorProps == 'white'
              ? '0px 1px 10px rgba(0, 0, 0, 0.1)'
              : 'none',
        }}
      >
        <div className={styles['logo']}>
          <Link to="/">
            <p
              style={{
                opacity: inView ? '1' : '0',
                transition: '1s',
                marginLeft: inView ? '0px' : '-20px',
              }}
            >
              <span>Digi</span>ency
            </p>
          </Link>
        </div>
        <div className={styles['navigation']}>
          <ul
            style={{
              opacity: inView ? '1' : '0',
              transition: '1s',
              marginBottom: inView ? '0px' : '-20px',
            }}
          >
            <li>
              <Link to="/home">Home</Link>
            </li>
            <li>
              <Link to="/about-us">About Us</Link>
            </li>
            <li>
              <Link to="/services">Services</Link>
            </li>
            <li>
              <Link to="/portfolio">Portfolio</Link>
            </li>
            <li>
              <Link to="/blog">Blog</Link>
            </li>
            <li>
              <Link to="/contact-us">Contact Us</Link>
            </li>
          </ul>
          <div className={styles['lets-talk']}>
            <button>Let`s Talk</button>
          </div>
        </div>
      </div>
      <div
        className={styles['header-second']}
        style={{
          backgroundColor: backgroundColorProps,
          opacity: inView ? '1' : '0',
          transition: '1s',
          marginLeft: inView ? '0px' : '-20px',
        }}
      >
        <div className={styles['logo']}>
          <Link to="/1">
            <p>
              <span>Digi</span>ency
            </p>
          </Link>
        </div>
        {backgroundColorProps !== 'white' && (
          <div className={styles['lets-talk']}>
            <button>Let`s Talk</button>
          </div>
        )}
        {backgroundColorProps == 'white' && (
          <div className={styles['sun']}>
            <button>
              <Image path="images/sun" />
            </button>
          </div>
        )}
        <div
          className={styles['navigation']}
          onClick={() => setVisible(!visible)}
        >
          <Image path="images/burger" />
        </div>
      </div>
      {visible && (
        <ul className={styles['nav-ul']}>
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/about-us">About Us</Link>
          </li>
          <li>
            <Link to="/services">Services</Link>
          </li>
          <li>
            <Link to="/portfolio">Portfolio</Link>
          </li>
          <li>
            <Link to="/blog">Blog</Link>
          </li>
          <li>
            <Link to="/contact-us">Contact Us</Link>
          </li>
        </ul>
      )}
    </div>
  )
}
