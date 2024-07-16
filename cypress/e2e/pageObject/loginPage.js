export const loginLocator = {
  loginPageConfirmation: ".oxd-text.oxd-text--h5.orangehrm-login-title",
  loginUsernameField: "input[placeholder='Username']",
  loginPasswordField: "input[placeholder='Password']",
  loginButton: "button[type='submit']",
  loginErrorMessage: ".oxd-text.oxd-text--p.oxd-alert-content-text",
  loginSuccessMessage:
    ".oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module",
  logoutDropdown: ".oxd-icon.bi-caret-down-fill.oxd-userdropdown-icon",
  logoutButton:
    "body > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > header:nth-child(2) > div:nth-child(1) > div:nth-child(2) > ul:nth-child(1) > li:nth-child(1) > ul:nth-child(2) > li:nth-child(4) > a:nth-child(1)",
};

export default class LoginPage {
  validateLoginPage() {
    // verifying you're on the login page
    cy.get(loginLocator.loginPageConfirmation)
      .should("be.visible")
      .and("contain", "Login");
  }

  enterUsername(username) {
    // targeting the username input field and typing in the email
    cy.get(loginLocator.loginUsernameField).type(username);
  }

  enterPassword(password) {
    // targeting the password input field and typing in the password
    cy.get(loginLocator.loginPasswordField).type(password);
  }

  clickLoginButton() {
    // clicking on the login button
    cy.get(loginLocator.loginButton).click();
  }

  validateSuccessfulLogin() {
    // verifying you're on the login page
    cy.get(loginLocator.loginSuccessMessage)
      .should("be.visible")
      .and("contain", "Dashboard");
  }

  validateFailedLogin() {
    // verifying you're on the login page
    cy.get(loginLocator.loginErrorMessage)
      .should("be.visible")
      .and("contain", "Invalid credentials");
  }

  clickOnLogout() {
    cy.get(loginLocator.logoutDropdown).click();
    cy.wait(1000);
    cy.get(loginLocator.logoutButton).click();
  }
}
