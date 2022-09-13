Feature: login page
  Feature login page will work depending on the user credentials

  Background: 
    Given A user visit nodehill localhost website

  Scenario: Success Login
    When An user enter the email 'exempel@nodehill.com'
    And A user enter the password 'abc123'
    And A user clicks on the login button
    Then The website will show the schedule page
