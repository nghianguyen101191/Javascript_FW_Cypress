//const inputPlanName = '//input[@id="name"]'
const inputPlanNameTextField = 'input#name'
const inputClusterNameTextField = 'input#cluster'
const dropDownListCluster = '(//span[@class="ant-select-arrow"])[2]'
import Utils from '../../../../fixtures/Utils'
const utils = new Utils()

class PlanPage {
    clickCreateNewPlan() {
        cy.get('.ant-btn', { timeout: 10000 }).contains('Create New Plan').as('createBtn')
        cy.get('@createBtn').click()
    }
    inputPlanName(planName) {
        cy.get(inputPlanNameTextField).type(planName)
    }
    inputClusterName(clusterName) {
        //cy.get(inputClusterNameTextField).type(`${clusterName}{enter}`)
        cy.get(inputClusterNameTextField).click()
        cy.xpath("//div[@class='ant-select-item-option-content' and contains(text(),'" + clusterName + "')]").click()
    }
    clickOkButton() {
        cy.get('button').contains('OK').click()
    }
    verifyCreatePlanSuccessfullyMessage() {
        cy.get('.ant-message-notice-content').contains('Create plan successfully!').should('have.length', 1)
    }
}
export default PlanPage



