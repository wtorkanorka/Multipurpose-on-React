import React, {
  DetailedHTMLProps,
  HTMLAttributes,
  PropsWithChildren,
  ReactNode,
  useState,
} from 'react'
import TitleBlogHero from '../../../../components/BlogHero/TitleBlogHero'
import FooterMain from '../../../../components/FooterMain/FooterMain'
import Header from '../../../../components/Header/Header'
import BlogArticle from '../BlogArticle/BlogArticle'
import Posts from '../Posts/Posts'
import styles from './BlogLayout.module.css'

export function BlogLayout() {
  const [filter, setFilter] = useState('')
  return (
    <>
      <Header />
      <TitleBlogHero title="Our Blog" path="Home - Blog Page" />
      <div className={styles['container']}>
        <Posts filter={filter} setFilter={setFilter} />
        <BlogArticle setFilter={setFilter} />
      </div>
      <FooterMain />
    </>
  )
}
