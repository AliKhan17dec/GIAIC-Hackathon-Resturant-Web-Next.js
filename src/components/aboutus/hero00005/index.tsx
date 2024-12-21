'use client'
import React, { useState } from "react";


const menuItems = [
  {
    title: "Alder Grilled Chinook Salmon",
    description: "Toasted French bread topped with romano, cheddar",
    price: "32$",
    calories: "560 CAL",
  },
  {
    title: "Alder Grilled Chinook Salmon",
    description: "Toasted French bread topped with romano, cheddar",
    price: "32$",
    calories: "560 CAL",
  },
  {
    title: "Alder Grilled Chinook Salmon",
    description: "Toasted French bread topped with romano, cheddar",
    price: "32$",
    calories: "560 CAL",
  },
  {
    title: "Alder Grilled Chinook Salmon",
    description: "Toasted French bread topped with romano, cheddar",
    price: "32$",
    calories: "560 CAL",
  },
  {
    title: "Alder Grilled Chinook Salmon",
    description: "Toasted French bread topped with romano, cheddar",
    price: "32$",
    calories: "560 CAL",
  },
  {
    title: "Alder Grilled Chinook Salmon",
    description: "Toasted French bread topped with romano, cheddar",
    price: "32$",
    calories: "560 CAL",
  },
  {
    title: "Alder Grilled Chinook Salmon",
    description: "Toasted French bread topped with romano, cheddar",
    price: "32$",
    calories: "560 CAL",
  },
  {
    title: "Alder Grilled Chinook Salmon",
    description: "Toasted French bread topped with romano, cheddar",
    price: "32$",
    calories: "560 CAL",
  },
];

const categories = ["Breakfast", "Lunch", "Dinner", "Dessert", "Drink", "Snack"];

const FoodMenu = () => {
  const [activeCategory, setActiveCategory] = useState("Breakfast");

  return (
    <section className="bg-white py-20 px-6 text-gray-800">
      {/* Section Header */}
      <div className="text-center mb-8">
        <h2 className="text-4xl font-bold mb-4">Our Food Menu</h2>
        <p className="text-gray-500 max-w-md mx-auto">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius sed pharetra dictum neque massa congue.
        </p>
      </div>

      {/* Category Tabs */}
      <div className="flex justify-center space-x-6 mb-12 text-lg font-medium">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`${
              activeCategory === category
                ? "text-orange-500 border-b-2 border-orange-500"
                : "text-gray-500"
            } pb-2 transition duration-300`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Menu Items */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {menuItems.map((item, index) => (
          <div key={index} className="flex items-center justify-between border-b pb-4">
            <div>
              <h3 className="text-lg font-semibold">{item.title}</h3>
              <p className="text-sm text-gray-500">{item.description}</p>
              <p className="text-xs text-gray-400">{item.calories}</p>
            </div>
            <span className="text-orange-500 text-lg font-bold">{item.price}</span>
          </div>
        ))}
      </div>

      {/* View Menu Button */}
      <div className="text-center mt-12">
        <button className="px-6 py-3 border-[1px] border-[#FF9F0D] text-[#FF9F0D] hover:text-white  hover:bg-[#FF9F0D] transition duration-300">
          View Menu
        </button>
      </div>
    </section>
  );
};

export default FoodMenu;
