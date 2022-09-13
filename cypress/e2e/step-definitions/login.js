import { Given, When, And, Then, } from "@badeball/cypress-cucumber-preprocessor";

//const loginPage = require("http://localhost:7666/login.html");

loginpage_username_textbox = '#email'   //css locator -class variable
loginpage_password_textbox = '#password'   //css locator 
loginpage_clicklogin_textbox = '[type="submit"]'  //css locator


Given("A user visit nodehill localhost website", () => {
  cy.visit("http://localhost:7666/login.html");
});

When("A user enters the username", (email) => {
  cy.get(this.loginpage_username_textbox).type(email)

});

And("A user enters the password", (password) => {
  cy.get(this.loginpage_password_textbox).type(password)
});

And("A user clicks on the login button", () => {
  cy.get(loginPage.loginpage_clicklogin_textbox).click()
});

Then("the url will show the admin page ", () => {
  cy.url().should('http://localhost:7666/admin/');
  //cy.get(this.loginpage_clicklogin_textbox).click()

});
