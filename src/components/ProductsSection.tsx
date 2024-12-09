// components/ProductCard.tsx
import Image from "next/image";

// Define Product Interface (for individual product)
export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  description: string;
}

// Define the type for the props being passed to the ProductCard component
interface ProductCardProps {
  url: string;
  label: string;
  title: string;
  description: string;
  discount: string;
  actual: string;
  forceHover: boolean;
}

const ProductCard = ({ url, label, title, description, discount, actual, forceHover }: ProductCardProps) => {
  return (
    <div className={`group relative bg-white rounded-lg shadow-md overflow-hidden ${forceHover ? 'hover:scale-105' : ''}`}>
      {/* Image Section */}
      <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
        <Image
          src={url}
          alt={title}
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          className="transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      {/* Product Details */}
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
        <p className="text-sm text-gray-600">{description}</p>
        <div className="flex items-center justify-between mt-4">
          <span className="text-xl font-bold text-gray-900">{discount ? `Discount: ${discount}` : actual}</span>
          <button className="px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-700 transition duration-300">
            Add to Cart
          </button>
        </div>
      </div>

      {/* Hover Effect */}
      <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
    </div>
  );
};

export default ProductCard;
