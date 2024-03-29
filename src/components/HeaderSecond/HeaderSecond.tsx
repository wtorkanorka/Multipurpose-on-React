import styles from './HeaderSecond.module.css'
import { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { useInView } from 'react-intersection-observer'
import { Image } from '../Image/Image'
import cx from 'classnames'
import { SwitchThemeButton } from '../SwitchThemeButton/SwitchThemeButton'
import { ThemeContext } from '../../ThemeContext'
export default function HeaderSecond({ backgroundColorProps = 'white' }: any) {
  const [visible, setVisible] = useState(false)
  const { stateInvertColor } = useContext(ThemeContext)
  return (
    <div>
      <div
        className={styles['header']}
        style={{
          boxShadow:
            backgroundColorProps == 'white'
              ? '0px 1px 10px rgba(0, 0, 0, 0.1)'
              : 'none',
        }}
      >
        <div className={styles['logo']}>
          <Link to="/">
            <p>
              <span>Digi</span>ency
            </p>
          </Link>
        </div>
        <div className={styles['navigation']}>
          <ul>
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
          </div>{' '}
        </div>{' '}
      </div>
      <div
        className={styles['header-second']}
        style={{
          backgroundColor: backgroundColorProps,
        }}
      >
        <div className={styles['logo']}>
          <Link to="/">
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
          <div style={{ filter: `invert(${stateInvertColor})` }}>
            <Image path="images/burger" />
          </div>
        </div>
      </div>

      <ul
        className={cx(
          visible ? styles['animated'] : styles['visible'],
          styles['nav-ul'],
        )}
      >
        <li>
          <SwitchThemeButton />
        </li>
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
    </div>
  )
}
