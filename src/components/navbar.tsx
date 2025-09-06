'use client'

import Link from 'next/link'
import ShoppingCartBtn from './shopping-cart-btn'

function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white shadow-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
        {/* Logo / Brand */}
        <Link
          href="/"
          className="text-xl font-bold text-blue-600 hover:text-blue-700"
        >
          MyShop
        </Link>

        {/* Cart */}
        <ShoppingCartBtn />
      </div>
    </header>
  )
}

export default Navbar
