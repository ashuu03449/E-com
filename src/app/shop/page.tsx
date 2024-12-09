import AnotherHeroSection from "@/components/AnotherHeroSection"
import FilterControls from "@/components/FilterControls"
import FeatureSection from "@/components/Frameonesix"
import ProductsPage from "@/components/ProductPage"

const Shop = () => {
  return (
    <div>
      <AnotherHeroSection mainhead={"Shop"} homename="Home" currentPage={"Shop"} />
      <FilterControls />
      <ProductsPage />
      <FeatureSection />
    </div>
  )
}

export default Shop
