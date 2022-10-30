import React from 'react'
import styles from './Main.module.css'
export default function HomePage() {
  return (
    <div>
      Home page
      <ul className={styles['ul-style']}>
        <li>1</li>
        <li>2</li>
        <li>3</li>
      </ul>
      <ol>
        <li>1</li>
        <li>2</li>
        <li>3</li>
      </ol>
      <div className={styles['test']}>
        <ul>
          <li>
            <nav>
              <ul>
                <li>1</li>
                <li>2</li>
                <li>3</li>
              </ul>
            </nav>
          </li>
          <li>
            <nav>
              <ul>
                <li>1</li>
                <li>2</li>
                <li>3</li>
              </ul>
            </nav>
          </li>
        </ul>
      </div>
    </div>
  )
}
