import { LoginPage } from "./class-login-page";

const loging = new LoginPage()


describe('Test login page', () => {
  beforeEach(() => {
    cy.visit('/')
    cy.get('#email').type('exempel@nodehill.com')
    cy.get('#password').type('abc123')
    cy.get('[type="submit"]').click()
  })

  it('Is logged in', () => {
    cy.url().should('eq', 'http://localhost:7666/')
  })

  it('visits the admin dashboard and creates a new course', () => {
    cy.visit('/admin')
    cy.url().should('eq', 'http://localhost:7666/admin/')
    cy.get('[href="#/courses"]').click()
    cy.get('.MuiToolbar-root > a.MuiButton-root').click({force: true})
    cy.get('#name').type('TestCourse')
    cy.get('#shortName').type('TestCourse')
    cy.get('#class').type('32')
    cy.get('#points').type('100')
    cy.get('#plan').type('test')
    cy.get('#invoiceItem').type('1')
    cy.get('#hoursPerDay').type('4')
    cy.get('.RaToolbar-defaultToolbar > .MuiButton-root').click()
  })

})
