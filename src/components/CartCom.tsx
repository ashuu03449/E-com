"use client";
import React from 'react';
import { useCart } from '@/components/CartContext';
import Image from 'next/image';
import { FaTrash } from 'react-icons/fa';

const CartSection = () => {
  const { cartItems, removeFromCart, increaseItemCount, decreaseItemCount } = useCart();

  // Calculate total price for all items
  const totalPrice = cartItems.reduce(
    (total, item) => total + item.unitPrice * item.quantity, 
    0
  ).toFixed(2);  // Fix to 2 decimal places

  return (
    <div className="container mx-auto mt-12 p-6">
      {/* Cart Header */}
      <h1 className="text-3xl font-semibold mb-6 text-center">Your Cart</h1>

      {/* If cart is empty */}
      {cartItems.length === 0 ? (
        <div className="text-center text-xl text-gray-600">Your cart is empty!</div>
      ) : (
        <div>
          {/* Cart Items */}
          <div className="space-y-6">
            {cartItems.map((item) => (
              <div key={item.id} className="flex items-center justify-between bg-white p-4 rounded-lg shadow-md">
                {/* Product Image */}
                <div className="flex-shrink-0">
                  <Image src={item.productImageUrl} alt={item.productName} width={100} height={100} className="object-cover rounded" />
                </div>
                
                {/* Product Details */}
                <div className="flex-1 pl-4">
                  <h3 className="font-semibold text-xl text-gray-900">{item.productName}</h3>
                  <p className="text-sm text-gray-500">Rs: {item.unitPrice}</p> {/* Product Price */}
                </div>

                {/* Quantity Control */}
                <div className="flex items-center gap-4">
                  <button
                    onClick={() => decreaseItemCount(item.id)}
                    className="px-4 py-2 bg-gray-200 rounded-full text-gray-800 hover:bg-gray-300"
                  >
                    -
                  </button>
                  <span className="text-lg font-semibold">{item.quantity}</span>
                  <button
                    onClick={() => increaseItemCount(item.id)}
                    className="px-4 py-2 bg-gray-200 rounded-full text-gray-800 hover:bg-gray-300"
                  >
                    +
                  </button>
                </div>

                {/* Subtotal */}
                <div className="text-right flex-shrink-0">
                  <p className="font-semibold text-lg text-gray-900">Rs: {item.unitPrice * item.quantity}</p> {/* Subtotal Display */}
                </div>

                {/* Remove Button */}
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="text-red-500 hover:text-red-700 font-semibold"
                >
                  <FaTrash className="w-5 h-5" />
                </button>
              </div>
            ))}
          </div>

          {/* Cart Total */}
          <div className="mt-8 flex justify-between items-center bg-gray-100 p-4 rounded-lg">
            <h2 className="text-xl font-semibold">Cart Totals</h2>
            <p className="font-semibold text-xl text-gray-900">
              Total: Rs: {totalPrice} {/* Grand Total */}
            </p>
          </div>

          {/* Checkout Button */}
          <div className="mt-6 flex justify-end">
            <button className="px-6 py-2 bg-primaryColor text-white rounded-lg shadow-md hover:bg-primaryColorDark transition duration-300">
              Proceed to Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartSection;
