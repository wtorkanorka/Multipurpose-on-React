import React from 'react'
import BlogHero from '../../components/BlogHero/BlogHero'
import FooterMain from '../../components/FooterMain/FooterMain'
import Header from '../../components/Header/Header'

import Posts from './Components/Posts/Posts'

export default function BlogPage() {
  return (
    <>
      <Header />
      <BlogHero title="Our Blog" path="Home - Blog Page" />
      <Posts />
      <FooterMain />
    </>
  )
}
