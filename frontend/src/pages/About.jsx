import React from 'react'
import { assets } from '../assets/assets'

const About = () => {
  return (
    <div>
      <div className=' text-center text-2xl pt-10 text-gray-500'>
        <p>ABOUT <span className='text-gray-700 font-medium '>US</span></p>
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-12'>
        <img className='w-full md:max-w-[360px]' src={assets.about_image} alt="" />
        <div className='flex flex-col justify-center gap-6 w-2/4 text-sm text-gray-600'>
          <p>We believe in treating our patients with the same care and respect we would offer our own families. Our clinic is designed to provide a welcoming and comfortable environment for patients of all ages.</p>
          <p>Our team specializes in family medicine, preventative care, and chronic disease management. Whether you need an annual physical, immunizations, or treatment for long-term conditions, we are here to support your health journey.</p>
          <b className='text-gray-800'>Our Vision</b>
          <p>Our vision at prescripto is to be a cornerstone of health and well-being in our community, ensuring that everyone, regardless of background, has access to compassionate, affordable, and high-quality healthcare.</p>
        </div>
      </div>

      <div className='text-xl my-4'>
        <p>WHY <span className='text-gray-700 font-semibold'>CHOOSE US</span></p>
      </div>

      <div className='flex flex-col md:flex-row mb-20'>

        <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer '>
          <b>Efficiency:</b>
          <p>To build a healthcare platform that optimizes efficiency in connecting patients with medical professionals, ensuring swift and seamless access to care.</p>
        </div>

        <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer '>
          <b>Convenience:</b>
          <p>We prioritize user-friendly design and 24/7 access to ensure healthcare is always within reach.</p>
        </div>

        <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer '>
          <b>Personalization:</b>
          <p>provide a platform that understands and adapts to each patient's unique healthcare journey, offering personalized appointment recommendations and healthcare solutions.</p>
        </div>

      </div>
    </div>
  )
}

export default About