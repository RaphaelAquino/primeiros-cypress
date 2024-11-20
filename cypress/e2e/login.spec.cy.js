import userData from '../fixtures/data-user.json' 

describe('Orange HRM tests', () => {
    const selectorsList = {
        usernameField: ":input[name='username']",
        passwordField: ":input[name='password']",
        loginButton: '.oxd-button'
    }

    it('Login - success', () => {
        cy.visit('/auth/login')
        cy.get(selectorsList.usernameField).type(userData.userSuccess.userName)
        cy.get(selectorsList.passwordField).type(userData.userSuccess.userPassword)
        cy.get(selectorsList.loginButton).click() 
        cy.get('.oxd-topbar-header-breadcrumb > .oxd-text').contains('Dashboard')
    })
    it('Login - fail', () => {
        cy.visit('/auth/login')
        cy.get(selectorsList.usernameField).type('Admin')
        cy.get(selectorsList.passwordField).type('admin1235')
        cy.get(selectorsList.loginButton).click() 
        cy.get('.oxd-alert-content > .oxd-text').contains('Invalid credentials')
    })
})