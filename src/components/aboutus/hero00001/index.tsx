import React from "react";
import { FaPlay } from "react-icons/fa";

const Hero00001 = () => {
  return (
    <div className="container mx-auto px-4 py-12 flex flex-col md:flex-row items-center gap-8">
      {/* Left Side: Images */}
      <div className="flex md:w-1/2 gap-4">
        {/* Left: Large Image */}
        <div className="w-2/3">
          <img
            src="unsplash_lP5MCM6nZ5A (1).png" // Replace with actual taco image
            alt="Tacos"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>

        {/* Right: Two Stacked Images */}
        <div className="flex flex-col gap-4 w-1/3 pt-10">
          <img
            src="unsplash_CLMpC9UhyTo.png" // Replace with actual fried chicken image
            alt="Fried Chicken"
            className="w-full h-[48%] object-cover rounded-lg"
          />
          <img
            src="unsplash_ZuIDLSz3XLg.png" // Replace with actual salad image
            alt="Salad"
            className="w-full h-[48%] object-cover rounded-lg"
          />
        </div>
      </div>

      {/* Right Side: Content */}
      <div className="md:w-1/2">
        <p className="text-[#FF9F0D] font-medium mb-2">About us</p>
        <h2 className="text-4xl font-bold mb-4 leading-tight">
          Food is an important part Of a balanced Diet
        </h2>
        <p className="text-gray-600 mb-6 leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam
          pellentesque bibendum non dui volutpat fringilla bibendum. Nulla ut
          tristique libero.
        </p>
        <div className="flex items-center gap-4">
          <button className="bg-[#FF9F0D] text-white px-6 py-2 rounded-lg hover:bg-orange-600 transition duration-300 h-[50px]">
            Show more
          </button>
          <button className="flex items-center w-[50px] h-[50px] bg-[#FF9F0D] rounded-full hover:bg-orange-600 gap-2 justify-center">
            <FaPlay className="text-xl text-white" />
            
          </button>
          <span>Watch video</span>
        </div>
      </div>
    </div>
  );
};

export default Hero00001;
