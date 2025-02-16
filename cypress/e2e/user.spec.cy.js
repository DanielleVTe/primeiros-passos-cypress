import userData from '../fixtures/users/userData.json'

describe('Orange HRM Tests', () => {

  const selectorList = {
    usernameField: "[name='username']",
    passwordField: "[name='password']",
    loginButton: "[type='submit']",
    sectionTitleTopBar: ".oxd-topbar-header-breadcrumb-module",
    dashboardGrid: ".orangehrm-dashboard-grid",
    wrongCredentialAlert:"[role='alert']",
    myInfoButton:'[href="/web/index.php/pim/viewMyDetails"]',
    firstNameField:"[name='firstName']",
    middleNameField:"[name='middleName']",
    lastNameField:"[name='lastName']",
    genericField:".oxd-input--active",
    dateField:"(placeholder='yyyy-mm-dd')",
    dateCloseButton: ".--close",
       }
    
  it('User Info Update - success', () => {
    cy.visit('auth/login');

    cy.get (selectorList.usernameField).type(userData.userSucess.username);
    cy.get(selectorList.passwordField).type(userData.userSucess.password);
    cy.get(selectorList.loginButton).click();
    
    // Verifica se a URL é a esperada após o login
    cy.location('pathname').should('equal', '/web/index.php/dashboard/index');
    cy.get(selectorList.dashboardGrid)
    cy.get(selectorList.myInfoButton). click()
    cy.get(selectorList.firstNameField).clear().type('FirstNameTest');
    cy.get(selectorList.middleNameField).clear().type('MiddleNameTest');
    cy.get(selectorList.lastNameField).clear().type('LasttNameTest');  
    cy.get(selectorList.genericField).eq(3).clear().type('Employee');
    cy.get(selectorList.genericField).eq(4).clear().type('OtherIDTest');
    cy.get(selectorList.genericField).eq(5).clear().type('DriversLicense');
    cy.get(selectorList.genericField).eq(6).clear().type('2025-03-10');
    cy.get(selectorList.dateCloseButton). click();
    cy.get(selectorList.genericField).eq(8).clear().type('ssnNumbTest');
    
  })
  it('login - Fail', () => {
    cy.visit('/auth/login');

    cy.get(selectorList.usernameField).type(userData.userFail.username);
    cy.get(selectorList.passwordField).type(userData.userFail.password);
    cy.get(selectorList.loginButton).click();
    cy.get(selectorList.wrongCredentialAlert)    
    // Verifica se o alerta de credenciais incorretas aparece
    cy.get(selectorList.wrongCredentialAlert).should('be.visible');
  });
});