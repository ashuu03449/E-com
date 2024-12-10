// Modal.tsx
import React from 'react';
import Image from 'next/image';
interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  productName: string;
  productImageUrl: string;
}

const Modal = ({ isOpen, onClose, productName, productImageUrl }: ModalProps) => {
  if (!isOpen) return null; // Return null if modal is not open.

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg w-[400px]">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-xl text-gray-600"
        >
          X
        </button>
        <div className="flex flex-col items-center">
          <Image
            src={productImageUrl}
            alt={productName}
            width={150}
            height={150}
            className="w-[150px] h-[150px] object-contain mb-4"
          />
          <h3 className="text-xl font-semibold">{productName}</h3>
          <p className="mt-4">Successfully added to cart!</p>
          <button
            onClick={onClose}
            className="mt-4 bg-primaryColor text-white py-2 px-6 rounded-lg"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
