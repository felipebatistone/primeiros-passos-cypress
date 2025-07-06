describe('orange hrm tests', () => {

  const selectorlist = {
    usernameField: "[name='username']",
    passwordField: "[name='password']",
    loginButton: "[type='submit']",
    sectionTitleTopBar: '.oxd-topbar-header-breadcrumb-module',
    wrongCredentialsAlert: "[role='alert']"
  }

  it('login-success', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get(selectorlist.usernameField).type(`Admin`)
    cy.get(selectorlist.passwordField).type(`admin123`)
    cy.get(selectorlist.loginButton).click()
    cy.location('pathname').should('eq', '/web/index.php/dashboard/index')
    cy.get(selectorlist.sectionTitleTopBar).contains('Dashboard')
  })
  it('login-fail', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get("[name='username']").type(`teste`)
    cy.get("[name='password']").type(`teste`)
    cy.get("[type='submit']").click()
    cy.get(selectorlist.wrongCredentialsAlert)
    
  })
})