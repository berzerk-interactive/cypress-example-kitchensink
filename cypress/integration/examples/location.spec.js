/// <reference types="cypress" />

context('Location', () => {
  beforeEach(() => {
    cy.visit(`http://${Cypress.env('host')}commands/location`)
  })

  it('cy.hash() - get the current URL hash', () => {
    // https://on.cypress.io/hash
    cy.hash().should('be.empty')
  })

  it('cy.location() - get window.location', () => {
    // https://on.cypress.io/location
    cy.location().should((location) => {
      expect(location.hash).to.be.empty
      expect(location.href).to.eq(`http://${Cypress.env('host')}commands/location`)
      expect(location.hostname).to.eq('localhost')
      expect(location.pathname).to.eq('/commands/location')
      expect(location.port).to.eq('8080')
      expect(location.protocol).to.eq('http:')
      expect(location.search).to.be.empty
    })
  })

  it('cy.url() - get the current URL', () => {
    // https://on.cypress.io/url
    cy.url().should('eq', `http://${Cypress.env('host')}commands/location`)
  })
})
