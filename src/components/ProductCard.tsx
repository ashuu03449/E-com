// components/ProductCard.tsx
import Image from "next/image";

const ProductCard = ({ product }: any) => {
  // Ensure product and product.image are valid
  if (!product?.image) {
    return <div>No image available for {product?.name}</div>;
  }

  return (
    <div className="group relative bg-white rounded-lg shadow-md overflow-hidden">
      <div className="relative w-full h-72">
        <Image
          src={product.image}
          alt={product.name}
          layout="fill"
          objectFit="cover"
          className="transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800">{product.name}</h3>
        <p className="text-sm text-gray-600">{product.description}</p>
        <div className="flex items-center justify-between mt-4">
          <span className="text-xl font-bold text-gray-900">Rs. {product.price}</span>
          <button className="px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-700 transition duration-300">
            Add to Cart
          </button>
        </div>
      </div>

      {/* Hover effect */}
      <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
    </div>
  );
};

export default ProductCard;
