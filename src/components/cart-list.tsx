'use client'

import { useCart } from '@/zustand/cartStore'
import CartListItem from './cart-list-item'
import Button from './button'

function CartList() {
  const cart = useCart((state) => state.cart)
  const clearCart = useCart((state) => state.clearCart)
  const getTotalQuantity = useCart((state) => state.getTotalQuantity())

  return (
    <ul>
      {getTotalQuantity > 0 ? (
        <Button className="bg-red-500" onClick={clearCart}>
          Clear cart
        </Button>
      ) : (
        <p>No items in cart</p>
      )}
      {cart.map((item) => (
        <CartListItem key={item.id} product={item} />
      ))}
    </ul>
  )
}
export default CartList
