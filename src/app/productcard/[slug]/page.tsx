'use client';

import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import { client } from '@/sanity/lib/client';
import { Product } from '../../../../types/products';
import { urlFor } from '@/sanity/lib/image';
import { HiOutlineShoppingBag } from 'react-icons/hi';
import { CiHeart } from 'react-icons/ci';
import { TbStatusChange } from 'react-icons/tb';
import { MdOutlineStar, MdStar, MdStarBorder } from 'react-icons/md';
import { SiYoutubemusic } from 'react-icons/si';
import { FaFacebook, FaVk } from 'react-icons/fa';
import { AiFillTwitterCircle, AiFillInstagram } from 'react-icons/ai';
import Navbar from '@/components/menu/header';
import Hero1 from '@/components/menu/hero01';

export default function ProductDetails() {
  const params = useParams();
  const slug = params.slug;

  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [quantity, setQuantity] = useState<number>(1);

  // State for reviews
  const [reviews, setReviews] = useState<{ name: string; review: string; rating: number }[]>([]);
  const [name, setName] = useState('');
  const [review, setReview] = useState('');
  const [rating, setRating] = useState<number>(0);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const fetchedProduct = await client.fetch(
          `*[_type == "product" && slug.current == $slug][0]{
             name,
             description,
             price,
             originalPrice,
             tags,
             image {
               asset -> {
                 url
               }
             }
           }`,
          { slug }
        );
        setProduct(fetchedProduct);
      } catch (error) {
        console.error('Failed to fetch product:', error);
      } finally {
        setLoading(false);
      }
    };

    if (slug) {
      fetchProduct();
    }
  }, [slug]);

  const handleAddReview = () => {
    if (!name.trim() || !review.trim() || rating === 0) {
      setError('All fields are required, and rating must be selected.');
      return;
    }

    setError('');
    setReviews([...reviews, { name, review, rating }]);
    setName('');
    setReview('');
    setRating(0);
  };

  if (loading) return <div>Loading...</div>;
  if (!product) return <div>Product not found</div>;

  return (
    <div>
      <Navbar />
      <Hero1
        heading="Our Menu"
        menuLink=""
        menuText="Home"
        menuText2="Shop details"
      />
      <div className="container mx-auto p-6 items-center">
        <button
          onClick={() => history.back()}
          className="mb-4 px-4 py-2 bg-[#FF9F0D] text-white rounded hover:bg-orange-400"
        >
          Go Back
        </button>
        <div className="flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-6 lg:mx-[150px]">
          <img
            src={urlFor(product.image).url()}
            alt={product.name}
            className="w-full h-full md:w-1/3"
          />
          <div className="flex flex-col space-y-4">
            {/* Product details */}
            <h1 className="text-3xl font-bold">{product.name}</h1>
            <p className="text-[#4F4F4F] max-w-[400px]">{product.description}</p>
            <p className="text-lg text-gray-700">
              {product.originalPrice && (
                <span className="line-through text-gray-400 mr-2">
                  ${product.originalPrice}
                </span>
              )}
              <span className="font-extrabold">${product.price}</span>
            </p>
            {product.tags && (
              <div className="text-sm bg-orange-400 text-white w-14 text-center rounded-none">
                {product.tags}
              </div>
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
              <div className="text-[#A9A9A9]">22 Reviews</div>
            </div>
            <div className="flex items-center gap-5">
              <div className="flex items-center space-x-4">
                <button
                  onClick={() => setQuantity((prev) => Math.max(prev - 1, 1))}
                  className="px-4 py-2 text-black border-[1px] border-black"
                >
                  -
                </button>
                <span className="text-lg font-semibold">{quantity}</span>
                <button
                  onClick={() => setQuantity((prev) => prev + 1)}
                  className="px-4 py-2 text-black border-[1px] border-black"
                >
                  +
                </button>
              </div>
              <button className="bg-[#FF9F0D] h-10 text-white px-2 flex items-center gap-2">
                <HiOutlineShoppingBag size={20} /> Add to Cart
              </button>
            </div>
            <div className="flex items-center gap-5">
              <div className="flex items-center">
                <CiHeart size={20} />
                <span className="text-[18px] text-[#4F4F4F]">Add to Wishlist</span>
              </div>
              <div className="flex items-center">
                <TbStatusChange size={20} />
                <span className="text-[18px] text-[#4F4F4F]">Compare</span>
              </div>
            </div>
            <div>
              <div className="flex items-center">
                <span className="text-[#333333]">Category:</span>
                <span className="text-[#4F4F4F] ml-2">{product.name}</span>
              </div>
              <div className="flex items-center">
                <span className="text-[#333333]">Tag:</span>
                <span className="text-[#4F4F4F] ml-2">Our Shop</span>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-[#333333]">Share:</span>
              <div className="flex gap-2">
                <SiYoutubemusic size={20} />
                <FaFacebook size={20} />
                <AiFillTwitterCircle size={20} />
                <FaVk size={20} />
                <AiFillInstagram size={20} />
              </div>
            </div>
          </div>
        </div>

        
        
          <div className="mt-6 space-y-4">
            {/* Review Input */}
            {/* Existing review form and display logic */}
            <div className="mt-10">
          <h2 className="text-xl font-bold text-center">Leave a Review</h2>
          <div className="mt-6 space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full p-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
              aria-label="Your Name"
            />
            <textarea
              placeholder="Write your review"
              value={review}
              onChange={(e) => setReview(e.target.value)}
              className="w-full p-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
              rows={4}
              aria-label="Write your review"
            />
            <div className="flex items-center gap-2">
              <p>Rate:</p>
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  onClick={() => setRating(star)}
                  className="text-yellow-500 text-xl"
                >
                  {rating >= star ? <MdStar /> : <MdStarBorder />}
                </button>
              ))}
            </div>
            {error && <p className="text-red-500 text-sm">{error}</p>}
            <button
              onClick={handleAddReview}
              className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
            >
              Submit Review
            </button>
          </div>

          {/* Display Reviews */}
          <div className="mt-8 space-y-6">
            <h2 className="text-lg font-semibold">Customer Reviews</h2>
            {reviews.length > 0 ? (
              reviews.map((r, index) => (
                <div key={index} className="p-4 bg-gray-100 rounded-lg shadow">
                  <div className="flex items-center gap-2">
                    <h3 className="font-bold">{r.name}</h3>
                    <div className="flex text-yellow-500">
                      {Array(r.rating)
                        .fill(0)
                        .map((_, i) => (
                          <MdStar key={i} />
                        ))}
                    </div>
                  </div>
                  <p className="mt-2">{r.review}</p>
                </div>
              ))
            ) : (
              <p className="text-gray-500 text-center">
                No reviews yet. Be the first to leave a review!
              </p>
            )}
          </div>
          </div>
          </div>
        </div>
      </div>
    
  );
}
