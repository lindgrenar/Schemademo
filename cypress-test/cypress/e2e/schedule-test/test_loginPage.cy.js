import { LoginPage } from "./class-login-page";

const loging = new LoginPage()


describe('Test login page', () => {
  it('Schedule proeject login function test', () => {

    cy.visit('http://localhost:7666/login.html')

    loging.enterUsername('exempel@nodehill.com')
    loging.enterPassword('abc123')
    loging.clickLogin()

  })
})



