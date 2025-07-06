import userData from '../fixtures/user-data.json'

describe('orange hrm tests', () => {

  const selectorlist = {
    usernameField: "[name='username']",
    passwordField: "[name='password']",
    loginButton: "[type='submit']",
    sectionTitleTopBar: '.oxd-topbar-header-breadcrumb-module',
    dashboarGrid: '.orangehrm-dashboard-grid',
    wrongCredentialsAlert: "[role='alert']"
  }

  const userData = {

    userSuccess: {
      username: 'Admin',
      password: 'admin123'
    },
    userFail: {
      username: 'teste',
      password: 'teste'
    }
  }


  it('login-success', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get(selectorlist.usernameField).type(userData.userSuccess.username)
    cy.get(selectorlist.passwordField).type(userData.userSuccess.password)
    cy.get(selectorlist.loginButton).click()
    cy.location('pathname').should('eq', '/web/index.php/dashboard/index')
    cy.get(selectorlist.dashboarGrid)
  })
  it('login-fail', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get(selectorlist.usernameField).type(userData.userFail.username)
    cy.get(selectorlist.passwordField).type(userData.userFail.password)
    cy.get(selectorlist.loginButton).click()
    cy.get(selectorlist.wrongCredentialsAlert)
    
  })
})