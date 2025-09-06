'use client'

import { Product } from '@/lib/types'
import { useCart } from '@/zustand/cartStore'
import Button from './button'

type AddToCartBtnProps = {
  product: Product
}

function AddToCartBtn({ product }: AddToCartBtnProps) {
  const addToCart = useCart((state) => state.addToCart)

  return (
    <Button
      data-id="add-to-cart-btn"
      onClick={() => addToCart(product)}
      className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
    >
      Add to Cart
    </Button>
  )
}
export default AddToCartBtn
