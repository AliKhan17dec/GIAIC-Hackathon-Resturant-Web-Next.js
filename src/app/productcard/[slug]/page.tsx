"use client";
import Navbar from "@/components/menu/header";
import Hero1 from "@/components/menu/hero01";
import { MdOutlineStar } from "react-icons/md";
import { useRouter } from "next/navigation";
import { useState } from "react";
import React from "react";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { CiHeart } from "react-icons/ci";
import { TbStatusChange } from "react-icons/tb";
import { SiYoutubemusic } from "react-icons/si";
import { FaFacebook } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import { FaVk } from "react-icons/fa6";
import { AiFillInstagram } from "react-icons/ai";

const products = [
  { id: 1, name: "Fresh Lime", price: "$38.00", oldPrice: "$45.00", image: "/shopcardspictures/unsplash_ZuIDLSz3XLg.png", tag: "" },
  { id: 2, name: "Chocolate Muffin", price: "$28.00", oldPrice: "", image: "/shopcardspictures/Mask Group (3).png", tag: "" },
  { id: 3, name: "Burger", price: "$21.00", oldPrice: "$45.00", image: "/shopcardspictures/Mask Group (4).png", tag: "" },
  { id: 4, name: "Country Burger", price: "$45.00", oldPrice: "", image: "/shopcardspictures/unsplash_9G_oJBKwi1c.png", tag: "" },
  { id: 5, name: "Drink", price: "$32.00", oldPrice: "", image: "/shopcardspictures/unsplash_akwA-GPF710 (1).png", tag: "" },
  { id: 6, name: "Pizza", price: "$43.00", oldPrice: "", image: "/shopcardspictures/unsplash_Oxb84ENcFfU.png", tag: "" },
  { id: 7, name: "Pizza", price: "$43.00", oldPrice: "", image: "/shopcardspictures/Mask Group.png", tag: "" },
  
];

