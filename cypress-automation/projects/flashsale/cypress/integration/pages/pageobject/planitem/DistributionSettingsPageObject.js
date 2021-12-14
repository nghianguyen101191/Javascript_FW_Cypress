const dropdownListIconDealType = '.ant-select-selector'
const minSlotRmPlanTextField = ".flex-wrap.justify-content-between.vertical-center input[role='spinbutton']"
const uploadRatioFile = 'input[type="file"]'

import Utils from '../../../../fixtures/Utils'
class DistributionSettingsPageObject {

    /* Xpath Constructor */
    //minSlotRmPlanTextField = () => cy.xpath("(//input[@class='ant-input-number-input' and @role='spinbutton'])[1]")
    savePlanButton = () => cy.xpath("//span[.='Save Plan']")
    duplicationSettingItemDay = () => cy.xpath("//input[@id='item_day']")
    duplicationSettingItemPlan = () => cy.xpath("//input[@id='item_plan']")
    duplicationSettingSellerBatch = () => cy.xpath("//input[@id='seller_batch']")
    duplicationSettingSellerDay = () => cy.xpath("//input[@id='seller_day']")
    duplicationSettingSellerPlan = () => cy.xpath("//input[@id='seller_plan']")




    /*Page Object Methods*/
    temp() {
        cy.log("somethings")
    }

    inputMinSlotRmPlanDay(minSlot) {
        //this.minSlotRmPlanTextField().type(minSlot)
        cy.get(minSlotRmPlanTextField).type(minSlot)
    }
    inputItemDay(itemDay) {
        this.duplicationSettingItemDay().type(itemDay)
    }
    inputItemPlan(itemPlan) {
        this.duplicationSettingItemPlan().type(itemPlan)
    }
    inputSellerDay(sellerDay) {
        this.duplicationSettingSellerDay().type(sellerDay)
    }
    inputSellerPlan(sellerPlan) {
        this.duplicationSettingSellerPlan().type(sellerPlan)
    }
    inputSellerBatch(sellerBatch) {
        this.duplicationSettingSellerBatch().type(sellerBatch)
    }

    clickSavePlanButton() {
        this.savePlanButton().click()
        cy.wait(2000)
    }

    inputData(minSlot, itemDay, itemPlan, sellerBatch, sellerDay, sellerPlan) {
        this.inputMinSlotRmPlanDay(minSlot)
        this.inputItemDay(itemDay)
        this.inputItemPlan(itemPlan)
        this.inputSellerBatch(sellerBatch)
        this.inputSellerDay(sellerDay)
        this.inputSellerPlan(sellerPlan)
        this.clickSavePlanButton()
    }

    uploadRatioFile(filePath) {
        cy.get(uploadRatioFile).attachFile(filePath)
    }
    verifyUploadFileSuccessfully(messageContent) {
        cy.contains(messageContent)
    }



    clickSavePlanButton() {
        this.savePlanButton().click()
    }

    clickDropDownDealTypeList() {
        cy.get(dropdownListIconDealType).click()
    }




}
export default DistributionSettingsPageObject



