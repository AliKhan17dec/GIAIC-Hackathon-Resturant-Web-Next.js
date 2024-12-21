import React from 'react'
import Image from 'next/image'

const Hero00002 = () => {
  return (
    <div>
      <div className='text-center '>
      <div className='text-black font-bold lg:text-[48px] md:text-[35px] max-md:text-[35px] '>
        Why to choose Us
      </div>
      <div className='text-[#4F4F4F] tex-[16px] '>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat fringilla bibendum. 
      </div>
      </div>
      <div className='flex justify-center mt-10'>
      <img
            src="unsplash_3iexvMShGfQ.png" // Replace with actual salad image
            alt="Salad"
            className="items-center"
          />
      </div>
    </div>
  )
}

export default Hero00002
