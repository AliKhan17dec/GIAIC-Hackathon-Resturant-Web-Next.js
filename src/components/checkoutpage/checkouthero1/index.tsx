import React from "react";
import Link from "next/link";

const CheckoutPage = () => {
  return (
    <div className="bg-gray-100 min-h-screen p-6">
      {/* Header Section */}
      
      {/* Main Content */}
      <div className="container mx-auto mt-10 flex flex-wrap lg:flex-nowrap gap-6">
        {/* Shipping Address Form */}
        <div className="w-full lg:w-2/3 bg-white p-6 rounded-lg shadow">
          <h2 className="text-2xl font-semibold mb-4">Shipping Address</h2>
          <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="First name"
              className="border p-3 rounded-lg"
            />
            <input
              type="text"
              placeholder="Last name"
              className="border p-3 rounded-lg"
            />
            <input
              type="email"
              placeholder="Email address"
              className="border p-3 rounded-lg"
            />
            <input
              type="text"
              placeholder="Phone number"
              className="border p-3 rounded-lg"
            />
            <input
              type="text"
              placeholder="Company"
              className="border p-3 rounded-lg"
            />
            <select
              className="border p-3 rounded-lg text-gray-500"
              defaultValue=""
            >
              <option value="" disabled>
                Choose country
              </option>
              <option>USA</option>
              <option>Canada</option>
              <option>India</option>
            </select>
            <input
              type="text"
              placeholder="City"
              className="border p-3 rounded-lg"
            />
            <input
              type="text"
              placeholder="Zip code"
              className="border p-3 rounded-lg"
            />
            <input
              type="text"
              placeholder="Address 1"
              className="border p-3 rounded-lg"
            />
            <input
              type="text"
              placeholder="Address 2"
              className="border p-3 rounded-lg"
            />
          </form>
          <div className="mt-4">
            <label className="flex items-center">
              <input type="checkbox" className="mr-2" />
              Same as shipping address
            </label>
          </div>
          <div className="flex justify-between mt-6">
            <Link href="../shoppingcard">
            <button className="bg-gray-200 px-6 py-2  hover:bg-gray-300 md:w-[420px] md:h-[60px]">
              Back to cart
            </button>
            </Link>
            <button className="bg-[#FF9F0D] md:w-[420px] md:h-[60px]  text-white px-6 py-2  hover:bg-orange-600">
              Proceed to shipping
            </button>
          </div>
        </div>

        {/* Order Summary */}
        <div className="w-full lg:w-1/3 bg-white p-6 rounded-lg shadow">
          <h2 className="text-2xl font-semibold mb-4">Order Summary</h2>
          <div className="space-y-4">
            {/* Items */}
            {[1, 2, 3].map((item, index) => (
              <div
                key={index}
                className="flex justify-between items-center border-b pb-4"
              >
                <img
                  src="Rectangle 8933.png"
                  alt="Item"
                  className="w-14 h-14"
                />
                <div className="flex-1 ml-4">
                  <p className="font-medium">Chicken Tikka Kabab</p>
                  <p className="text-sm text-gray-500">150 gm net - $50</p>
                </div>
                <p className="font-semibold">$50</p>
              </div>
            ))}
          </div>

          {/* Totals */}
          <div className="mt-6">
            <div className="flex justify-between py-2 border-b">
              <p>Sub-total</p>
              <p>$1305</p>
            </div>
            <div className="flex justify-between py-2 border-b">
              <p>Shipping</p>
              <p>$0</p>
            </div>
            <div className="flex justify-between py-2 border-b">
              <p>Discount</p>
              <p>$25</p>
            </div>
            <div className="flex justify-between py-2 border-b">
              <p>Tax</p>
              <p>$54.76</p>
            </div>
            <div className="flex justify-between py-2 font-semibold text-lg">
              <p>Total</p>
              <p>$432.655</p>
            </div>
          </div>
          <button className="mt-6 bg-[#FF9F0D] md:w-[420px] md:h-[60px] text-white w-full py-2  hover:bg-orange-600">
            Place an order
          </button>
        </div>
      </div>

      
      
    </div>
  );
};

export default CheckoutPage;
