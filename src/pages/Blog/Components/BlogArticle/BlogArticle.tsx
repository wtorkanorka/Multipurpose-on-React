import React, { useContext, useRef } from 'react'
import styles from './BlogArticle.module.css'
import cx from 'classnames'
import { Image } from '../../../../components/Image/Image'
import { useState } from 'react'
import { ThemeContext } from '../../../../ThemeContext'

export default function BlogArticle() {
  const { toggleTags } = useContext(ThemeContext)
  const { toggleSearch } = useContext(ThemeContext)
  const input = useRef<HTMLInputElement>(null)

  return (
    <article className={styles['container']}>
      <div className={cx(styles['form-container'])}>
        <form
          className={styles['form']}
          onSubmit={e => {
            e.preventDefault()
            toggleSearch(input.current!.value)
          }}
        >
          <input
            type="text"
            name="name"
            placeholder="Search here..."
            ref={input}
          />
          <input type="submit" value="" />
        </form>
      </div>
      <div className={cx(styles['article-container'])}>
        <h4>Letest Post</h4>
        <div className={styles['article-blocks']}>
          <div className={styles['article-block']}>
            <Image path="images/latest-post-image-1" />
            <p>Minimal Post With A Preview Image</p>
          </div>
          <div className={styles['article-block']}>
            <Image path="images/latest-post-image-2" />
            <p>Good Design Makes Me Happy</p>
          </div>
          <div className={styles['article-block']}>
            <Image path="images/latest-post-image-3" />
            <p>Best 27 Design Blogs for 2021</p>
          </div>
          <div className={styles['article-block']}>
            <Image path="images/latest-post-image-4" />
            <p>Creative Ways To Use Infographics For Your Business</p>
          </div>
          <div className={styles['article-block']}>
            <Image path="images/latest-post-image-5" />
            <p>Tumblr Banner Templates : Tips To Get Better Engagement</p>
          </div>
        </div>
      </div>
      <div className={cx(styles['article-container'])}>
        <h4>Categories</h4>
        <ul className={styles['ul']}>
          <li>
            <p>Business</p>
            <div className={styles['square']}>05</div>
          </li>
          <li>
            <p>Introductions</p>
            <div className={styles['square']}>15</div>
          </li>
          <li>
            <p>Design Blog 65</p>
            <div className={styles['square']}>65</div>
          </li>
          <li>
            <p>UI/UX Design</p>
            <div className={styles['square']}>08</div>
          </li>
          <li>
            <p>App Development</p>
            <div className={styles['square']}>16</div>
          </li>
        </ul>
      </div>
      <div className={cx(styles['article-container'])}>
        <h4>Tags</h4>
        <ul className={styles['tags-ul']}>
          <li
            onClick={() => {
              toggleTags('')
            }}
          >
            reset
          </li>
          <li
            onClick={() => {
              toggleTags('Business')
            }}
          >
            Business
          </li>
          <li
            onClick={() => {
              toggleTags('Graphic Design')
            }}
          >
            Graphic Design
          </li>
          <li
            onClick={() => {
              toggleTags('Technology')
            }}
          >
            Technology
          </li>
          <li
            onClick={() => {
              toggleTags('Business Idea')
            }}
          >
            Business Idea
          </li>
          <li
            onClick={() => {
              toggleTags('App Development')
            }}
          >
            App Development
          </li>
          <li
            onClick={() => {
              toggleTags('Website Design')
            }}
          >
            Website Design
          </li>
        </ul>
      </div>
    </article>
  )
}
