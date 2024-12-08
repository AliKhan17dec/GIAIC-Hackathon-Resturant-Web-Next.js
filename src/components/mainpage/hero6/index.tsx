import React from 'react'

const Hero6 = () => {
  return (
    <section className="bg-black text-white py-16 px-10 md:px-36">
  {/* Heading */}
  <div className="text-center mb-12">
    <h3 className="text-[#FF9F0D] font-serif italic">Choose & pick</h3>
    <h2 className="text-4xl font-bold mt-2">
      <span className='text-[#FF9F0D]'>Fr</span>om Our Menu
    </h2>
  </div>

  {/* Menu Categories */}
  <div className="md:flex justify-center space-x-6 text-lg font-bold text-gray-300 mb-12">
    <button className="hover:text-white">Breakfast</button>
    <button className="hover:text-white">Lunch</button>
    <button className="hover:text-white">Dinner</button>
    <button className="hover:text-white">Dessert</button>
    <button className="hover:text-white">Drink</button>
    <button className="hover:text-white">Snack</button>
    <button className="hover:text-white">Soups</button>
  </div>

  {/* Menu Items */}
  <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
    {/* Left - Plate Image */}
    <div
  className="flex justify-center bg-cover bg-center bg-no-repeat relative w-full h-[400px] " 
  style={{ backgroundImage: "url('/ourmenu/unsplash_INjdgkCwHp0.png')" }} // Replace with your image path
>
  <img
    src="/ourmenu/unsplash_Lv174o7fn7Y.png" // Replace with your plate image path
    alt="Salad Plate"
    className="w-[70%] md:w-[80%] object-cover rounded-full z-10"
  />
</div>


<div className='flex'>
<div className="space-y-6">
      {/* Menu Items List */}
      {[
        {
          name: "Lettuce Leaf",
          price: "12.55",
          image: "/ourmenu/unsplash_OFismyezPnY.png", // Replace with actual image path
        },
        {
          name: "Fresh Breakfast",
          price: "14.55",
          image: "/ourmenu/unsplash_-GFCYhoRe48.png",
        },
        {
          name: "Mild Butter",
          price: "12.55",
          image: "/ourmenu/unsplash_Yr4n8O_3UPc.png",
        },
        {
          name: "Fresh Bread",
          price: "12.55",
          image: "/ourmenu/unsplash_W9OKrxBqiZA.png",
        },
        
      ].map((item, index) => (
        <div
          key={index}
          className="flex justify-between items-center border-b border-gray-600 pb-4"
        >
          {/* Image */}
          <div>
          <img
            src={item.image}
            alt={item.name}
            className="w-16 h-16 object-cover rounded-md mr-4"
          />
          </div>
          {/* Item Name and Description */}
          <div className="flex-1">
            <h4 className="font-bold text-lg">{item.name}</h4>
            <p className="text-gray-400 text-sm">
              Lacinia, et ac dapibus velit in consequat.
            </p>
          
          {/* Price */}
          <span className="text-orange-500 font-bold text-lg">
            ${item.price}
          </span>
          </div>
        </div>
      ))}
    </div>
    <div className="space-y-6">
      {/* Menu Items List */}
      {[
        
        {
          name: "Glow Cheese",
          price: "12.55",
          image: "/ourmenu/unsplash_ZqREbckCRQA.png",
        },
        {
          name: "Italian Pizza",
          price: "14.55",
          image: "/ourmenu/unsplash_cLpdEA23Z44.png",
        },
        {
          name: "Slice Beef",
          price: "12.55",
          image: "/ourmenu/unsplash_mAQZ3X_8_l0.png",
        },
        {
          name: "Mushroom Pizza",
          price: "12.55",
          image: "/ourmenu/unsplash_dphM2U1xq0U.png",
        },
      ].map((item, index) => (
        <div
          key={index}
          className="flex justify-between items-center border-b border-gray-600 pb-4"
        >
          {/* Image */}
          <div>
          <img
            src={item.image}
            alt={item.name}
            className="w-16 h-16 object-cover rounded-md mr-4"
          />
          </div>
          {/* Item Name and Description */}
          <div className="flex-1">
            <h4 className="font-bold text-lg">{item.name}</h4>
            <p className="text-gray-400 text-sm">
              Lacinia, et ac dapibus velit in consequat.
            </p>
          
          {/* Price */}
          <span className="text-orange-500 font-bold text-lg">
            ${item.price}
          </span>
          </div>
        </div>
      ))}
    </div>
</div>
  </div>
</section>

  )
}

export default Hero6
