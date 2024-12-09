// pages/products.tsx
import { products } from "@/app/data/products"; // Static import
import ProductCard from "@/components/ProductCard"; // Product card component

const ProductsPage = () => {
  console.log(products); // Log products to check if it's imported correctly
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-5">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductsPage;
