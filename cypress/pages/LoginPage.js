export default {
  url: '/qa-portal/greet.php',

  elements: {
    logo: () => cy.xpath("//img[@id='logomini']"),
    title: () => cy.xpath("//h1[text()='AQA internship Login']"),
    usernameInput: () => cy.xpath("//input[@placeholder='Username']"),
    passwordInput: () => cy.xpath("//input[@placeholder='Password']"),
    loginBtn: () => cy.xpath("//div[@class='form-group']/input[contains(@class, 'btn btn-success')]"),
    errorMessage: (message) => cy.xpath("//span[@class='help-block']").contains(message),

    header: {
      welcomeMessage: (username) => cy.xpath(`//h1[text()='Welcome back, ${username}!']`)
    }
  },

  messages: {
    usernameEmptyError: 'Please enter username.',
    passwordEmptyError: 'Please enter your password.',
    usernameNotFoundError: 'No account found with that username.'
  },

  visit() {
    cy.visit(this.url);
    this.elements.logo().should('be.visible');
  },

  login(username, password) {
    this.elements.usernameInput().type(username);
    this.elements.passwordInput().type(password);
    this.elements.loginBtn().click();
  },

  verifyLogo() {
    this.elements
      .logo()
      .should('be.visible')
      .and('have.attr', 'src', 'https://pecode-software.web.app/static/media/icon-logo.f8576d05.svg')
      .and('have.attr', 'width', '189px')
      .and('have.attr', 'height', '81px');
  },

  verifyLoginPage() {
    this.verifyLogo();
    this.elements.title().should('be.visible');
    this.elements.usernameInput().should('be.visible');
    this.elements.passwordInput().should('be.visible');
    this.elements.loginBtn().should('be.visible');
  },

  verifyErrorMessage(message) {
    this.elements.errorMessage(message).should('be.visible');
  }
};
