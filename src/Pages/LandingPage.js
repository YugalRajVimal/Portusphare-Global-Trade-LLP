import React from 'react'
import HeroSection from '../Components/HomePage/HeroSection'
import AboutSection from '../Components/HomePage/AboutSection'
import WhyChooseUs from '../Components/HomePage/WhyChooseUs'
import ProductCategorySection from '../Components/HomePage/ProductCategorySection'
import TestimonialComponent from '../Components/HomePage/Testimonials'
import CTAInquirySection from '../Components/HomePage/InquirySection'

const LandingPage = () => {
  return (
    <div>
        <HeroSection />
        <AboutSection />
        <WhyChooseUs />
        <ProductCategorySection />
<TestimonialComponent />
<CTAInquirySection />
    </div>
  )
}

export default LandingPage