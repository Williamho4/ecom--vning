import ProductDetails from '@/components/product-details'
import { Suspense } from 'react'

type PageProps = {
  params: {
    id: string
  }
}

async function Page({ params }: PageProps) {
  const { id } = await params

  return (
    <section>
      <h1>Product</h1>
      <Suspense fallback={<p>Loading</p>}>
        <ProductDetails productId={id} />
      </Suspense>
    </section>
  )
}
export default Page
