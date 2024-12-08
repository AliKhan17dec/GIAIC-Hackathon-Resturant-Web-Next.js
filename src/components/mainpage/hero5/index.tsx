import React from 'react'

const Hero5 = () => {
  return (
    <section 
  className="bg-black text-white py-16 px-10 md:px-36 relative bg-cover bg-center"
  style={{
    backgroundImage: "url('/unsplash_bpPTlXWTOvg.png')", // Replace with your image path
  }}
>
  {/* Semi-transparent overlay */}
  <div className="absolute inset-0 bg-black bg-opacity-80"></div>

  {/* Content */}
  <div className="relative flex flex-wrap justify-between items-center space-y-6 md:space-y-0">
    {/* Professional Chefs */}
    <div className="flex flex-col items-center">
      <div className="text-[#FF9F0D]">
        <img src="/logos/Group.png" alt="log" />
      </div>
      <p className="mt-2 text-lg font-bold">Professional Chefs</p>
      <p className="text-2xl font-bold text-white">420</p>
    </div>
    
    {/* Items of Food */}
    <div className="flex flex-col items-center">
      <div className="text-[#FF9F0D]">
        <img src="/logos/Group (1).png" alt="logo" />
      </div>
      <p className="mt-2 text-lg font-bold">Items Of Food</p>
      <p className="text-2xl font-bold text-white">320</p>
    </div>
    
    {/* Years of Experience */}
    <div className="flex flex-col items-center">
      <div className="text-[#FF9F0D]">
      <img src="/logos/Group (3).png" alt="log" />
      </div>
      <p className="mt-2 text-lg font-bold">Years Of Experienced</p>
      <p className="text-2xl font-bold text-white">30+</p>
    </div>
    
    {/* Happy Customers */}
    <div className="flex flex-col items-center">
      <div className="text-[#FF9F0D]">
      <img src="/logos/Group (4).png" alt="log" />
      </div>
      <p className="mt-2 text-lg font-bold">Happy Customers</p>
      <p className="text-2xl font-bold text-white">220</p>
    </div>
  </div>
</section>

  )
}

export default Hero5
