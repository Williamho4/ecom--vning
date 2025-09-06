import React from 'react'
import { useCart } from '@/zustand/cartStore'
import CartList from './cart-list'

const products = [
  {
    id: 1,
    title: 'Fantastic Metal Chips',
    price: 10,
    description:
      'Discover the equatorial new Computer with an exciting mix of Plastic ingredients',
    category: 'Industrial',
    image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_t.png',
    quantity: 2,
  },
  {
    id: 2,
    title: 'Chips',
    price: 20,
    description:
      'Discover the equatorial new Computer with an exciting mix of Plastic ingredients',
    category: 'Industrial',
    image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_t.png',
    quantity: 1,
  },
]

describe('<CartListItem />', () => {
  beforeEach(() => {
    useCart.setState({
      cart: [...products],
    })

    cy.mount(<CartList />)
  })

  it('Decrease item quantity', () => {
    cy.get('[data-id="item-quantity-1"]').should('have.text', 2)
    cy.get('[data-id="decrease-cart-item-1"]').click({ force: true })
    cy.get('[data-id="item-quantity-1"]').should('have.text', 1)

    cy.then(() => {
      const state = useCart.getState()
      expect(state.cart.find((item) => item.id === 1)?.quantity).to.equal(1)
    })
  })

  it('Increase item quantity', () => {
    cy.get('[data-id="item-quantity-2"]').should('have.text', 1)
    cy.get('[data-id="increase-cart-item-2"]').click({ force: true })
    cy.get('[data-id="item-quantity-2"]').should('have.text', 2)

    cy.then(() => {
      const state = useCart.getState()
      expect(state.cart.find((item) => item.id === 2)?.quantity).to.equal(2)
    })
  })

  it('Item gets removed on 0 quantity', () => {
    cy.get('[data-id="cart-item-2"]').should('exist')
    cy.get('[data-id="decrease-cart-item-2"]').click({ force: true })
    cy.get('[data-id="cart-item-2"]').should('not.exist')

    cy.then(() => {
      const state = useCart.getState()
      expect(state.cart.find((item) => item.id === 2)).to.be.undefined
    })
  })

  it('Clear cart', () => {
    cy.get('[data-id="clear-cart-btn"]').click({ force: true })
    cy.get('[data-id="empty-cart-text"]').should('be.visible')

    cy.then(() => {
      expect(useCart.getState().cart).to.have.length(0)
    })
  })

  it('Remove quantity of item', () => {
    cy.get('[data-id="remove-item-1"]').click({ force: true })
    cy.get('[data-id="cart-item-1"]').should('not.exist')

    cy.then(() => {
      const state = useCart.getState()
      expect(state.cart.find((item) => item.id === 1)).to.be.undefined
    })
  })

  it('Prices is correct', () => {
    const state = useCart.getState()
    const sum = state.cart.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    )

    cy.get('[data-id="cart-total"]').should('have.text', sum)
  })
})
