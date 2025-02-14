describe('Orange HRM Tests', () => {

  const selectorList = {
    usernameField: "[name='username']",
    passwordField: "[name='password']",
    loginButton: "[type='submit']",
    sectionTitleTopBar: ".oxd-topbar-header-breadcrumb-module",
    wrongCredentialAlert:"[role='alert']"
    }

  it('login - success', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

    cy.get (selectorList.usernameField).type('Admin')
    cy.get(selectorList.passwordField).type('admin123')
    cy.get(selectorList.loginButton).click();
    
    // Verifica se a URL é a esperada após o login
    cy.location('pathname').should('equal', '/web/index.php/dashboard/index');
    cy.get(selectorList.sectionTitleTopBar).contains('Dashboard')
  })
  it('login - Fail', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

    cy.get(selectorList.usernameField).type('test');
    cy.get(selectorList.passwordField).type('test');
    cy.get(selectorList.loginButton).click();
    cy.get(selectorList.wrongCredentialAlert)    
    // Verifica se o alerta de credenciais incorretas aparece
    cy.get(selectorList.wrongCredentialAlert).should('be.visible');
  });
});