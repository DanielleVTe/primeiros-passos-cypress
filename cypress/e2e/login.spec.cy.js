import userData from '../fixtures/users/userData.json'

describe('Orange HRM Tests', () => {

  const selectorList = {
    usernameField: "[name='username']",
    passwordField: "[name='password']",
    loginButton: "[type='submit']",
    sectionTitleTopBar: ".oxd-topbar-header-breadcrumb-module",
    dashboardGrid: ".orangehrm-dashboard-grid",
    wrongCredentialAlert:"[role='alert']"
    }
    
  it('login - success', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

    cy.get (selectorList.usernameField).type(userData.userSucess.username)
    cy.get(selectorList.passwordField).type(userData.userSucess.password)
    cy.get(selectorList.loginButton).click();
    
    // Verifica se a URL é a esperada após o login
    cy.location('pathname').should('equal', '/web/index.php/dashboard/index');
    cy.get(selectorList.dashboardGrid)
  })
  it('login - Fail', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

    cy.get(selectorList.usernameField).type(userData.userFail.username);
    cy.get(selectorList.passwordField).type(userData.userFail.password);
    cy.get(selectorList.loginButton).click();
    cy.get(selectorList.wrongCredentialAlert)    
    // Verifica se o alerta de credenciais incorretas aparece
    cy.get(selectorList.wrongCredentialAlert).should('be.visible');
  });
});