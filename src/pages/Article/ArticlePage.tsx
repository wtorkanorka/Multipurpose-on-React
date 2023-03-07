import React, { useEffect } from 'react'
import { Layout } from '../../components/Layout/Layout'
import useSWR from 'swr'
import { useState } from 'react'
import { ENDPOINTS } from '../../constants/endpoints'
import { useParams } from 'react-router-dom'
import Articles from './Components/Article/Article'
export default function ArticlePage() {
  const { id } = useParams()

  const { data, error } = useSWR(ENDPOINTS.ARTICLES + `?id_like=${id}`)

  useEffect(() => {
    scrollTo(0, 0)
  }, [])
  if (error) {
    return <div>error</div>
  }
  if (!data) {
    return <div>Loading...</div>
  }

  return (
    <Layout
      title={data.list[0]?.title}
      pathTitle={`Home - Blog Page - ${data.list[0]?.path_title}`}
    >
      <Articles id={Number(id)} />
    </Layout>
  )
}
