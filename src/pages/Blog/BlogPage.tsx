import React, { useState } from 'react'
import TitleBlogHero from '../../components/BlogHero/TitleBlogHero'
import BlogHero from '../../components/BlogHero/TitleBlogHero'
import FooterMain from '../../components/FooterMain/FooterMain'
import Header from '../../components/Header/Header'
import { Layout } from '../../components/Layout/Layout'

import Posts from './Components/Posts/Posts'

export default function BlogPage() {
  const [filter, setFilter] = useState('')

  return (
    <>
      <Layout
        filter={filter}
        setFilter={setFilter}
        pathTitle="Home - Blog Page"
        title="Our Blog"
      >
        <Posts filter={filter} setFilter={setFilter} />
      </Layout>
    </>
  )
}