const ProductPage = ({ params }: { params: { slug: string } }) => {
  const router = useRouter();

  // Counter state
  const [quantity, setQuantity] = useState<number>(1);

  const product = products.find((p) => p.id.toString() === params.slug);

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div>
      <div>
        <Navbar />
        <Hero1
          heading="Our Menu"
          menuLink="" // Ensure this is passed as a string
          menuText="Home"
          menuText2="Shop details"
        />
      </div>
      <div className="container mx-auto p-6 items-center">
        <button
          onClick={() => router.back()}
          className="mb-4 px-4 py-2 bg-[#FF9F0D] text-white rounded hover:bg-orange-400"
        >
          Go Back
        </button>
        <div className="flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-6 lg:mx-[150px]">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full md:w-1/3 "
          />
          <div className="flex flex-col space-y-4">
            <button className="bg-[#FF9F0D] w-[80px] text-white rounded-md">In Stock</button>
            <h1 className="text-3xl font-bold">{product.name}</h1>
            <p className="text-[#4F4F4F] max-w-[400px]">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet
              nihil quisquam veritatis asperiores pariatur neque praesentium? Cum,
              impedit! Asperiores odit eos ratione error quos porro vitae omnis
              corporis, recusandae maxime!
            </p>
            <p className="text-lg text-gray-700">
              {product.oldPrice && (
                <span className="line-through text-gray-400 mr-2">
                  {product.oldPrice}
                </span>
              )}
              <span className="font-extrabold">{product.price}</span>
            </p>
            {product.tag && (
              <span className="text-sm bg-orange-400 text-white px-3 py-1 rounded-full">
                {product.tag}
              </span>
            )}
            <div className="flex gap-3 items-center">
              <div className="flex text-[#FF9F0D]">
                <MdOutlineStar />
                <MdOutlineStar />
                <MdOutlineStar />
                <MdOutlineStar />
                <MdOutlineStar />
              </div>
              <div className="text-[#A9A9A9]">|</div>
              <div className="text-[#A9A9A9]">5.0 Rating</div>
              <div className="text-[#A9A9A9]">|</div>
              <div className="text-[#A9A9A9]">22 Review</div>
            </div>
            <div className="text-[#333333]">Dictum/cursus/Risus</div>

            <div className="flex items-center gap-5">
                {/* Counter Section */}
            <div className="flex items-center space-x-4">
              <button
                onClick={() => setQuantity((prev) => Math.max(prev - 1, 1))}
                className="px-4 py-2 text-black border-[1px] border-black"
              >
                -
              </button>
              <span className="text-lg font-semibold ">{quantity}</span>
              <button
                onClick={() => setQuantity((prev) => prev + 1)}
                className="px-4 py-2  text-black border-[1px] border-black  "
              >
                +
              </button>
            </div>
            <div>
                <button className="bg-[#FF9F0D] h-10 text-white px-2 flex items-center gap-2"> <HiOutlineShoppingBag
                size={20}
                className="text-white"
              />Add to wishlist</button>
            </div>
            </div>
             <div className="flex items-center gap-5">
             <div className="flex items-center">
             <div><CiHeart size={20}/></div>
             <div className="text-[18px] text-[#4F4F4F]">Add to Wishlist</div>
             </div>
             <div className="flex items-center">
             <div><TbStatusChange  size={20}/></div>
             <div className="text-[18px] text-[#4F4F4F]">Compare</div>
             </div>
             </div>
             <div>
              <div className="flex items-center">
                <div className="text-[#333333]">Catogary:</div>
                <div className="text-[#4F4F4F]">{product.name}</div>
              </div>
              <div className="flex items-center">
                <div className="text-[#333333]">Tag:</div>
                <div className="text-[#4F4F4F]">Our shop</div>
              </div>
              
             </div>
             <div className="flex items-center gap-3">
              <div className="text-[#333333]">Share:</div>
              <div className="flex gap-2">
              <SiYoutubemusic size={20} />
              <FaFacebook size={20}/>
              <AiFillTwitterCircle size={20}/>
              <FaVk size={20}/>
              <AiFillInstagram size={20}/>
              </div>
             </div>
          </div>
          
        </div>
        <div className="lg:mx-[150px] mt-6">
          <div className="flex items-center gap-3">
            <div>
            <button className="bg-[#FF9F0D] text-white h-11 px-4 text-[16px]">Description</button>
            </div>
            <div>
            <button>Reviews 24</button>
            </div>
          </div>
          <div className="mt-8 text-[#828282] text-[16px]">
            <div>
            Nam tristique porta ligula, vel viverra sem eleifend nec. Nulla sed purus augue, eu euismod tellus. Nam mattis eros nec mi sagittis sagittis. Vestibulum suscipit cursus bibendum. Integer at justo eget sem auctor auctor eget vitae arcu. Nam tempor malesuada porttitor. Nulla quis dignissim ipsum. Aliquam pulvinar iaculis justo, sit amet interdum sem hendrerit vitae. Vivamus vel erat tortor. Nulla facilisi. In nulla quam, lacinia eu aliquam ac, aliquam in nisl.
            </div>
            <div className="mt-5">
            Suspendisse cursus sodales placerat. Morbi eu lacinia ex. Curabitur blandit justo urna, id porttitor est dignissim nec. Pellentesque scelerisque hendrerit posuere. Sed at dolor quis nisi rutrum accumsan et sagittis massa. Aliquam aliquam accumsan lectus quis auctor. Curabitur rutrum massa at volutpat placerat. Duis sagittis vehicula fermentum. Integer eu vulputate justo. Aenean pretium odio vel tempor sodales. Suspendisse eu fringilla leo, non aliquet sem.
            </div>
          </div>
          <div>
            <ul>
              <h1>Key Benifits</h1>
              <li className="text-[#4F4F4F] pl-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
              <li className="text-[#4F4F4F] pl-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
              <li className="text-[#4F4F4F] pl-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
              <li className="text-[#4F4F4F] pl-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
              <li className="text-[#4F4F4F] pl-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
              
            </ul>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default ProductPage;
