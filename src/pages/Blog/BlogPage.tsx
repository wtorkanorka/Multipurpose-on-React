import React from 'react'
import TitleBlogHero from '../../components/BlogHero/TitleBlogHero'
import BlogHero from '../../components/BlogHero/TitleBlogHero'
import FooterMain from '../../components/FooterMain/FooterMain'
import Header from '../../components/Header/Header'

import Posts from './Components/Posts/Posts'

export default function BlogPage() {
  return (
    <>
      <Header />
      <TitleBlogHero title="Our Blog" path="Home - Blog Page" />
      <Posts />
      <FooterMain />
    </>
  )
}
