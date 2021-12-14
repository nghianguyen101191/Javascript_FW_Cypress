//import Utils from '../../../utils/Utils.js'
import Utils from '../../../../fixtures/Utils.js'
import { schemaCreatePlan } from "../../../../schema/schema-create-plan";

// const path = require("path")
// var axios = require('axios')
// var FormData = require('form-data');


const env = Cypress.env('env')
const baseUrl = Cypress.env('config').baseUrl
const headers = Cypress.env('config').headers
const headers_upload = Cypress.env('config').header_upload
const xPathFile = './FASHION_distribution.csv'
var planId
var fs = require('fs');
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
    // it("XHR Way", () => {
    //     function form_request(method, url, formData, done) {
    //         const xhr = new XMLHttpRequest();
    //         xhr.open(method, url);
    //         xhr.setRequestHeader("authorization", "JWT eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoyMjk4LCJ1c2VybmFtZSI6InRyaW5naGlhLm5ndXllbiIsImV4cCI6MTYyOTQ2ODE5MSwiZW1haWwiOiJ0cmluZ2hpYS5uZ3V5ZW5Ac2hvcGVlLmNvbSJ9.5WA__tXHagM9Jn_kTw8y5wDRJW29aa7eDBByQCupFS8");
    //         xhr.onload = function () {
    //             done(xhr);
    //         };
    //         xhr.onerror = function () {
    //             done(xhr);
    //         };
    //         xhr.send(formData);
    //     }

    //     const fileName = "FASHION_distribution.csv";
    //     const method = "POST";
    //     const url = "https://test-vanhanh.uat.shopee.vn/flash-sale/backend/api/plans/distribution/update/";
    //     //const fileType = "image/jpg";

    //     cy.fixture(fileName, "binary")
    //         .then((txtBin) => Cypress.Blob.binaryStringToBlob(txtBin))
    //         .then((blob) => {
    //             const formData = new FormData();
    //             formData.append("min_slot_rm_day", "2");
    //             formData.append("id", planId);
    //             formData.append("file", blob, fileName);
    //             form_request(method, url, formData, function (response) {
    //                 console.log(response.response)
    //                 expect(response.status).to.eq(200);
    //             });
    //         });
    // });
    it("XHR Way", () => {
        //     const fileName = 'FASHION_distribution.csv';
        //     const method = 'POST';
        //     const URL = "https://test-vanhanh.uat.shopee.vn/flash-sale/backend/api/plans/distribution/update/";
        //     const headers = headers;
        //     const fileType = "application/text";

        //     cy.fixture(fileName, 'binary').then((res) => {
        //         const blob = Cypress.Blob.binaryStringToBlob(res, fileType);
        //         const formData = new FormData();
        //         formData.append('file', blob, fileName);
        //         formData.append('id', planId);
        //         formData.append('min_slot_rm_day', 2);

        //         cy.multipartFormRequest(method, URL, headers, formData, function (response) {
        //             expect(response.status).to.equal(200);
        //         })
        //     })




        // })




    })
})


