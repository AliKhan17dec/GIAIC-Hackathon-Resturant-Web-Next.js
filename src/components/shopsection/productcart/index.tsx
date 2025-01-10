import React from "react";
import Link from "next/link";

const products = [
  { id: 1, name: "Fresh Lime", price: "$38.00", oldPrice: "$45.00", image: "/shopcardspictures/unsplash_ZuIDLSz3XLg.png", tag: "" },
  { id: 2, name: "Chocolate Muffin", price: "$28.00", oldPrice: "", image: "/shopcardspictures/Mask Group (3).png", tag: "" },
  { id: 3, name: "Burger", price: "$21.00", oldPrice: "$45.00", image: "/shopcardspictures/Mask Group (4).png", tag: "" },
  { id: 4, name: "Country Burger", price: "$45.00", oldPrice: "", image: "/shopcardspictures/unsplash_9G_oJBKwi1c.png", tag: "" },
  { id: 5, name: "Drink", price: "$32.00", oldPrice: "", image: "/shopcardspictures/unsplash_akwA-GPF710 (1).png", tag: "" },
  { id: 6, name: "Pizza", price: "$43.00", oldPrice: "", image: "/shopcardspictures/unsplash_Oxb84ENcFfU.png", tag: "" },
  { id: 7, name: "Pizza", price: "$43.00", oldPrice: "", image: "/shopcardspictures/Mask Group.png", tag: "" },
];

const ShopPage = () => {
  return (
    <div className="flex flex-col md:flex-row max-w-7xl mx-auto p-6">
  {/* Sidebar */}
  <aside className="w-full md:w-1/4 p-4 bg-gray-100 rounded-lg mb-6 md:mb-0">
    <h3 className="text-xl font-bold mb-4">Category</h3>
    <ul className="space-y-2">
      <li>
        <input type="checkbox" className="mr-2" /> Sandwiches
      </li>
      <li>
        <input type="checkbox" className="mr-2" /> Burger
      </li>
      <li>
        <input type="checkbox" className="mr-2" /> Chicken Chup
      </li>
      <li>
        <input type="checkbox" className="mr-2" /> Drink
      </li>
      <li>
        <input type="checkbox" className="mr-2" /> Pizza
      </li>
    </ul>

    <h3 className="text-xl font-bold mt-6 mb-4">Filter By Price</h3>
    <input type="range" min="0" max="100" className="w-full" />
    <p className="text-sm mt-2">From $0 to $100</p>
  </aside>

  {/* Main Content */}
  <main className="w-full md:w-3/4 md:pl-6">
    {/* Sorting and Show Options */}
    <div className="flex flex-col sm:flex-row justify-between gap-4 mb-6">
      <select className="border p-2 rounded">
        <option>Sort By: Newest</option>
        <option>Price: Low to High</option>
        <option>Price: High to Low</option>
      </select>
      <select className="border p-2 rounded">
        <option>Show: Default</option>
        <option>6 Items</option>
        <option>12 Items</option>
      </select>
    </div>

    {/* Product Grid */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {products.map((product) => (
        <Link href={`/productcard/${product.id}`} key={product.id}>
          <div className="border rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 cursor-pointer">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-56 object-cover"
            />
            <div className="p-4">
              <h2 className="text-lg font-bold text-gray-800">{product.name}</h2>
              <p className="text-sm text-gray-500 mt-2">
                {product.oldPrice && (
                  <span className="line-through text-gray-400 mr-2">{product.oldPrice}</span>
                )}
                <span>{product.price}</span>
              </p>
              {product.tag && (
                <span className="text-xs bg-orange-400 text-white px-2 py-1 rounded-full mt-2 inline-block">
                  {product.tag}
                </span>
              )}
            </div>
          </div>
        </Link>
      ))}
    </div>
  </main>
</div>

  );
};

export default ShopPage;
