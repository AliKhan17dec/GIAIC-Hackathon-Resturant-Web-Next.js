"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import { allProducts } from "@/sanity/lib/queries";
import { Product } from "../../../../types/products"; 

const ShopPage = () => {
  const [products, setProducts] = useState<Product[]>([]);

  // Fetch products from Sanity
  useEffect(() => {
    async function fetchProducts() {
      const fetchedProducts: Product[] = await client.fetch(allProducts);
      setProducts(fetchedProducts);
    }
    fetchProducts();
  }, []);

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
            <Link href={`/productcard/${product.slug.current}`} key={product._id}>
              <div className="border rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 cursor-pointer">
                <img
                  src={urlFor(product.image).url()} // Use Sanity's image URL
                  alt={product.name}
                  className="w-full h-56 object-cover"
                />
                <div className="p-4">
                  <h2 className="text-lg font-bold text-gray-800">{product.name}</h2>
                  <p className="text-sm text-gray-500 mt-2">
                    {product.originalPrice && (
                      <span className="line-through text-gray-400 mr-2">{product.originalPrice}</span>
                    )}
                    <span>${product.price}</span>
                  </p>
                  {product.tags && (
                    <span className="text-xs bg-orange-400 text-white px-2 py-1 rounded-full mt-2 inline-block">
                      {product.tags}
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

