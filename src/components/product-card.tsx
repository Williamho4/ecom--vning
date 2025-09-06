import Image from 'next/image'
import Link from 'next/link'

type ProductCardProps = {
  id: number
  title: string
  price: number
  description: string
  category: string
  image: string
}

function ProductCard({
  id,
  title,
  price,
  description,
  category,
  image,
}: ProductCardProps) {
  return (
    <Link href={`/product/${id}`} className="block">
      <div className="border rounded-xl shadow-md overflow-hidden p-4 bg-white hover:shadow-lg transition-shadow duration-300 max-h-[500px] flex flex-col">
        <div className="relative w-full h-64 mb-4 flex-shrink-0">
          <Image
            src={image}
            alt={title}
            fill
            className="object-contain"
            sizes="(max-width: 768px) 100vw, 500px"
          />
        </div>
        <div className="flex flex-col gap-2 overflow-hidden">
          <h2
            data-id="product-card-title"
            className="text-lg font-semibold text-gray-800 truncate"
          >
            {title}
          </h2>
          <p className="text-sm text-gray-500 truncate">{category}</p>
          <p className="text-gray-700 line-clamp-3">{description}</p>
          <p className="text-blue-600 font-bold text-lg mt-auto">${price}</p>
        </div>
      </div>
    </Link>
  )
}

export default ProductCard
