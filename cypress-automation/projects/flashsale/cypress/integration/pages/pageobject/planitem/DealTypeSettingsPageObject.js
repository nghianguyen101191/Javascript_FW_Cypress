const dropdownListIconDealType = '.ant-select-selector'
const scheduleSettingLabel = 'h5'
import Utils from '../../../../fixtures/Utils'
class DealTypeSettingsPageObject {

    /* Xpath Constructor */
    createNowButton = () => cy.xpath("//span[.='Create Now']")
    valueDealTypeName = (dealTypeName) => cy.xpath("//div[@class='ant-select-item-option-content' and text()='" + dealTypeName + "']")
    createNewDealTypeButton = () => cy.xpath("//span[.='Create']")
    valueSlotBatch = (totalDay) => cy.xpath("(//input[@class='ant-input-number-input'])[" + totalDay + "]")
    nextStageButton = () => cy.xpath("//span[.='Next Stage']")
    savePlanButton = () => cy.xpath("//span[.='Save Plan']")
    enableButton = () => cy.xpath("//span[.='Enable']")
    spaceElement = () => cy.xpath("//div[@class='jsx-1106060548 bottom-wrapper']")
    //createBatchButton = () => cy.xpath("//span[.='Create']")



    /*Page Object Methods*/
    temp() {
        cy.log('nghidsadas')
    }
    clickCreateNowButton() {
        this.createNowButton().click()
    }

    clickDropDownDealTypeList() {
        cy.get(dropdownListIconDealType).click()
    }
    inputDealTypeName(dealTypeName) {
        this.valueDealTypeName(dealTypeName).click()
    }
    clickCreateNewDealTypeButton() {
        this.createNewDealTypeButton().click()
    }
    inputValueSlotBatch(totalDay, numberOfSlotBatch) {
        for (let i = 1; i <= totalDay; i++) {
            this.valueSlotBatch(i).type(numberOfSlotBatch)
            cy.wait(2000)
        }

    }
    clickNextStageButton() {
        this.nextStageButton().click()
        cy.wait(2000)
    }
    clickSavePlanButton() {
        this.savePlanButton().click()

    }
    clickSlotBatchAgain(totalDay) {
        for (let i = 1; i <= totalDay; i++) {
            this.valueSlotBatch(i).click()
            cy.wait(2000)
        }
    }
    inputInformation(dealTypeName, totalDay, numberOfSlotBatch) {
        this.clickCreateNowButton()
        this.clickDropDownDealTypeList()
        this.inputDealTypeName(dealTypeName)
        this.clickCreateNewDealTypeButton()
        this.inputValueSlotBatch(totalDay, numberOfSlotBatch)
        this.clickSavePlanButton()
        this.clickSlotBatchAgain(totalDay)
        this.clickNextStageButton()
    }



}
export default DealTypeSettingsPageObject



