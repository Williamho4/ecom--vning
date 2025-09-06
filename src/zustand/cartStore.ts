import { create } from 'zustand'
import { CartProduct, Product } from '@/lib/types'
import { devtools, persist } from 'zustand/middleware'

type CartState = {
  cart: CartProduct[]
  addToCart: (product: Product) => void
  removeItem: (productId: CartProduct['id']) => void
  increaseItemQuantity: (productId: CartProduct['id']) => void
  decreaseItemQuantity: (productId: CartProduct['id']) => void
  clearCart: () => void
  getTotalQuantity: () => number
}

export const useCart = create<CartState>()(
  devtools(
    persist(
      (set, get) => ({
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
        increaseItemQuantity: (productId) =>
          set((state) => {
            return {
              cart: state.cart.map((item) =>
                item.id === productId
                  ? { ...item, quantity: item.quantity + 1 }
                  : item
              ),
            }
          }),
        decreaseItemQuantity: (productId) =>
          set((state) => {
            return {
              cart: state.cart
                .map((item) =>
                  item.id === productId
                    ? { ...item, quantity: item.quantity - 1 }
                    : item
                )
                .filter((item) => item.quantity !== 0),
            }
          }),
        removeItem: (productId) =>
          set((state) => {
            return {
              cart: state.cart.filter((item) => item.id !== productId),
            }
          }),
        clearCart: () =>
          set(() => {
            return {
              cart: [],
            }
          }),

        getTotalQuantity: () =>
          get().cart.reduce((sum, item) => sum + item.quantity, 0),
      }),
      {
        name: 'cart-storage',
        partialize: (state) => ({ cart: state.cart }),
      }
    )
  )
)
