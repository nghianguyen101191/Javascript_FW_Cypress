class Utils {
    getRandomNumberBetween() {
        return Math.floor(Math.random() * 10000) + '_' + Date.now()
    }
    readDataFromJson() {
        return cy.fixture('userData').as('user')

    }
}
export default Utils
