import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';

const teamMembers = [
  {
    name: 'Mark Henry',
    role: 'Owner',
    image: '/Mark Henry.png',
  },
  {
    name: 'Lucky Helen',
    role: 'Chef',
    image: '/Mark Henry.png',
  },
  {
    name: 'Moon Henry',
    role: 'Founder',
    image: '/Mark Henry.png',
  },
  {
    name: 'Tom Monrow',
    role: 'Specialist',
    image: '/Mark Henry.png',
  },
];

const TeamSection = () => {
  return (
    <section className="relative bg-[#FF9F0DD9] py-20 text-white mt-20">
  {/* Section Title */}
  <div className="text-center mb-10 relative z-10 px-4">
    <h2 className="text-3xl sm:text-4xl font-bold">Team Member</h2>
    <p className="mt-2 text-sm sm:text-lg text-orange-200 max-w-md mx-auto">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius erat phasellus dictum neque risus.
    </p>
  </div>

  {/* Team Cards */}
  <div className="relative">
    <div className="flex flex-wrap justify-center gap-6 px-4">
      {teamMembers.map((member, index) => (
        <div
          key={index}
          className="relative bg-white rounded-lg shadow-lg text-center max-w-[250px] w-full sm:w-[220px] overflow-hidden"
        >
          {/* Profile Image */}
          <div className="relative">
            <img
              src={member.image}
              alt={member.name}
              className="w-full h-40 sm:h-48 object-cover"
            />
            {/* Social Icons */}
            <div className="absolute inset-y-0 right-2 flex flex-col justify-center gap-2 opacity-0 hover:opacity-100 transition duration-300">
              <a href="#" className="bg-orange-500 p-2 rounded-full text-white">
                <FaFacebookF />
              </a>
              <a href="#" className="bg-orange-500 p-2 rounded-full text-white">
                <FaTwitter />
              </a>
              <a href="#" className="bg-orange-500 p-2 rounded-full text-white">
                <FaInstagram />
              </a>
            </div>
          </div>

          {/* Text Content */}
          <div className="p-4">
            <h3 className="text-gray-800 text-lg sm:text-xl font-semibold">{member.name}</h3>
            <p className="text-gray-500 text-sm">{member.role}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

  );
};

export default TeamSection;
