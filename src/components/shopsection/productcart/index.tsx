"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import { allProducts } from "@/sanity/lib/queries";
import { Product } from "../../../../types/products";

const ShopPage = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>("");

  // Fetch products from Sanity
  useEffect(() => {
    async function fetchProducts() {
      const fetchedProducts: Product[] = await client.fetch(allProducts);
      setProducts(fetchedProducts);
      setFilteredProducts(fetchedProducts); // Initially display all products
    }
    fetchProducts();
  }, []);

  // Handle category filter change
  const handleCategoryChange = (category: string) => {
    setSelectedCategories((prevCategories) =>
      prevCategories.includes(category)
        ? prevCategories.filter((cat) => cat !== category) // Remove if already selected
        : [...prevCategories, category] // Add if not selected
    );
  };

  // Filter products whenever selectedCategories or searchTerm changes
  useEffect(() => {
    const filtered = products.filter((product) => {
      // Check if the product matches the selected categories
      const matchesCategory = selectedCategories.length
        ? selectedCategories.includes(product.category)
        : true;

      // Check if the product name or tags match the search term
      const matchesSearchTerm =
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        (product.tags &&
          (Array.isArray(product.tags)
            ? product.tags.join(" ").toLowerCase().includes(searchTerm.toLowerCase())
            : product.tags.toLowerCase().includes(searchTerm.toLowerCase())));

      return matchesCategory && matchesSearchTerm;
    });

    setFilteredProducts(filtered);
  }, [selectedCategories, searchTerm, products]);

  return (
    <div className="flex flex-col md:flex-row max-w-7xl mx-auto p-6">
      {/* Sidebar */}
      <aside className="w-full md:w-1/4 p-4 bg-gray-100 rounded-lg mb-6 md:mb-0">
        <h3 className="text-xl font-bold mb-4">Category</h3>
        <ul className="space-y-2">
          {["Burger", "Fried Item", "Sea Food", "Drink", "Baked Item"].map((category) => (
            <li key={category}>
              <label className="flex items-center">
                <input
                  type="checkbox"
                  className="mr-2"
                  checked={selectedCategories.includes(category)}
                  onChange={() => handleCategoryChange(category)}
                />
                {category}
              </label>
            </li>
          ))}
        </ul>

        <h3 className="text-xl font-bold mt-6 mb-4">Filter By Price</h3>
        <input type="range" min="0" max="100" className="w-full" />
        <p className="text-sm mt-2">From $0 to $100</p>
      </aside>

      {/* Main Content */}
      <main className="w-full md:w-3/4 md:pl-6">
        {/* Search Bar */}
        <div className="mb-6">
          <input
            type="text"
            className="border p-2 rounded w-full"
            placeholder="Search by name or tags"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

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
          {filteredProducts.map((product) => (
            <Link href={`/productcard/${product.slug.current}`} key={product._id}>
              <div className="border rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-200 cursor-pointer">
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
