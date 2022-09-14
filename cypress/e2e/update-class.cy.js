describe('The Login Page and Home Page', () => {

  beforeEach(() => {
    cy.visit('/')
    cy.get('#email').type('exempel@nodehill.com')
    cy.get('#password').type('abc123')
    cy.get('[type="submit"]').click()
  })

  it('Is logged in', () => {
    cy.url().should('eq', 'http://localhost:7666/')
  })

  it('visits the admin dashboard', () => {
    cy.visit('/admin')
    cy.url().should('eq', 'http://localhost:7666/admin/')
    cy.get('[href="#/classes"]').click()
    cy.get(':nth-child(56) > .column-id').click()
  })

})