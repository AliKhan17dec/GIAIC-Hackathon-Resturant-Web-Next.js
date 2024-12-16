import React from 'react'
import Link from 'next/link';
import { IoMdArrowDropright } from "react-icons/io";

const Hero1 = () => {
  return (
    <section 
  className="bg-black text-white py-16 px-10 md:px-36 relative bg-cover bg-center"
  style={{
    backgroundImage: "url('/unsplash_4ycv3Ky1ZZU.png')", // Replace with your image path
  }}
>
  {/* Semi-transparent overlay */}
  <div className="absolute inset-0  bg-black bg-opacity-5"></div>

  {/* Content */}
  <div>
  <div className="items-center flex justify-center text-[48px] font-extrabold">
    Our Menu
    
  </div>
  <div className='flex justify-center items-center text-[20px] mb-20'>
    <Link href="#"><div className='hover:text-[#FF9F0D] text-white'>Home</div></Link>
    <div><IoMdArrowDropright /></div>
    <div className='text-[#FF9F0D] hover:text-white'>Menu</div>
  </div>
  </div>
</section>
  )
}

export default Hero1
