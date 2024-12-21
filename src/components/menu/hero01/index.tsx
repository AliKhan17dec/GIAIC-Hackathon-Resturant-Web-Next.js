import React from 'react';
import Link from 'next/link';
import { IoMdArrowDropright } from "react-icons/io";

// Define the types for the props
interface Hero1Props {
  heading: string;
  menuLink: string;  // This is required, should always be passed
  menuText: string;
  menuText2: string;
}

const Hero1: React.FC<Hero1Props> = ({ heading, menuLink, menuText, menuText2 }) => {
  return (
    <section 
      className="bg-black text-white py-16 px-10 md:px-36 relative bg-cover bg-center"
      style={{
        backgroundImage: "url('/unsplash_4ycv3Ky1ZZU.png')", // Hardcoded image URL
      }}
    >
      {/* Semi-transparent overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-5"></div>

      {/* Content */}
      <div>
        {/* Dynamic Heading */}
        <div className="items-center flex justify-center text-[48px] font-extrabold">
          {heading} {/* Heading passed as prop */}
        </div>

        {/* Dynamic Menu */}
        <div className="flex justify-center items-center text-[20px] mb-20">
          <Link href={menuLink || "#"}> {/* Fallback to "#" if menuLink is undefined */}
            <div className="hover:text-[#FF9F0D] text-white">{menuText}</div> {/* Menu Link Text */}
          </Link>
          <div><IoMdArrowDropright /></div>
          <div className="text-[#FF9F0D] hover:text-white">{menuText2}</div> {/* Menu Text */}
        </div>
      </div>
    </section>
  );
};

export default Hero1;
