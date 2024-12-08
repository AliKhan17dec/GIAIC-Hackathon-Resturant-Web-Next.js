import React from 'react'

const Hero2 = () => {
  return (
    <section className="flex flex-col md:flex-row items-center bg-black text-white md:px-36 md:py-16 max-md:px-10 max-md:py-10 md:gap-10 mt-8">
  {/* Left Section */}
  <div className="md:w-1/2 mb-8 md:mb-0">
    <h2 className="text-2xl text-[#FF9F0D] mb-4">about us</h2>
    <h2 className="text-4xl font-bold">
      <span className="text-[#FF9F0D]">We</span> Create the best <br />
      foody product
    </h2>
    <p className="mt-4 text-gray-300">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
      diam pellentesque bibendum non dui volutpat fringilla bibendum.
      Urna, elit augue urna, vitae feugiat pretium donec id elementum.
      Ultrices mattis sed vitae mus risus. Lacus nisi, et ac dapibus sit eu
      velit in consequat.
    </p>
    <ul className="mt-4 space-y-2 leading-[40px]">
      <li className="flex items-center">
        <span className="text-white mr-2">✔</span> Lacus nisi, et ac dapibus sit eu velit in consequat.
      </li>
      <li className="flex items-center">
        <span className="text-white mr-2">✔</span> Quisque diam pellentesque bibendum non dui volutpat fringilla
      </li>
      <li className="flex items-center">
        <span className="text-white mr-2">✔</span> Lorem ipsum dolor sit amet, consectetur adipiscing elit
      </li>
    </ul>
    <button className="mt-6 bg-[#FF9F0D] text-white py-2 px-6 h-[50px] rounded-3xl hover:bg-orange-600">
      Read More
    </button>
  </div>

  {/* Right Section */}
  <div className="md:w-1/2 grid grid-rows-2 grid-cols-2 gap-4">
    {/* Large Image */}
    <img
      src="aboutus/unsplash_fdlZBWIP0aM.png"
      alt="Food Item 1"
      className="col-span-2 row-span-2 rounded-md w-full h-full object-cover"
    />
    {/* Small Images */}
    <img
      src="aboutus/unsplash_jpkfc5_d-DI.png"
      alt="Food Item 2"
      className="rounded-md w-full h-full object-cover"
    />
    <img
      src="aboutus/unsplash_mAQZ3X_8_l0.png"
      alt="Food Item 3"
      className="rounded-md w-full h-full object-cover"
    />
  </div>
</section>


  )
}

export default Hero2
