import React from 'react'
import TitleBlogHero from '../../components/BlogHero/TitleBlogHero'
import BlogHero from '../../components/BlogHero/TitleBlogHero'
import FooterMain from '../../components/FooterMain/FooterMain'
import Header from '../../components/Header/Header'
import { BlogLayout } from './Components/BlogLayout/BlogLayout'

import Posts from './Components/Posts/Posts'

export default function BlogPage() {
  return (
    <>
      <BlogLayout>
        <Posts />
      </BlogLayout>
    </>
  )
}
