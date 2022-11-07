import React from 'react'
import SiteBlocks from '../../components/siteBlocks/SiteBlocks'
import AboutUsHome from './Components/AboutUsHome/AboutUsHome'
import ClientsFeedback from './Components/ClientsFeedback/ClientsFeedback'
import Header from './Components/Header/Header'
import Hero from './Components/Hero/Hero'
import OurBlog from './Components/OurBlog/OurBlog'
import OurExpereince from './Components/OurExpereince/OurExpereince'
import OurWork from './Components/OurWork/OurWork'
import TeamMember from './Components/TeamMember/TeamMember'

export default function HomePage() {
  return (
    <>
      <SiteBlocks />
      <Header />
      <Hero />
      <AboutUsHome />
      <OurExpereince />
      <TeamMember />
      <OurWork />
      <ClientsFeedback />
      <OurBlog />
    </>
  )
}
