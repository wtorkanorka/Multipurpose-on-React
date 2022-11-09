import React from 'react'
import SiteBlocks from '../../components/siteBlocks/SiteBlocks'
import AboutUsHome from './Components/AboutUsHome/AboutUsHome'
import ClientsFeedback from './Components/ClientsFeedback/ClientsFeedback'
import ContactUs from './Components/ContactUs/ContactUs'
import FooterMain from './Components/FooterMain/FooterMain'
import Header from './Components/Header/Header'
import Hero from './Components/Hero/Hero'
import OurBlog from './Components/OurBlog/OurBlog'
import OurExpereince from './Components/OurExpereince/OurExpereince'
import OurWork from './Components/OurWork/OurWork'
import TeamMember from './Components/TeamMember/TeamMember'

export default function HomePage() {
  return (
    <>
      <SiteBlocks style={{ top: '317px', right: '0', position: 'fixed' }} />
      <Header />
      <Hero />
      <AboutUsHome />
      <OurExpereince />
      <TeamMember />
      <OurWork />
      <ClientsFeedback />
      <OurBlog />
      <ContactUs />
      <FooterMain />
    </>
  )
}
