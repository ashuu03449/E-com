import ProductCard from './ProductCard'; // Importing the ProductCard component to display individual product cards
import Button from './Button'; // Importing a Button component (assumed to be a reusable button element)
import HeadingCenter from './HeadingCenter';
import products from "@/app/data/products.json"
import { CartProvider } from "@/components/CartContext"; // CartProvider import karna

// Array holding the product details. Each object represents one product with details such as:
// url: the image path of the product
// popUp: label to show discounts or special tags (e.g., "New")
// title: name of the product
// description: brief description of the product
// discountPrice: discounted price of the product
// actualPrice: original price of the product (may be empty if no original price exists)
// forceHover: a custom property (optional) to force the hover effect on a specific card

// The Products component serves as a container for the product listing.
const Products = () => {
    return (
        <div className='px-[30px] md:px-[60px] pb-[48px]'>
            {/* Title for the product section */}
            <HeadingCenter title="Our Products" />
            
            {/* Container for product cards */}
            <div className='mt-10 flex flex-wrap items-center justify-center gap-7'>
<CartProvider >

                {
                    // Mapping over the productArray to render a ProductCard for each product.
                    // The ProductCard receives props from the object for rendering individual card details.
                    products.map((product) => (
                        
                        <ProductCard
                        key={product.id}
                        url={product.url}
                        label={product.popUp}
                        title={product.title}
                        description={product.description}
                        discount={product.discountPrice}
                        actual={product.actualPrice}
                        forceHover={product.forceHover || false}
                        id={product.id}
                        />
                    ))
                }
                </CartProvider>
            </div>
            
            {/* A Button component, possibly for "Load More" or other actions */}
            <Button />
        </div>
    )
}
export default Products
