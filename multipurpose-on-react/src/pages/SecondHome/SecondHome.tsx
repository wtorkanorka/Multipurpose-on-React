import React from 'react'
import AboutUs from '../../components/AboutUs/AboutUs'
import HeroSecond from '../../components/HeroSecond/HeroSecond'
import OurBlog from '../../components/OurBlog/OurBlog'
import OurCaseStudy from '../../components/OurCaseStudy/OurCaseStudy'
import OurServices from '../../components/OurServices/OurServices'
import OurTestimonial from '../../components/OurTestimonial/OurTestimonial'

export default function SecondHome() {
  return (
    <>
      <HeroSecond />
      <OurServices />
      <AboutUs />
      <OurCaseStudy />
      <OurTestimonial />
      <OurBlog />
    </>
  )
}
