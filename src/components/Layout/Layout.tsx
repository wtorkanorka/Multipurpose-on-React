import React, {
  DetailedHTMLProps,
  HTMLAttributes,
  PropsWithChildren,
  ReactNode,
  useState,
} from 'react'
import TitleBlogHero from '../BlogHero/TitleBlogHero'
import FooterMain from '../FooterMain/FooterMain'
import Header from '../Header/Header'
import BlogArticle from '../../pages/Blog/Components/BlogArticle/BlogArticle'
import Posts from '../../pages/Blog/Components/Posts/Posts'
import styles from './Layout.module.css'

interface Props {
  setFilter(value: string): void
  title: string
  pathTitle: string
  filter: string
}
type TypeProps = Props & PropsWithChildren
export function Layout({ children, setFilter, title, pathTitle }: TypeProps) {
  return (
    <>
      <Header />
      <TitleBlogHero title={title} pathTitle={pathTitle} />
      <div className={styles['container']}>
        {children}
        <BlogArticle setFilter={setFilter} />
      </div>
      <FooterMain />
    </>
  )
}
