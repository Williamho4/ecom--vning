'use client'

import { Product } from '@/lib/types'
import { useCart } from '@/zustand/cartStore'

type AddToCartBtnProps = {
  product: Product
}

function AddToCartBtn({ product }: AddToCartBtnProps) {
  const addToCart = useCart((state) => state.addToCart)

  return (
    <button
      onClick={() => addToCart(product)}
      className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
    >
      Add to Cart
    </button>
  )
}
export default AddToCartBtn
