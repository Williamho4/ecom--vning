import { Product } from '@/lib/types'
import ProductCard from './product-card'
import { fetchProducts } from '@/lib/utils'

async function ProductList() {
  const products = await fetchProducts()

  return (
    <ul className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5">
      {products.length > 0 &&
        products.map((product: Product, index: number) => (
          <li
            key={product.id}
            data-id={`product-card-${index}`}
            data-product-id={product.id}
          >
            <ProductCard {...product} />
          </li>
        ))}
    </ul>
  )
}
export default ProductList
