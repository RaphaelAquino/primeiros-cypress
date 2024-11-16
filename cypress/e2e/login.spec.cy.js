describe('Orange HRM tests', () => {
    it('Login - success', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.get(":input[name='username']").type('Admin')
        cy.get(":input[name='password']").type('admin123')
        cy.get('.oxd-button').click() 
        cy.get('.oxd-topbar-header-breadcrumb > .oxd-text').contains('Dashboard')
    })
    it('Login - fail', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.get(":input[name='username']").type('Admin')
        cy.get(":input[name='password']").type('admin1235')
        cy.get('.oxd-button').click() 
        cy.get('.oxd-alert-content > .oxd-text').contains('Invalid credentials')
    })
})