import ProductList from '@/components/product-list'
import { Suspense } from 'react'

export default async function Home() {
  return (
    <main>
      <h1>Products</h1>
      <Suspense fallback={<p>Loading</p>}>
        <ProductList />
      </Suspense>
    </main>
  )
}
