import { fetchProductById } from '@/lib/utils'
import Image from 'next/image'
import AddToCartBtn from './add-to-cart-btn'

type ProductDetailsProps = {
  productId: string
}

async function ProductDetails({ productId }: ProductDetailsProps) {
  const product = await fetchProductById(productId)
  const { image, title, category, description, price } = product

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-xl shadow-md flex flex-col md:flex-row gap-6">
      <div className="relative w-full md:w-1/2 h-96">
        <Image
          src={image}
          alt={title}
          fill
          className="object-contain rounded"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>

      <div className="flex flex-col justify-between gap-4 md:w-1/2">
        <div className="flex flex-col gap-2">
          <h1 className="text-2xl font-bold text-gray-800">{title}</h1>
          <p className="text-sm text-gray-500 uppercase">{category}</p>
          <p className="text-gray-700">{description}</p>
        </div>

        <div className="mt-4 flex items-center justify-between">
          <p className="text-2xl font-bold text-blue-600">${price}</p>
          <AddToCartBtn product={product} />
        </div>
      </div>
    </div>
  )
}

export default ProductDetails
