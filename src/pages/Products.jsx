import { useParams } from 'react-router-dom'
import CategoryBasedProductSection from "../sections/CategoryBasedProductSection";
import AllProductsSection from "../sections/AllProductsSection";

const Products = () => {
  const { category } = useParams()
  return category ? <CategoryBasedProductSection category={category} /> : <AllProductsSection />
}

export default Products