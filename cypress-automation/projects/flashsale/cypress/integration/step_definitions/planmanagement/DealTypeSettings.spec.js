// import { Given, And, Then, When } from 'cypress-cucumber-preprocessor/steps'
// import LoginPage from '../../pages/pageobject/homeitem/LoginPage'
// import PlanPageObject from '../../pages/pageobject/planitem/PlanPageObject'
// import ScheduleSettingPageObject from '../../pages/pageobject/planitem/ScheduleSettingPageObject'
// import DealTypeSettingsPageObject from '../../pages/pageobject/planitem/DealTypeSettingsPageObject'

// import Utils from '../../../fixtures/Utils'
// const loginPage = new LoginPage()
// const planPageObject = new PlanPageObject()
// const planScheduleSettingPageObject = new ScheduleSettingPageObject()
// const planDealTypeSettingsPageObject = new DealTypeSettingsPageObject()
// const utils = new Utils()
// describe('Plan Create', () => {
//     beforeEach(() => {
//         console.log('Get Token to Navigate to home page')

//     })

// })
// Given('I am in Plan Home Page', () => {
//     loginPage.navigateToHomePage()
// })
// When('I click Create New Plan', () => {
//     cy.fixture('ui/testdata.json').then((data) => {
//         let planName = data.planSettings.validPlanName + utils.getRandomNumberBetween()
//         let clusterName = data.planSettings.cluster
//         planPageObject.clickCreateNewPlan()
//         planPageObject.inputPlanName(planName)
//         planPageObject.inputClusterName(clusterName)
//         planPageObject.clickOkButton()
//     })
// })
// Then('New Plan is created', () => {
//     planPageObject.verifyCreatePlanSuccessfullyMessage()
// })

// /* Schedule Setting*/

// Given('I am in Schedule Setting Page', () => {

// })
// When('I input valid time to field', () => {
//     cy.fixture('ui/testdata.json').then((data) => {
//         let totalDay = data.scheduleSettings.totalDay
//         let time = data.scheduleSettings.time
//         let startTime = data.scheduleSettings.startTime
//         let endTime = data.scheduleSettings.endTime
//         planScheduleSettingPageObject.inputTimeForScheduleSetting(totalDay, time, startTime, endTime)
//     })
// })
// When('I click Save Plan button', () => {
//     planScheduleSettingPageObject.clickSavePlanButton()
// })
// When('I click Next Stage button', () => {
//     planScheduleSettingPageObject.clickNextStageButton()
// })

// Then('Schedule Setting is updated', () => {
//     cy.log('nghiamac0')
// })

// /* Deal Type Setting*/

// Given('I am in Deal Type Setting Page', () => {
//     planDealTypeSettingsPageObject.temp()
// })
// When('I input Slot', () => {
//     cy.fixture('ui/testdata.json').then((data) => {
//         let dealTypeName = data.dealTypeSettings.dealTypeName
//         let numberOfSlotBatch = data.dealTypeSettings.numberOfSlotBatch
//         let totalDay = data.scheduleSettings.totalDay
//         planDealTypeSettingsPageObject.inputInformation(dealTypeName, totalDay, numberOfSlotBatch)
//     })
// })
// And('I click Next Stage button', () => {
//     planDealTypeSettingsPageObject.clickNextStageButton()
// })

// Then('Deal Type Setting is updated', () => {
//     planDealTypeSettingsPageObject.temp()

// })
