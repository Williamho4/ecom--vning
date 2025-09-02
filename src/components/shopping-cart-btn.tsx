'use client'

import { useCart } from '@/zustand/cartStore'
import { ShoppingCart } from 'lucide-react'
import Link from 'next/link'

function ShoppingCartBtn() {
  const cartQuantity = useCart((state) => state.getTotalQuantity())

  return (
    <Link
      href="/cart"
      className="relative flex items-center rounded-lg p-2 text-gray-700 hover:bg-gray-100"
    >
      <ShoppingCart className="h-6 w-6" />
      <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-blue-600 text-xs text-white">
        {cartQuantity}
      </span>
    </Link>
  )
}
export default ShoppingCartBtn
