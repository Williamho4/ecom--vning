import clsx, { ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'
import { CartProduct } from './types'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export async function fetchProducts() {
  const res = await fetch('https://fakestoreapi.com/products')
  const data = await res.json()

  return data
}

export async function fetchProductById(id: string) {
  const res = await fetch(`https://fakestoreapi.com/products/${id}`)
  const data = await res.json()

  return data
}

export function getTotalPriceOfCart(cart: CartProduct[]) {
  return cart.reduce((sum, item) => sum + item.price * item.quantity, 0)
}
