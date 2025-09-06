import { CartProduct } from '@/lib/types'
import { useCart } from '@/zustand/cartStore'
import Image from 'next/image'
import Button from './button'

type CartListItemProps = {
  product: CartProduct
}

function CartListItem({ product }: CartListItemProps) {
  const { title, image, price, quantity, category, id } = product
  const removeItem = useCart((state) => state.removeItem)
  const increaseItemQuantity = useCart((state) => state.increaseItemQuantity)
  const decreaseItemQuantity = useCart((state) => state.decreaseItemQuantity)

  return (
    <li
      data-id={`cart-item-${id}`}
      className="flex items-center gap-4 rounded-xl border bg-white p-4 shadow-sm"
    >
      {/* Thumbnail */}
      <div className="relative h-20 w-20 flex-shrink-0 overflow-hidden rounded-lg border">
        <Image
          src={image}
          alt={title}
          fill
          className="object-contain"
          sizes="80px"
        />
      </div>

      {/* Info */}
      <div className="flex min-w-0 flex-1 flex-col">
        <h3 className="truncate text-base font-semibold text-gray-800">
          {title}
        </h3>
        <p className="text-xs uppercase text-gray-500">{category}</p>
        <div className="mt-1 text-sm text-gray-700">
          ${price.toFixed(2)} each
        </div>
      </div>

      {/* Quantity controls */}
      <div className="flex items-center gap-2">
        <Button
          data-id={`decrease-cart-item-${id}`}
          type="button"
          onClick={() => decreaseItemQuantity(id)}
          className="rounded-lg border bg-gray-50 text-gray-700 hover:bg-gray-100"
          aria-label="Decrease quantity"
        >
          −
        </Button>

        <span
          data-id={`item-quantity-${id}`}
          className="w-8 text-center text-sm font-medium"
        >
          {quantity}
        </span>
        <Button
          type="button"
          data-id={`increase-cart-item-${id}`}
          onClick={() => increaseItemQuantity(id)}
          className="rounded-lg border bg-gray-50 text-gray-700 hover:bg-gray-100"
          aria-label="Increase quantity"
        >
          +
        </Button>
      </div>

      <div className="ml-4 flex flex-col items-end">
        <div className="text-right text-sm font-bold text-gray-900">$9</div>
        <Button
          type="button"
          data-id={`remove-item-${id}`}
          onClick={() => removeItem(id)}
          className="mt-1 text-xs bg-red-500 text-white hover:text-white"
        >
          Remove
        </Button>
      </div>
    </li>
  )
}
export default CartListItem
