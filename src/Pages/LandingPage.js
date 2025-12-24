import React from 'react'
import HeroSection from '../Components/HomePage/HeroSection'
import AboutSection from '../Components/HomePage/AboutSection'
import WhyChooseUs from '../Components/HomePage/WhyChooseUs'
import ProductCategorySection from '../Components/HomePage/ProductCategorySection'
import TestimonialComponent from '../Components/HomePage/Testimonials'
import CTAInquirySection from '../Components/HomePage/InquirySection'
import FarmerUpliftment from '../Components/HomePage/FarmerUpliftment'
import DomesticGlobalMarkets from '../Components/HomePage/DomesticAndGlobalMarkets'
import HomeTextileSection from '../Components/HomePage/TextileDivision'

const LandingPage = () => {
  return (
    <div className=' '>
        <HeroSection />
        <AboutSection />
    
        <WhyChooseUs />
        <FarmerUpliftment />

        <ProductCategorySection />
        <HomeTextileSection />
        <DomesticGlobalMarkets />
<TestimonialComponent />
<CTAInquirySection />
    </div>
  )
}

export default LandingPage