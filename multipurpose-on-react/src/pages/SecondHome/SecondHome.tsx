import React from 'react'
import AboutUs from '../../components/AboutUs/AboutUs'
import FooterSecond from '../../components/FooterSecond/FooterSecond'
import HeroSecond from '../../components/HeroSecond/HeroSecond'
import OurBlog from '../../components/OurBlog/OurBlog'
import OurCapabilities from '../../components/OurCapabilities/OurCapabilities'
import OurCaseStudy from '../../components/OurCaseStudy/OurCaseStudy'
import OurServices from '../../components/OurServices/OurServices'
import OurTestimonial from '../../components/OurTestimonial/OurTestimonial'
import SubscribeNewsletter from '../../components/SubscribeNewsletter/SubscribeNewsletter'

export default function SecondHome() {
  return (
    <>
      <HeroSecond />
      <OurServices />
      <AboutUs />
      <OurCaseStudy />
      <OurTestimonial />
      <OurCapabilities />
      <OurBlog />
      <SubscribeNewsletter />
      <FooterSecond />
    </>
  )
}
