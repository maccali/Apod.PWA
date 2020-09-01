/// <reference types="cypress" />

context('Actions', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })
  it('Check Title', () => {
    cy.get('h2').contains('Astronomy Picture of the Day')
  })
})
