import React from "react";

const teamMembers = [
  { name: "Tahmina Rumi", role: "Chef", image: "/ourchefs/unsplash_lRAWcT7uwhY.png" },
  { name: "Jorina Begum", role: "Chef", image: "/ourchefs/unsplash_uTaSlu2Jfsg.png" },
  { name: "M. Mohammad", role: "Chef", image: "/ourchefs/unsplash_v3OlBE6-fhU.png" },
  { name: "Munna Kathy", role: "Chef", image: "/ourchefs/unsplash_SiQgni-cqFg.png" },
  { name: "Tahmina Rumi", role: "Chef", image: "/ourchefs/unsplash_7qileFwJEWo.png" },
  { name: "Bianu Devgon", role: "Chef", image: "/ourchefs/unsplash_DdglEoIC2y4.png" },
  { name: "Motin Molladf", role: "Chef", image: "/ourchefs/unsplash_llcX9pTjhXM.png" },
  { name: "William Rumi", role: "Chef", image: "/ourchefs/unsplash_uTaSlu2Jfsg.png" },
  { name: "Kets William Roy", role: "Chef", image: "/ourchefs/unsplash_iv6yNy7oBqQ.png" },
  { name: "Mahmud Kholl", role: "Chef", image: "/ourchefs/unsplash_CYnQUywzBtI.png" },
  { name: "Atuar Rahman", role: "Chef", image: "/ourchefs/unsplash_VdFBh2ZgXbM.png" },
  { name: "Monalisa Holly", role: "Chef", image: "/ourchefs/unsplash_GSD9VoG6f-U.png" },
];

const AboutUs = () => {
  return (
    <section className="py-16 bg-white text-gray-800">
      {/* Section Header */}
      <div className="text-center mb-10">
        <h2 className="text-4xl font-bold mb-4">About Us</h2>
        <p className="text-gray-500 max-w-xl mx-auto">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Food is an important part of our life and culture.
        </p>
      </div>

      {/* Team Members Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-7xl mx-auto">
        {teamMembers.map((member, index) => (
          <div key={index} className="text-center">
            {/* Team Member Image */}
            <img
              src={member.image}
              alt={member.name}
              className="w-full object-cover rounded-lg shadow-md"
            />
            {/* Team Member Info */}
            <h3 className="mt-4 text-lg font-semibold">{member.name}</h3>
            <p className="text-sm text-gray-500">{member.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AboutUs;
