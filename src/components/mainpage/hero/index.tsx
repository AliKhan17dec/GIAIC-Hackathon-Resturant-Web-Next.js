import React from 'react'
import Image from 'next/image'
import { FaFacebookF, FaTwitter, FaPinterest } from "react-icons/fa";

const Hero1 = () => {
  return (
    
    <section className="relative  text-white">
    <div className="container mx-auto flex flex-col md:flex-row relative">
      {/* Left Content */}
      <div className="flex-1 text-center md:text-left relative">
        {/* Vertical Line with Icons */}
        <div className="absolute left-1/2 transform -translate-x-1/2 md:left-0 md:ml-[40px] md:translate-x-0 hidden md:flex flex-col items-center gap-10">
          <div className="h-[135px] w-px bg-white"></div>
          <div className="flex flex-col items-center gap-4">
            <FaFacebookF className="text-white hover:text-[#FF9F0D]" />
            <FaTwitter className="text-white hover:text-[#FF9F0D]" />
            <FaPinterest className="text-white hover:text-[#FF9F0D]" />
          </div>
          <div className="h-[135px] w-px bg-white"></div>
        </div>
  
        {/* Text Content */}
        <div className="mx-auto px-6 md:ml-[90px] w-full md:w-[472px] mt-8 md:mt-[90px]">
          <p className="text-[#FF9F0D] font-normal text-center md:text-left text-lg">
            Its Quick & Amusing!
          </p>
          <h1 className="text-3xl md:text-[50px] font-bold leading-snug mb-4 text-center md:text-left">
            <span className="text-[#FF9F0D]">Th</span>e Art of Speed <br />
            <span>Food Quality</span>
          </h1>
          <p className="text-white text-sm md:text-[14px] mb-6 text-center md:text-left">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius sed
            pharetra dictum neque massa congue.
          </p>
          <div className="text-center md:text-left">
            <button className="bg-[#FF9F0D] text-white px-6 py-3 rounded-full hover:bg-orange-600">
              See Menu
            </button>
          </div>
        </div>
      </div>
  
      {/* Right Image */}
      <div className="flex-1 relative mt-8 md:mt-0">
        <img
          src="/Image.png"
          alt="Delicious food"
          className="w-full mt-12"
        />
      </div>
    </div>
  </section>
  
  )
}

export default Hero1
