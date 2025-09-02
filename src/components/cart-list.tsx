'use client'

import { useCart } from '@/zustand/store'

function CartList() {
  const cart = useCart((state) => state.cart)

  console.log(cart)

  return <div>CartList</div>
}
export default CartList
