import { Given, And, Then, When } from "cypress-cucumber-preprocessor/steps";
import LoginPage from '../../pages/pageobject/homeitem/LoginPage'
import PlanPage from '../../pages/pageobject/planitem/PlanPageObject'
import Utils from '../../../fixtures/Utils'
const loginPage = new LoginPage()
const planPage = new PlanPage()
const utils = new Utils()

describe('Plan Create', () => {
    beforeEach(() => {
        console.log('Get Token to Navigate to home page')

    })
})

Given('I am in Plan Home Page', () => {
    loginPage.navigateToHomePage()
})
When('I click Create New Plan {string}', (planname) => {
    let planName1 = planname + utils.getRandomNumberBetween()
    let clusterName = 'Fashion'
    planPage.clickCreateNewPlan()
    planPage.inputPlanName(planName1)
    planPage.inputClusterName(clusterName)
    planPage.clickOkButton()
})
Then('New Plan is created', () => {
    planPage.verifyCreatePlanSuccessfullyMessage()
})
