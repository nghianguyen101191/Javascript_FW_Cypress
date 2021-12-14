const submissionDeadLineIcon = 'input[id="submission_deadline"]'
const scheduleSettingLabel = 'h5'
const inputStartTimeFieldOfBatch = '.ant-popover .ant-picker .ant-picker-input-active > input[placeholder="Start time"]'
const inputEndTimeFieldOfBatch = '.ant-popover .ant-picker .ant-picker-input-active > input[placeholder="End time"]'
import Utils from '../../../../fixtures/Utils'
const utils = new Utils()
class ScheduleSettingPageObject {

    /* Xpath Constructor */

    calendarIcon = () => cy.xpath("//div[@class='ant-picker ant-picker-range']")

    beginingTime = (time) => cy.xpath("(//div[@class='ant-picker-cell-inner' and text()='" + time + "'])[1]")
    endingTime = (time) => cy.xpath("(//div[@class='ant-picker-cell-inner' and text()='" + time + "'])[1]")
    submissionDeadLine = (time) => cy.xpath("(//div[@class='ant-picker-cell-inner' and text()='" + time + "'])[3]")
    newBatchButton = (dateOrder) => cy.xpath("(//span[.='New Batch'])[" + dateOrder + "]")
    newTimeButton = (newTimeOrder) => cy.xpath("(//span[.='New Time'])[" + newTimeOrder + "]")
    okButton = () => cy.xpath("(//span[.='Ok'])")
    createBatchButton = (batchOrder) => cy.xpath("(//span[.='Create'])[" + batchOrder + "]")
    savePlanButton = () => cy.xpath("//span[.='Save Plan']")
    nextStageButton = () => cy.xpath("//span[.='Next Stage']")

    /*Page Object Methods*/
    verifyContainScheduleSettingLabel() {
        cy.get(scheduleSettingLabel).contains('Schedule Settings').should('have.length', 1)

    }
    clickCalendar() {
        this.calendarIcon().click()
    }
    inputBeginingTime(time) {
        this.beginingTime(time).click()
    }
    inputEndingTime(time) {
        this.endingTime(time).click()
    }
    clickSubmissionDeadLine() {
        cy.get(submissionDeadLineIcon).click()

    }
    inputSubmissionDeadline(time) {
        this.submissionDeadLine(time).click()
    }
    clickNewBatchButton(dateOrder) {
        this.newBatchButton(dateOrder).click()
    }
    clickNewTimeButton(newTimeOrder) {
        this.newTimeButton(newTimeOrder).click()
    }
    inputBatchTime(startTime, endTime) {
        cy.get(inputStartTimeFieldOfBatch).click().type(startTime)
        this.okButton().click()
        cy.get(inputEndTimeFieldOfBatch).click().type(endTime)
        this.okButton().click()
    }
    clickCreateBatchButton(batchOrder) {
        this.createBatchButton(batchOrder).click()
    }
    createBatchTime(totalDay, startTime, endTime) {
        for (let i = 1; i <= totalDay; i++) {
            this.clickNewBatchButton(i)
            this.clickNewTimeButton(i)
            this.inputBatchTime(startTime, endTime)
            this.clickCreateBatchButton(i)
        }
    }
    clickSavePlanButton() {
        this.savePlanButton().click()
    }
    clickNextStageButton() {
        this.nextStageButton().click()
    }
    inputTimeForScheduleSetting(totalDay, time, startTime, endTime) {
        this.clickCalendar()
        this.inputBeginingTime(time)
        this.inputEndingTime(time + (totalDay - 1))
        this.clickSubmissionDeadLine()
        this.inputSubmissionDeadline(time - 1)
        this.createBatchTime(totalDay, startTime, endTime)
        
    }

}
export default ScheduleSettingPageObject



