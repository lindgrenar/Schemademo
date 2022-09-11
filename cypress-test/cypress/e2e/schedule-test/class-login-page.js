
export class LoginPage {

  enterUsername(email) {
    cy.get('#email').type(email)

  }

  enterPassword(password) {

    cy.get('#password').type(password)
  }

  clickLogin() {
    cy.get('[type="submit"]').click()

  }


}














