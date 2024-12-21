import React from "react";

const faqs = [
  {
    question: "How we serve food?",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipiscing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestias ipsa totam quidem?",
  },
  {
    question: "How can we get in touch with you?",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipiscing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestias ipsa totam quidem?",
  },
  {
    question: "How is our food quality?",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipiscing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestias ipsa totam quidem?",
  },
  {
    question: "What will be delivered? And when?",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipiscing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestias ipsa totam quidem?",
  },
  {
    question: "How do we give home delivery?",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipiscing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestias ipsa totam quidem?",
  },
  {
    question: "Is this restaurant 24 hours open?",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipiscing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestias ipsa totam quidem?",
  },
];

const FAQSection = () => {
  return (
    <section className="bg-white py-16 text-gray-800">
      {/* FAQ Page Header */}
      <div className="text-center mb-10">
        <h2 className="text-4xl font-bold mb-2">Questions Looks Here</h2>
        <p className="text-gray-500">
          Lorem ipsum is simply dummy text of the printing and typesetting
          industry. Lorem ipsum has been the
        </p>
      </div>

      {/* FAQ Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto px-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition duration-300"
          >
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-semibold">{faq.question}</h3>
              <span className="text-gray-500 text-xl font-bold">+</span>
            </div>
            <p className="text-gray-500 mt-3">{faq.answer}</p>
          </div>
        ))}
      </div>

      
    </section>
  );
};

export default FAQSection;
