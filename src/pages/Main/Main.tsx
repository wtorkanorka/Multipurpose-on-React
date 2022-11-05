import React from 'react'
import AboutUsHome from './Components/AboutUsHome/AboutUsHome'
import Header from './Components/Header/Header'
import Hero from './Components/Hero/Hero'
import OurExpereince from './Components/OurExpereince/OurExpereince'
import OurWork from './Components/OurWork/OurWork'
import TeamMember from './Components/TeamMember/TeamMember'

export default function HomePage() {
  return (
    <>
      <Header />
      <Hero />
      <AboutUsHome />
      <OurExpereince />
      <TeamMember />
      <OurWork />
    </>
  )
}
