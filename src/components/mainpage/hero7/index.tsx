import React from 'react'
import Link from 'next/link'

const Hero7 = () => {
  return (
    <section className="bg-black text-white py-16 px-6 md:px-24">
  {/* Header */}
  <div className="text-center mb-12">
    <h3 className="text-#FF9F0D font-serif tracking-wide uppercase">Chefs</h3>
    <h2 className="text-4xl font-bold mt-2"><span className='text-[#FF9F0D]'>Me</span>et Our Chef</h2>
  </div>

  {/* Chef Cards */}
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 place-items-center">
  {[
    { name: "D. Estwood", role: "Chief Chef", image: "/chefs/Rectangle 8863.png" },
    { name: "D. Scoriesh", role: "Assistant Chef", image: "/chefs/Rectangle 8863 (1).png" },
    { name: "M. William", role: "Advertising Chef", image: "/chefs/Rectangle 8863 (2).png" },
    { name: "W. Readfroad", role: "Chef", image: "/chefs/Rectangle 8863 (3).png" },
  ].map((chef, index) => (
    <div
      key={index}
      className="bg-white text-black rounded-lg overflow-hidden shadow-lg max-md:w-[310px]"
    >
      {/* Image */}
      <img
        src={chef.image}
        alt={chef.name}
        className="w-[312px] h-[391px] object-cover"
      />
      {/* Details */}
      <div className="p-4">
        <h3 className="text-lg bg-white font-bold">{chef.name}</h3>
        <p className="text-gray-500">{chef.role}</p>
      </div>
    </div>
  ))}
</div>


  {/* See More Button */}
  <div className="flex justify-center mt-12">
    <Link href="../chefs">
    <button className="bg-transparent border-2 border-[#FF9F0D] text-white px-6 py-2 rounded-3xl hover:bg-[#FF9F0D] hover:text-white transition duration-300">
      See More
    </button>
    </Link>
  </div>
</section>

  )
}

export default Hero7
