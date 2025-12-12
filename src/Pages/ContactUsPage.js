import React from 'react'
import CTAInquirySection from '../Components/HomePage/InquirySection'

const ContactUsPage = () => {
  return (
    <div className=' bg-gradient-to-b from-[#fcfefd]  via-[#f5fce8] to-white '>
          <div className="flex items-center gap-3 mb-10  mt-16   xs:mt-28 sm:mt-28 pt-10   justify-center text-center w-full">
        <span className="w-10 h-1.5 bg-lime-500 rounded-full inline-block" />
        <span className="text-lime-900 font-extrabold tracking-widest uppercase text-3xl sm:text-5xl">Contact Us</span>
        <span className="w-10 h-1.5 bg-lime-500 rounded-full inline-block" />
      </div>
        <CTAInquirySection />
    </div>
  )
}

export default ContactUsPage