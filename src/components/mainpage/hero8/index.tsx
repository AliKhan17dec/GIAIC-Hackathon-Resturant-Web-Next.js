import React from 'react'

const Header8 = () => {
  return (
    <section className="bg-black text-white py-16">
  <div className="container mx-auto">
    {/* Section Heading */}
    <div className="text-center mb-8">
      <h2 className="text-orange-400 font-bold text-sm tracking-widest uppercase mb-2">
        Testimonials
      </h2>
      <h1 className="text-4xl font-bold">What our client are saying</h1>
    </div>

    {/* Testimonial Card */}
    <div className="max-w-3xl h-full mx-auto bg-white text-black shadow-lg  mt-24 relative overflow-visible">
      {/* Profile Image */}
      <div className="absolute -top-12 left-1/2 transform -translate-x-1/2">
        <img
          src="/Ellipse 6.png" // Replace with the actual image path
          alt="Client"
          className="w-24 h-24 rounded-full shadow-md"
        />
      </div>

      {/* Testimonial Content */}
      <div className="mt-8 text-center">
        <p className="text-yellow-500 text-5xl font-bold">99</p>
        <p className="mt-4 text-gray-600 text-lg leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam
          pellentesque bibendum non dui volutpat fringilla bibendum. Ut vitae
          feugiat pretium donec id elementum.
        </p>

        {/* Rating */}
        <div className="flex justify-center mt-6">
          <span className="text-yellow-500 text-2xl">★ ★ ★ ★ ★</span>
        </div>

        {/* Client Name and Title */}
        <div className="mt-4">
          <h3 className="font-bold text-xl">Alamin Hasan</h3>
          <p className="text-gray-500">Food Specialist</p>
        </div>
      </div>

      {/* Carousel Indicators */}
      <div className="flex justify-center mt-8">
        <div className="h-2 w-2 bg-orange-500 rounded-full mx-1"></div>
        <div className="h-2 w-2 bg-gray-300 rounded-full mx-1"></div>
        <div className="h-2 w-2 bg-gray-300 rounded-full mx-1"></div>
      </div>
    </div>
  </div>
</section>


  )
}

export default Header8
