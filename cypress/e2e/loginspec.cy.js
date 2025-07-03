describe('orange hrm tests', () => {
  it('login-success', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get("[name='username']").type(`Admin`)
    cy.get("[name='password']").type(`admin123`)
    cy.get('.oxd-button').click()
    cy.location('pathname').should('eq', '/web/index.php/dashboard/index')
    cy.get('.oxd-topbar-header-breadcrumb-module').contains('Dashboard')
  })
  it('login-fail', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get("[name='username']").type(`teste`)
    cy.get("[name='password']").type(`teste`)
    cy.get('.oxd-button').click()
    cy.get('.oxd-alert-content > .oxd-text')
    
  })
})