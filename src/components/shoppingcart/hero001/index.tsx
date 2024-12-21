'use client'
import CheckoutPage from '@/components/checkoutpage/checkouthero1';
import Link from 'next/link';
import React, { useState } from 'react';

interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  total: number;
  image: string;
}

const CartSection: React.FC = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([
    { id: 1, name: 'Burger', price: 35, quantity: 1, total: 221, image: '/products/product_img.png' },
    { id: 2, name: 'Fresh Lime', price: 25, quantity: 1, total: 521, image: '/products/Mask Group.png' },
    { id: 3, name: 'Pizza', price: 15, quantity: 1, total: 421, image: '/products/product_img (1).png' },
    { id: 4, name: 'Chocolate Muffin', price: 45, quantity: 1, total: 521, image: '/products/product_img (2).png' },
    { id: 5, name: 'Cheese Butter', price: 15, quantity: 1, total: 325, image: '/products/product_img (3).png' },
  ]);

  const handleRemove = (id: number) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  const calculateTotal = () => {
    return cartItems.reduce((sum, item) => sum + item.total, 0);
  };

  return (
    <div className="container sm:mx-0 lg:mx-10 lg:p-6">
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b">
              <th className="p-2">Product</th>
              <th className="p-2">Price</th>
              <th className="p-2">Quantity</th>
              <th className="p-2">Total</th>
              <th className="p-2">Remove</th>
            </tr>
          </thead>
          <tbody>
            {cartItems.map(item => (
              <tr key={item.id} className="border-b">
                <td className="p-2 flex items-center gap-4">
                  <img src={item.image} alt={item.name} className="w-20 h-20 object-cover" />
                  {item.name}
                </td>
                <td className="p-2">${item.price}</td>
                <td className="p-2">
                  <div className="flex items-center">
                    <button className="px-2 border" onClick={() => {}}> - </button>
                    <span className="px-4">{item.quantity}</span>
                    <button className="px-2 border" onClick={() => {}}> + </button>
                  </div>
                </td>
                <td className="p-2">${item.total}</td>
                <td className="p-2">
                  <button
                    onClick={() => handleRemove(item.id)}
                    className="text-red-500 hover:text-red-700"
                  >
                    X
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Coupon Code & Summary */}
      <div className="mt-6 flex justify-between flex-col md:flex-row gap-6">
        <div className="w-full md:w-1/2">
          <h3 className="font-semibold mb-2">Coupon Code</h3>
          <input
            type="text"
            placeholder="Enter Here Code"
            className="border w-full p-2 rounded"
          />
          <button className="mt-2 bg-[#FF9F0D] text-white py-2 px-4 rounded hover:bg-orange-600">
            Apply
          </button>
        </div>
        <div className="w-full md:w-1/3 md:mx-14">
          <h3 className="font-semibold mb-2">Total Bill</h3>
          <div className="flex justify-between">
            <span>Cart Subtotal</span>
            <span>${calculateTotal()}</span>
          </div>
          <div className="flex justify-between">
            <span className='text-[#4F4F4F]'>Shipping Charge</span>
            <span>$0.00</span>
          </div>
          <div className="border-t mt-2 pt-2 flex justify-between font-semibold">
            <span>Total Amount</span>
            <span>${calculateTotal()}</span>
          </div>
          <Link href="../checkoutpage">
          <button className="mt-4 bg-[#FF9F0D] text-white py-2 w-full rounded hover:bg-orange-600">
            Proceed to Checkout
          </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CartSection;

