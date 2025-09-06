const addToCartBtn = '[data-id="add-to-cart-btn"]'
const shoppingCartBtn = '[data-id="shopping-cart-btn"]'

describe('test cart', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  const itemIndexToTest = [0, 1]

  itemIndexToTest.forEach((index) => {
    it(`Navigate to right product with right title iteration ${
      index + 1
    }`, () => {
      cy.get(`[data-id="product-card-${index}"]`)
        .find('[data-id="product-card-title"]')
        .invoke('text')
        .then((title) => {
          cy.get(`[data-id="product-card-${index}"]`).click()
          cy.get('[data-id="product-details-title"]').should('have.text', title)
        })
    })
  })

  itemIndexToTest.forEach((index) => {
    it(`navigates to right url path iteration ${index}`, () => {
      cy.get(`[data-id="product-card-${index}"]`)
        .invoke('attr', 'data-product-id')
        .then((id) => {
          cy.get(`[data-id="product-card-${index}"]`).click()
          cy.location('pathname').should('match', new RegExp(`/product/${id}`))
        })
    })
  })

  itemIndexToTest.forEach((index) => {
    it('put item in cart', () => {
      cy.get(`[data-id="product-card-${index}"]`).click()
      cy.get(addToCartBtn).click()
      cy.get('[data-id="product-details-title"]')
        .invoke('text')
        .then((itemName) => {
          cy.get(shoppingCartBtn).click()
          cy.contains(itemName).should('exist')
        })
    })
  })
})
