import { create } from 'zustand'
import { CartProduct, Product } from '@/lib/types'
import { devtools } from 'zustand/middleware'

type CartState = {
  cart: CartProduct[]
  addToCart: (product: Product) => void
  removeFromCart: (productId: Product['id']) => void
}

export const useCart = create<CartState>()(
  devtools((set) => ({
    cart: [],
    addToCart: (product) =>
      set((state) => {
        const existing = state.cart.find((item) => item.id === product.id)

        if (existing) {
          return {
            cart: state.cart.map((item) =>
              item.id === product.id
                ? { ...item, quantity: item.quantity + 1 }
                : item
            ),
          }
        } else {
          return {
            cart: [...state.cart, { ...product, quantity: 1 }],
          }
        }
      }),
  }))
)
