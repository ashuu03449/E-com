"use client";

import { useState } from 'react'; // Import useState to manage modal visibility
import { useCart } from './CartContext';  // Importing the useCart hook
import Image from 'next/image';
import { Poppins } from 'next/font/google';
import Modal from './Modal'; // Import the Modal component

// Setting up the Poppins font with different font weights and subsets
const poppins = Poppins({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});

const ProductCard = ({ 
  id, 
  url, 
  label, 
  title, 
  description, 
  discount, 
  actual, 
  forceHover 
}: { 
  id: string;
  url: string; 
  label: string; 
  title: string; 
  description: string; 
  discount: string; 
  actual: string; 
  forceHover: boolean; 
}) => {
  const { addToCart } = useCart(); // useCart hook ko import karke use kar rahe hain
  const [isModalOpen, setIsModalOpen] = useState(false); // State to control modal visibility
  const [productDetails, setProductDetails] = useState({ name: '', imageUrl: '' }); // Product details to be passed to modal

  // Function to handle adding the product to cart
  const handleAddToCart = () => {
    const product = {
      id,
      productImageUrl: url,
      productName: title,
      quantity: 1,
      unitPrice: parseFloat(discount.replace('Rs: ', '').replace(',', '')), // price ko parse karen
    };
    addToCart(product); // Product ko cart mein add karen
    setProductDetails({ name: title, imageUrl: url }); // Set product details for the modal
    setIsModalOpen(true); // Show the modal
  };

  // Function to close the modal
  const closeModal = () => {
    setIsModalOpen(false); // Hide the modal
  };

  return (
    <div className={`${poppins.className} w-[285px] h-[446px] bg-productBackground relative overflow-hidden group cursor-pointer ${forceHover ? 'hovered' : ''}`}>
      {/* Product Image with hover effect */}
      <Image
        src={url}
        alt={title}
        width={285}
        height={301}
        className={`transition-opacity duration-300 ${forceHover ? 'opacity-50' : 'group-hover:opacity-50'}`}
      />

      {/* Discount Badge */}
      {label && (
        <span className={`${label === "New" ? 'bg-labelAnotherColorForProduct' : 'bg-labelColorForProduct'} w-[48px] h-[48px] absolute top-5 right-5 rounded-full text-center py-3 text-white font-medium text-[16px]`}>
          {label}
        </span>
      )}

      {/* Card Content (Title, Description, Prices) */}
      <div className="p-4">
        <div>
          {/* Product Title */}
          <p className="font-semibold text-[24px] text-fontColor">{title}</p>
          {/* Product Description */}
          <p className="font-medium text-[16px] text-anotherFontColor">{description}</p>
          {/* Discounted and Original Prices */}
          <div className="font-semibold text-[20px] text-fontColor">
            {discount}
            <span className="pl-2 font-normal text-[16px] text-anotherFontColor line-through">{actual}</span>
          </div>
        </div>
      </div>

      {/* Overlay for Hover Effect */}
      <div className={`absolute inset-0 bg-black opacity-0 transition-opacity duration-300 ${forceHover ? 'opacity-50' : 'group-hover:opacity-50'}`}></div>

      {/* Add to Cart Button and Action Icons */}
      <div className={`absolute inset-0 flex flex-col items-center justify-center text-white opacity-0 transition-opacity duration-300 ${forceHover ? 'opacity-100' : 'group-hover:opacity-100'}`}>
        
        {/* Add to Cart Button */}
        <button onClick={handleAddToCart} className="bg-white text-primaryColor py-3 px-16 font-semibold text-[16px] mb-4">
          Add to Cart
        </button>

        {/* Action Icons (Share, Compare, Like) */}
        <div className="flex gap-4">
          {/* Share Icon and Text */}
          <div className="flex items-center justify-center gap-1">
            <Image src={'/assets/share.svg'} alt="share" width={12} height={13} />
            <p className="font-semibold text-[16px]">Share</p>
          </div>

          {/* Compare Icon and Text */}
          <div className="flex items-center justify-center gap-1">
            <Image src={'/assets/compare.svg'} alt="compare" width={13} height={14} />
            <p className="font-semibold text-[16px]">Compare</p>
          </div>

          {/* Like Icon and Text */}
          <div className="flex items-center justify-center gap-1">
            <Image src={'/assets/like.svg'} alt="like" width={13} height={14} />
            <p className="font-semibold text-[16px]">Like</p>
          </div>
        </div>
      </div>

      {/* Modal Component */}
      <Modal 
        isOpen={isModalOpen}
        onClose={closeModal}
        productName={productDetails.name}
        productImageUrl={productDetails.imageUrl}
      />
    </div>
  );
};

export default ProductCard;
