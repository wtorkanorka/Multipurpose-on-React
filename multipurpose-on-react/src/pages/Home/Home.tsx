import React from 'react'
import AboutUs from './Components/AboutUs/AboutUs'
import FooterSecond from './Components/FooterSecond/FooterSecond'
import HeroSecond from './Components/HeroSecond/HeroSecond'
import OurBlog from './Components/OurBlog/OurBlog'
import OurCapabilities from './Components/OurCapabilities/OurCapabilities'
import OurCaseStudy from './Components/OurCaseStudy/OurCaseStudy'
import OurServices from './Components/OurServices/OurServices'
import OurTestimonial from './Components/OurTestimonial/OurTestimonial'
import SubscribeNewsletter from './Components/SubscribeNewsletter/SubscribeNewsletter'

export default function SecondHome() {
  return (
    <>
      <HeroSecond />
      <OurServices />
      <AboutUs />
      {/* тут картинки с сервера приходят, как их через picture передавать */}
      <OurCaseStudy />
      <OurTestimonial />
      <OurCapabilities />
      <OurBlog />
      <SubscribeNewsletter />
      <FooterSecond />
    </>
  )
}
