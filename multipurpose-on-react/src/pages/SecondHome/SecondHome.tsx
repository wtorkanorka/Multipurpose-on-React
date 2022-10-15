import React from 'react'
import AboutUs from '../../components/AboutUs/AboutUs'
import HeroSecond from '../../components/HeroSecond/HeroSecond'
import OurCaseStudy from '../../components/OurCaseStudy/OurCaseStudy'
import OurServices from '../../components/OurServices/OurServices'

export default function SecondHome() {
  return (
    <>
      <HeroSecond />
      <OurServices />
      <AboutUs />
      <OurCaseStudy />
    </>
  )
}
