import React from 'react'
import AboutUsHome from './Components/AboutUsHome/AboutUsHome'
import Header from './Components/Header/Header'
import Hero from './Components/Hero/Hero'
import OurExpereince from './Components/OurExpereince/OurExpereince'

export default function HomePage() {
  return (
    <>
      <Header />
      <Hero />
      <AboutUsHome />
      <OurExpereince />
    </>
  )
}
