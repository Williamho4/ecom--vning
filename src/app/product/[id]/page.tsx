import ProductDetails from '@/components/product-details'
import { fetchProductById } from '@/lib/utils'

type PageProps = {
  params: {
    id: string
  }
}

async function Page({ params }: PageProps) {
  const { id } = await params

  const product = await fetchProductById(id)

  return (
    <section>
      <ProductDetails {...product} />
    </section>
  )
}
export default Page
