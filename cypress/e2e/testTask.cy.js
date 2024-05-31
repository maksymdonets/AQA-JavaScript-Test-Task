import LoginPage from '../pages/LoginPage';
import validCredentials from '../fixtures/validCredentials.json';

describe('Login Test Suite', () => {
  beforeEach(() => {
    LoginPage.visit();
  });

  it('Login with invalid credentials', () => {
    cy.fixture('invalidCredentials').then((credentials) => {
      LoginPage.login(credentials.username, credentials.password);
    });
  });

  it('Verify login page elements', () => {
    LoginPage.verifyLoginPage();
  });

  it('Verify login page errors', () => {
    // Trigger empty fields errors
    LoginPage.elements.loginBtn().click();
    LoginPage.verifyErrorMessage(LoginPage.messages.usernameEmptyError);
    LoginPage.verifyErrorMessage(LoginPage.messages.passwordEmptyError);

    // Trigger invalid account error
    cy.fixture('invalidCredentials').then((credentials) => {
      LoginPage.login(credentials.username, credentials.password);
    });

    LoginPage.verifyErrorMessage(LoginPage.messages.usernameNotFoundError);
  });

  it('Login with valid credentials', () => {
    cy.fixture('validCredentials').then((credentials) => {
      LoginPage.login(credentials.username, credentials.password);
    });

    // verify username appear after login
    LoginPage.elements.header.welcomeMessage(validCredentials.username).should('be.visible');
  });
});
