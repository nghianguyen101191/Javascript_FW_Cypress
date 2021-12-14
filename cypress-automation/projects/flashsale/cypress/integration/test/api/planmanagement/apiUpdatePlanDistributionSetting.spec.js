import Utils from '../../../../fixtures/Utils.js'
import { schemaCreatePlan } from "../../../../schema/schema-create-plan";
const env = Cypress.env('env')
const baseUrl = Cypress.env('config').baseUrl
const headers = Cypress.env('config').headers
const headers_upload = Cypress.env('config').header_upload
const xPathFile = './FASHION_distribution.csv'
var FormData = require('form-data');
var planId
//var fs = require('fs');
const utils = new Utils()
class a1 {
    nghia() {
        this.planId = planId
        return planId
    }
}

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
    });
    it('Update PlanId to Update Deal Type Setting Json', () => {
        cy.readFile("cypress/fixtures/api/planmanagement/updatePlanDealTypeSetting.json", (err, updateDealTypeSettingData) => {
        }).then((updateDealTypeSettingData) => {
            updateDealTypeSettingData.test.request_body.id = planId
            cy.writeFile("cypress/fixtures/api/planmanagement/updatePlanDealTypeSetting.json", JSON.stringify(updateDealTypeSettingData))
        })

    });
    it('Update DealType Setting Plan', () => {
        cy.fixture('api/planmanagement/updatePlanDealTypeSetting.json').then((data1) => {
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
    });
    it('Update PlanId to Update Distribution Setting Json', () => {
        cy.readFile("cypress/fixtures/api/planmanagement/updatePlanDistributionSetting.json", (err, updateDistributionSettingData) => {
        }).then((updateDistributionSettingData) => {
            updateDistributionSettingData.test.request_body.id = planId
            cy.writeFile("cypress/fixtures/api/planmanagement/updatePlanDistributionSetting.json", JSON.stringify(updateDistributionSettingData))
        })

    });
    it('Update Distribution Setting Plan 01', () => {
        cy.fixture('api/planmanagement/updatePlanDistributionSetting.json').then((data1) => {
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
    });

    // it('Update Distribution Ratio File For Teams 02', () => {
    //     cy.fixture('/api/planmanagement/FASHION_distribution.csv', "binary")
    //         .then(data => {
    //             const fileName = "FASHION_distribution.csv";
    //             const blob = Cypress.Blob.base64StringToBlob(btoa(JSON.stringify(data)), 'multipart/form-data');
    //             const file = new File([blob], fileName);
    //             const formData = new FormData();
    //             formData.set('id', planId);
    //             formData.set('min_slot_rm_day', 10);
    //             formData.set('file', file);
    //             cy.uploadFile('https://test-vanhanh.uat.shopee.vn/flash-sale/backend/api/plans/distribution/update/', formData).as('createANewUser');
    //         });

    // });

    it('Update Distribution Ratio File For Teams 02', () => {
        // "content-type": "multipart/form-data"
        cy.fixture('/api/planmanagement/FASHION_distribution.csv', "binary")
            .then(data => {
                const fileName = "./FASHION_distribution.csv";
                const blob = Cypress.Blob.base64StringToBlob(btoa(JSON.stringify(data)), 'multipart/form-data');
                const file = new File([blob], fileName);
                const formData = new FormData();
                formData.append("file", blob, fileName);
                cy.request({
                    url: "https://test-vanhanh.uat.shopee.vn/flash-sale/backend/api/plans/distribution/update/",
                    method: "POST",
                    headers: headers,
                    form: true,
                    body: {
                        min_slot_rm_day: 2,
                        id: planId,
                        file: file
                    }
                }).then(response => {
                    //cy.uploadFile('https://test-vanhanh.uat.shopee.vn/flash-sale/backend/api/plans/distribution/update/', formData).as('createANewUser');
                    cy.log(response.body)
                    console.log("response", response);
                })
            })
    })



})



