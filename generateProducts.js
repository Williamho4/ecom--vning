import { writeFileSync } from 'fs'
import { faker } from '@faker-js/faker'

const products = Array.from({ length: 10 }).map(() => ({
  id: faker.string.uuid(),
  title: faker.commerce.productName(),
  price: faker.commerce.price(),
  description: faker.commerce.productDescription(),
  category: faker.commerce.department(),
  image: faker.image.url(),
}))

writeFileSync(
  'cypress/fixtures/products.json',
  JSON.stringify(products, null, 2)
)

console.log('Products fixture generated!')
