'use client';
import { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { LuUserRound } from "react-icons/lu";

import Link from "next/link";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="w-full flex justify-center">
      <div className="bg-black w-full h-[80px] flex items-center">
        <div className="flex items-center justify-between max-w-[1320px] w-full mx-auto">
          {/* Logo Section */}
          <div className="flex items-center text-[24px] font-bold">
            <span className="text-[#FF9F0D]">Food</span>
            <span className="text-white">tuck</span>
          </div>

          {/* Navigation Links */}
          <nav
            className={`${
              isMenuOpen
                ? "flex flex-col bg-black absolute top-[80px] left-0 w-full space-y-4 py-4 px-6 z-50"
                : "hidden md:flex space-x-7"
            } text-white text-[16px] md:static md:flex-row md:space-y-0 md:py-0 md:px-0`}
          >
            <a href="../" className="hover:text-[#FF9F0D]">
              Home
            </a>
            <Link href="/menu" className="hover:text-[#FF9F0D]">
              Menu
            </Link>
            <Link href="/blog" className="hover:text-[#FF9F0D]">
              Blog
            </Link>
            <a href="#" className="hover:text-[#FF9F0D]">
              Pages
            </a>
            <Link href="../aboutus" className="hover:text-[#FF9F0D]">
              About
            </Link>
            <Link href="../productcard" className="hover:text-[#FF9F0D]">
              Shop
            </Link>
            <a href="#" className="hover:text-[#FF9F0D]">
              Contact
            </a>
          </nav>

          {/* Search and Cart Icons */}
          <div className="flex items-center gap-6">
            <CiSearch
              size={24}
              className="text-white hover:text-[#FF9F0D] cursor-pointer"
            />
            <Link href="../signup">
              <LuUserRound
                size={20}
                className="text-white hover:text-[#FF9F0D]"
              />
            </Link>
            <Link href="../shoppingcard">
              <HiOutlineShoppingBag
                size={20}
                className="text-white hover:text-[#FF9F0D]"
              />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-[#FF9F0D]"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
