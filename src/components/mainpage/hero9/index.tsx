import React from 'react'

const Hero9 = () => {
  return (
    
    <section
  className="relative bg-cover bg-center bg-no-repeat h-[380px] text-white md:pr-[160px]\"
  style={{
    backgroundImage: "url('/unsplash_E6DsqnZbZ4o.png')", // Add your image URL here
  }}
>
  {/* Overlay for darkening the image */}
  <div className="absolute inset-0 bg-black bg-opacity-50"></div>

  {/* Content Section */}
  <div className="relative z-10 flex flex-col justify-center items-end text-right h-full px-6 md:px-20">
    {/* Subtitle */}
    <p className="uppercase text-[#FF9F0D] tracking-widest text-sm mb-2">
      Restaurant Active Process
    </p>

    {/* Heading */}
    <h1 className="text-2xl md:text-4xl  font-semibold mb-4 leading-tight">
      <span className='text-[#FF9F0D]'>We</span> Document Every Food <br />
      Bean Process until it is Saved
    </h1>

    {/* Subtext */}
    <p className="text-[16px] text-gray-300 mb-6 max-w-[490px]">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam
      pellentesque bibendum non dui volutpat fringilla bibendum.
    </p>

    {/* Buttons */}
    <div className="flex space-x-4 justify-end">
      <button className=" hover:bg-[#FF9F0D] border-[#FF9F0D] rounded-3xl border-[1px] text-white px-6 py-2  font-semibold shadow-lg transition duration-300">
        Read More
      </button>
      <div className='flex justify-center items-center gap-2'>
      <button className="flexitems-center space-x-2 bg-[#FF9F0D] hover:bg-transparent border-[1px] border-[#FF9F0D] text-white px-6 py-2 rounded-full w-[50px] h-[50px] font-semibold shadow-lg transition duration-300 items-center justify-center">
      {/* <svg
            className="w-10 h-10 fill-current text-white "
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M8 5v14l11-7z" />
          </svg> */}
        </button>
        <span>Play Video</span>
          
      </div>
    </div>
  </div>
</section>



  
    
  )
}

export default Hero9
