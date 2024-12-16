'use client';
import { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { HiOutlineShoppingBag } from "react-icons/hi";
import Link from "next/link";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="w-full flex justify-center">
      <div className="bg-black md:w-[1320px] px-4 md:px-12 py-4 mt-[25px] max-md:mt-0">
        <div className="items-center justify-between max-w-[1320px] mx-auto ">
          {/* Logo Section */}
          <div className="flex items-center text-[24px] font-bold justify-center">
            <span className="text-[#FF9F0D]">Food</span>
            <span className="text-white">tuck</span>
          </div>

          <div className="flex justify-between items-center">
            {/* Navigation Links */}
            <nav
              className={`${
                isMenuOpen
                  ? "flex flex-col space-y-4 text-white text-[16px] md:hidden"
                  : "hidden md:flex space-x-7 text-white text-[16px]"
              } max-md:bg-black max-md:w-full max-md:p-4 max-md:mt-4`}
            >
              <a href="#" className="hover:text-yellow-500">
                Home
              </a>
              <Link href="../menu" className="hover:text-yellow-500">
                Menu
              </Link>
              <Link href="../blog" className="hover:text-yellow-500">
                Blog
              </Link>
              <a href="#" className="hover:text-yellow-500">
                Pages
              </a>
              <a href="#" className="hover:text-yellow-500">
                About
              </a>
              <a href="../products" className="hover:text-yellow-500">
                Shop
              </a>
              <a href="#" className="hover:text-yellow-500">
                Contact
              </a>
            </nav>

            {/* Search Bar */}
            <div className="flex items-center gap-2 max-md:gap-14">
              <div className="flex items-center space-x-2 text-white px-4 py-2 border-[1px] border-[#FF9F0D] rounded-[27px] w-[270px] h-[50px] max-md:w-[200px] max-md:h-[40px]">
                <input
                  type="text"
                  placeholder="Search..."
                  className="bg-transparent outline-none text-white placeholder-gray-400 flex-grow"
                />
                <CiSearch
                  size={24}
                  className="text-white shrink-0 hover:text-[#FF9F0D]"
                />
              </div>

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
                className="text-yellow-500"
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
    </div>
  );
};

export default Navbar;
