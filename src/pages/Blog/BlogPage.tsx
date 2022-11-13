import React from 'react'
import FooterMain from '../../components/FooterMain/FooterMain'
import Header from '../../components/Header/Header'
import Container from './Components/Container/Container'
import Posts from './Components/Posts/Posts'
import TitleBlog from './Components/TitleBlog/TitleBlog'

export default function BlogPage() {
  return (
    <>
      <Header />
      <TitleBlog />
      <Container />
      <FooterMain />
    </>
  )
}
