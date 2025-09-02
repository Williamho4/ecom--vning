'use client'

import Link from 'next/link'

function Error() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <div className="bg-white p-8 rounded-xl shadow-md text-center max-w-md">
        <h1 className="text-2xl font-bold text-red-600 mb-4">
          Could not load product
        </h1>
        <Link href="/" className="block">
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
            Go back to home page
          </button>
        </Link>
      </div>
    </div>
  )
}

export default Error
