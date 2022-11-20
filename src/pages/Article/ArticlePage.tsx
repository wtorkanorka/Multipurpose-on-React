import React, { useEffect } from 'react'
import { Layout } from '../../components/Layout/Layout'
import useSWR from 'swr'
import { useState } from 'react'
import { ENDPOINTS } from '../../constants/endpoints'
import { useParams } from 'react-router-dom'
import Articles from './Components/Articles/Articles'
export default function ArticlePage() {
  const { id } = useParams()

  return (
    <Layout
      title="35 Stellar Graphic Design Blogs
    to Keep You Educated and Inspired"
      pathTitle="Home - Blog Page - Graphic Design"
    >
      <Articles id={Number(id)} />
    </Layout>
  )
}
