describe('Orange HRM Tests', () => {
  it('login - success', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

    cy.get('input[name="username"]').type('Admin');
    cy.get('input[name="password"]').type('admin123');
    cy.get('.oxd-button').click();
    
    // Verifica se a URL é a esperada após o login
    cy.location('pathname').should('equal', '/web/index.php/dashboard/index');
    cy.get('.oxd-topbar-header-breadcrumb-module').contains('Dashboard')

  });
  it('login - success', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

    cy.get('input[name="username"]').type('test');
    cy.get('input[name="password"]').type('test');
    cy.get('.oxd-button').click();
    cy.get("[role='alert']")
    
  });
});