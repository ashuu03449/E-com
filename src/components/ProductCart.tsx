import { useCart } from "@/components/CartContext";
import Image from "next/image";

interface Product {
  id: string;
  productImageUrl: string;
  productName: string;
  unitPrice: number;
}

const ProductCard = ({ product }: { product: Product }) => {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    const newProduct = {
      ...product,
      quantity: 1,
    };
    addToCart(newProduct);
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <Image
        src={product.productImageUrl}
        alt={product.productName}
        width={100}
        height={120}
        className="w-full h-40 object-cover rounded-lg mb-4"
      />
      <h3 className="text-lg font-semibold">{product.productName}</h3>
      <p className="text-gray-500">Rs: {product.unitPrice.toLocaleString()}</p>
      <button
        onClick={handleAddToCart}
        className="mt-4 bg-myOrange text-white px-4 py-2 rounded-md w-full"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
