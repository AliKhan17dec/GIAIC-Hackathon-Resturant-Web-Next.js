import React from 'react'
import { FaUserGraduate } from "react-icons/fa";
import { PiCoffee } from "react-icons/pi";
import { PiPerson } from "react-icons/pi";

const Hero00003 = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-36 mt-20">
  <div className="max-w-[350px] text-center">
    <div className="flex items-center justify-center mb-4">
      <FaUserGraduate size={50} />
    </div>
    <div className="text-black text-[24px]">Best Chef</div>
    <div className="text-[#4F4F4F] text-[16px]">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam
      pellentesque bibendum non dui volutpat
    </div>
  </div>
  <div className="max-w-[350px] text-center">
    <div className="flex items-center justify-center mb-4">
      <PiCoffee size={50} />
    </div>
    <div className="text-black text-[24px]">Best Chef</div>
    <div className="text-[#4F4F4F] text-[16px]">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam
      pellentesque bibendum non dui volutpat
    </div>
  </div>
  <div className="max-w-[350px] text-center">
    <div className="flex items-center justify-center mb-4">
      <PiPerson size={50} />
    </div>
    <div className="text-black text-[24px]">Best Chef</div>
    <div className="text-[#4F4F4F] text-[16px]">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam
      pellentesque bibendum non dui volutpat
    </div>
  </div>
</div>


  )
}

export default Hero00003
