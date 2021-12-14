// import { Given, And, Then, When } from 'cypress-cucumber-preprocessor/steps'
// import LoginPage from '../../pages/pageobject/homeitem/LoginPage'
// import PlanPageObject from '../../pages/pageobject/planitem/PlanPageObject'
// import ScheduleSettingPageObject from '../../pages/pageobject/planitem/ScheduleSettingPageObject'
// import Utils from '../../../fixtures/Utils'
// const loginPage = new LoginPage()
// const planPageObject = new PlanPageObject()
// const planScheduleSettingPageObject = new ScheduleSettingPageObject()
// const utils = new Utils()
// var totalDay = 3;
// var time = 22;
// var startTime = '01:00'
// var endTime = '04:00'
// describe('Plan Create', () => {
//     beforeEach(() => {
//         console.log('Get Token to Navigate to home page')

//     })

// })
// Given('I am in Plan Home Page', () => {
//     loginPage.navigateToHomePage()
// })
// When('I click Create New Plan', () => {
//     let planName = 'TestBDD01' + utils.getRandomNumberBetween()
//     let clusterName = 'Fashion'
//     planPageObject.clickCreateNewPlan()
//     planPageObject.inputPlanName(planName)
//     planPageObject.inputClusterName(clusterName)
//     planPageObject.clickOkButton()
// })
// Then('New Plan is created', () => {
//     planPageObject.verifyCreatePlanSuccessfullyMessage()
// })

// Given('I am in Schedule Setting Page', () => {

// })
// When('I input valid time to field', () => {
//     planScheduleSettingPageObject.inputTimeForScheduleSetting(totalDay, time, startTime, endTime)
// })
// When('I click Save Plan button', () => {
//     planScheduleSettingPageObject.clickSavePlanButton()
// })
// When('I click Next Stage button', () => {
//     planScheduleSettingPageObject.clickNextStageButton()
// })

