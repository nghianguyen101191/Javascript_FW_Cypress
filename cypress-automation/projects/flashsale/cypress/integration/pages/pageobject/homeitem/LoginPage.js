const env = Cypress.env('env')
const baseUrlUi = Cypress.env('config').baseUrlUi
class LoginPage {
    navigateToHomePage() {
        cy.visit(baseUrlUi)
    }
}
export default LoginPage