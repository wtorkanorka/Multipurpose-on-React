import { PropsWithChildren } from 'react'
import TitleBlogHero from '../BlogHero/TitleBlogHero'
import FooterMain from '../FooterMain/FooterMain'
import Header from '../Header/Header'
import BlogArticle from '../../pages/Blog/Components/BlogArticle/BlogArticle'

import styles from './Layout.module.css'

interface Props {
  title: string
  pathTitle: string
}
type TypeProps = Props & PropsWithChildren
export function Layout({ children, title, pathTitle }: TypeProps) {
  return (
    <>
      <Header />
      <TitleBlogHero title={title} pathTitle={pathTitle} />
      <div className={styles['container']}>
        {children}
        <BlogArticle />
      </div>
      <FooterMain />
    </>
  )
}
