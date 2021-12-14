import Utils from '../../../../fixtures/Utils.js'
import { schemaCreatePlan } from "../../../../schema/schema-create-plan";
const env = Cypress.env('env')
const baseUrl = Cypress.env('config').baseUrl
const headers = Cypress.env('config').headers
var planId
const utils = new Utils()

describe('Update Create Plan Json', () => {
    it('UpdateDataToFile', () => {
        cy.readFile("cypress/fixtures/api/planmanagement/createPlan.json", (err, createPlanData) => {
            if (err) {
                return console.error(err);
            };
        }).then((createPlanData) => {
            createPlanData.test.request_body.name = 'cypressTest' + utils.getRandomNumberBetween()
            cy.writeFile("cypress/fixtures/api/planmanagement/createPlan.json", JSON.stringify(createPlanData))
        })

    });
    it('Create New Plan', () => {
        cy.fixture('api/planmanagement/createPlan.json').then((data) => {
            var data = data[env]
            cy.request({
                method: 'POST',
                url: baseUrl + '/plans/create/',
                headers: headers,
                body: data.request_body,
            }).then((response) => {
                cy.log(JSON.stringify(response.body))
                expect(response.status).to.eq(200)
                //cy.validateSchema(schemaCreatePlan, response.body)
                planId = response.body.data.id
            })

        })
    });
    it('Update PlanId to Update Schedule Setting Json', () => {
        cy.readFile("cypress/fixtures/api/planmanagement/updatePlanScheduleSetting.json", (err, updateScheduleSettingData) => {
        }).then((updateScheduleSettingData) => {
            updateScheduleSettingData.test.request_body.id = planId
            cy.writeFile("cypress/fixtures/api/planmanagement/updatePlanScheduleSetting.json", JSON.stringify(updateScheduleSettingData))
        })

    });
    it('Update Schedule Setting Plan', () => {
        cy.fixture('api/planmanagement/updatePlanScheduleSetting.json').then((data1) => {
            var data1 = data1[env]
            cy.request({
                method: 'POST',
                url: baseUrl + '/plans/update/',
                headers: headers,
                body: data1.request_body
            }).then((response) => {
                cy.log(JSON.stringify(response.body))
                expect(response.status).to.eq(200)
            })

        })
    })
})