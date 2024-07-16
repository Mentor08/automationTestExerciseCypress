/// <reference types="cypress" />

// implementing pageObject model
import LoginPage from "../pageObject/loginPage";

// creating the class instance for page object model
const login = new LoginPage();

// declaring variables
let username;
let password;
let invalidPassword;

describe("Login functionality", () => {
  beforeEach(() => {
    cy.fixture("appData.json").then((loginData) => {
      // getting data from the fixture file
      username = loginData.username;
      password = loginData.password;
      invalidPassword = loginData.invalidPassword;
    });
  });

  it("Test case 1: validate successful login using valid credentials", () => {
    // navigating to the login page
    cy.visit("/login");

    login.validateLoginPage();

    // login using valid email and password
    login.enterUsername(username);
    login.enterPassword(password);
    login.clickLoginButton();

    // waiting mechanism
    cy.wait(2000);

    //verification
    login.validateSuccessfulLogin();

    login.clickOnLogout();
  });

  it("Test case 2: validate failed login using invalid credentials", () => {
    // navigating to the login page
    cy.visit("/login");

    login.validateLoginPage();

    // login using valid email and invalid password
    login.enterUsername(username);
    login.enterPassword(invalidPassword);
    login.clickLoginButton();

    //verification
    login.validateLoginPage();
  });

  it("Test case 3: validate failed login with error message", () => {
    // navigating to the login page
    cy.visit("/login");

    login.validateLoginPage();

    // login using valid email and invalid password
    login.enterUsername(username);
    login.enterPassword(invalidPassword);
    login.clickLoginButton();

    // waiting mechanism
    cy.wait(2000);

    //verification of error message
    login.validateFailedLogin();
  });
});
