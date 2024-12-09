import AnotherHeroSection from "@/components/AnotherHeroSection"
import FilterControls from "@/components/FilterControls"
import FeatureSection from "@/components/Frameonesix"
import Products from "@/components/ProductsSection"


const Shop = () => {
  return (
    <div>
      <AnotherHeroSection mainhead={"Shop"} homename="Home" currentPage={"Shop"} />
      <FilterControls />
      <Products />
      <FeatureSection />
    </div>
  )
}

export default Shop
