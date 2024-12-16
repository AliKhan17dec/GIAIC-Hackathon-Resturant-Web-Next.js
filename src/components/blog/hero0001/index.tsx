import React from 'react';
import { CiSearch } from "react-icons/ci";
import SidebarWidgets from '../sidebar';
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube, FaPinterest } from "react-icons/fa";

// Reusable BlogCard Component
interface BlogCardProps {
  image: string;
  title: string;
  description: string;
  date: string;
}

const BlogCard: React.FC<BlogCardProps> = ({ image, title, description, date }) => {
  return (
    <div className=" gap-4 p-4 border-b">
      <img src={image} alt={title} className="md:w-[872px] w-full   md:h-[520px] object-cover " />
      <div className="flex flex-col justify-between">
        <div>
          <p className="text-sm text-gray-400 mt-2">{date}</p>
          <h3 className="text-xl font-bold my-1 ">{title}</h3>
          <p className="text-gray-600">{description}</p>
        </div>
        <a
          href="#"
          className="text-orange-500 hover:text-orange-600 mt-2 inline-block"
        >
          Read More →
        </a>
      </div>
    </div>
  );
};

// Sidebar Component
const Sidebar: React.FC = () => {
  return (
    <div className="p-4 border-l space-y-6">
      {/* Recent Posts */}
      <div>
      <div className="relative mb-6">
        <input
          type="text"
          placeholder="Search Your Keyword.."
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-orange-500"
        />
        <button
          className="absolute right-2 top-2 bottom-2 bg-orange-500 text-white px-4 rounded-lg hover:bg-orange-600 transition"
          aria-label="Search"
        >
          <CiSearch size={24} />
        </button>
        
      </div>
      <div className='pt-4'>
      <div className="text-center">
        {/* Profile Image */}
        <img
          src="/man-business-suit-emotions-different-surfaces 2.png" /* Replace with your image path */
          alt="Profile Picture"
          className="w-24 h-24 mx-auto rounded-full "
        />
        {/* Name */}
        <h3 className="text-xl font-semibold mt-4 text-gray-800">Prince Miyako</h3>
        {/* Role */}
        <p className="text-gray-500 text-sm">Blogger/Photographer</p>
        {/* Rating */}
        <div className="flex justify-center mt-2">
          <span className="text-orange-400 text-lg">★★★★★</span>
          <p className="text-gray-500 ml-1 text-sm">(1 Review)</p>
        </div>
        {/* Bio */}
        <p className="text-gray-600 text-sm mt-2 px-2">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis distinctio,
          odio eligendi suscipit reprehenderit atque.
        </p>
        {/* Social Links */}
        <div className="flex justify-center gap-4 mt-4 text-gray-600">
          <a href="#" aria-label="Facebook" className="hover:text-orange-500">
            <FaFacebookF />
          </a>
          <a href="#" aria-label="Twitter" className="hover:text-orange-500">
            <FaTwitter />
          </a>
          <a href="#" aria-label="Instagram" className="hover:text-orange-500">
            <FaInstagram />
          </a>
          <a href="#" aria-label="Pinterest" className="hover:text-orange-500">
            <FaPinterest />
          </a>
        </div>
      </div>
      </div>
      <div className='pt-5'>
      <SidebarWidgets />
      </div>
      </div>
      
    </div>
  );
};

// Main Blog Page
const BlogPage: React.FC = () => {
  const blogPosts = [
    {
      image: '/blog01/unsplash_lP5MCM6nZ5A (1).png',
      title: '10 Reasons To Do A Digital Detox Challenge',
      description: 'Learn why disconnecting from digital devices is essential...',
      date: 'Feb 14, 2023',
    },
    {
      image: '/blog01/unsplash_MqT0asuoIcU (1).png',
      title: 'Traditional Soft Pretzels with Sweet Beer Cheese',
      description: 'A soft and salty snack that pairs perfectly with beer.',
      date: 'Feb 10, 2023',
    },
    {
      image: '/blog01/unsplash_XoByiBymX20.png',
      title: 'The Ultimate Hangover Burger: Egg in a Hole Burger',
      description: 'Satisfy your cravings with this loaded burger recipe.',
      date: 'Feb 5, 2023',
    },
    {
        image: '/blog01/unsplash_mAQZ3X_8_l0 (1).png',
        title: 'My Favorite Easy Black Pizza Toast Recipe',
        description: 'Satisfy your cravings with this loaded burger recipe.',
        date: 'Feb 5, 2023',
      },
  ];

  return (
    <div className="container mx-auto px-6 py-8 grid grid-cols-1 md:grid-cols-3 gap-8">
      {/* Blog List */}
      <div className="col-span-2 space-y-6">
        {blogPosts.map((post, index) => (
          <BlogCard
            key={index}
            image={post.image}
            title={post.title}
            description={post.description}
            date={post.date}
          />
        ))}
      </div>

      {/* Sidebar */}
      <Sidebar />
    </div>
  );
};

export default BlogPage;
