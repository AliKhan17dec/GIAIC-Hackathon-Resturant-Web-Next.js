import Image from "next/image";
import { AiOutlineCoffee } from "react-icons/ai";

const Hero4 = () => {
  const desserts = [
    {
      title: "Fig and lemon cake",
      description: "Toasted French bread topped with romano, cheddar",
      calories: "560 CAL",
      price: "32$",
    },
    {
      title: "Creamy mascarpone cake",
      description: "Gorgonzola, ricotta, mozzarella, taleggio",
      calories: "700 CAL",
      price: "43$",
    },
    {
      title: "Pastry, blueberries, lemon juice",
      description: "Ground cumin, avocados, peeled and cubed",
      calories: "1000 CAL",
      price: "14$",
    },
    {
      title: "Pain au chocolat",
      description: "Spreadable cream cheese, crumbled blue cheese",
      calories: "560 CAL",
      price: "35$",
    },
  ];

  return (
    <section className="flex flex-col md:flex-row  p-6 md:p-12 lg:mx-[100px]">
      {/* Left: Image */}
      <div className="w-full md:w-1/2">
        <Image
          src="/unsplash_90HdOlGbjck.png" // Replace with the correct image path
          alt="Dessert"
          width={448}
          height={626}
          className=" object-cover"
        />
      </div>

      {/* Right: Dessert List */}
      <div className="w-full md:w-1/2">
      <div className='text-[#FF9F0D]'><AiOutlineCoffee size={24}/></div>
        <h2 className="text-[48px] font-bold mb-6">Dessert</h2>
        <ul className="space-y-6">
          {desserts.map((dessert, index) => (
            <li key={index} className="flex justify-between items-start leading-10">
              {/* Dessert Details */}
              <div>
                <h3 className="text-[24px] font-semibold hover:text-[#FF9F0D]">{dessert.title}</h3>
                <p className="text-[16px] text-[#4F4F4F]">{dessert.description}</p>
                <p className="text-sm text-gray-500 mt-1">{dessert.calories}</p>
              </div>
              {/* Price */}
              <div className="text-orange-500 font-bold text-lg">{dessert.price}</div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Hero4;
