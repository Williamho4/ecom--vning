'use client'

import { useCart } from '@/zustand/cartStore'
import CartListItem from '../cart-list-item'
import Button from '../button'
import useStore from '@/zustand/useStore'
import { getTotalPriceOfCart } from '@/lib/utils'

function CartList() {
  const cart = useCart((state) => state.cart)
  const clearCart = useCart((state) => state.clearCart)
  const cartQuantity = useStore(useCart, (state) => state.getTotalQuantity())

  return (
    <ul>
      {(cartQuantity ?? 0) > 0 ? (
        <>
          <Button
            data-id="clear-cart-btn"
            className="bg-red-500"
            onClick={clearCart}
          >
            Clear cart
          </Button>
          <p data-id="cart-total">{getTotalPriceOfCart(cart)}</p>
        </>
      ) : (
        <p data-id="empty-cart-text">No items in cart</p>
      )}
      {cart.map((item) => (
        <CartListItem key={item.id} product={item} />
      ))}
    </ul>
  )
}
export default CartList
