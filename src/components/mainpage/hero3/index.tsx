import React from 'react'

const Hero3 = () => {
  return (
    <section className="bg-black text-white py-12 md:px-36 md:py-16 max-md:px-10 max-md:py-10">
  <div className="container mx-auto">
    {/* Section Heading */}
    <div className="text-center mb-8">
      <h2 className="text-orange-400 font-bold text-sm tracking-widest uppercase mb-2">
        Food Category
      </h2>
      <h1 className="text-4xl font-bold">Choose Food Item</h1>
    </div>

    {/* Cards Grid */}
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
      {/* Card 1 */}
      <div className="relative group rounded-lg overflow-hidden shadow-lg bg-white">
        <img
          src="/foodcatogary/unsplash_-lHZUkiWM74.png"
          alt="Fast Food Dish"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-4 left-4 bg-orange-500 text-xs text-white py-1 px-3 rounded">
          Save 30%
        </div>
    
      </div>

      {/* Card 2 */}
      <div className="relative group rounded-lg overflow-hidden shadow-lg">
        <img
          src="/foodcatogary/unsplash_dphM2U1xq0U.png"
          alt="Burger"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        
      </div>

      {/* Card 3 */}
      <div className="relative group rounded-lg overflow-hidden shadow-lg">
        <img
          src="/foodcatogary/unsplash_MRHyv-hHxgk.png"
          alt="Salad"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        
      </div>

      {/* Card 4 */}
      <div className="relative group rounded-lg overflow-hidden shadow-lg ">
        <img
          src="/foodcatogary/unsplash_q54Oxq44MZs.png"
          alt="Dessert"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        
      </div>
    </div>
  </div>
</section>

  )
}

export default Hero3
