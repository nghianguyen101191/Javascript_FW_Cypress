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
            createPlanData.test.request_body.name = 'cypressE2E_' + utils.getRandomNumberBetween()
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
                cy.validateSchema(schemaCreatePlan, response.body)
                planId = response.body.data.id
            })

        })
    });
    it('Update PlanId to Retrieve Plan Json', () => {
        cy.readFile("cypress/fixtures/api/teammanagement/getRetrievePlan.json", (err, retrievePlanData) => {
        }).then((retrievePlanData) => {
            retrievePlanData.test.request_body.id = planId
            cy.writeFile("cypress/fixtures/api/teammanagement/getRetrievePlan.json", JSON.stringify(retrievePlanData))
        })

    });
    it('Get retrieve plan', () => {
        cy.fixture('api/teammanagement/getRetrievePlan.json').then((data1) => {
            var data1 = data1[env]
            cy.request({
                method: 'POST',
                url: 'https://test-vanhanh.uat.shopee.vn/flash-sale/backend/api/plans/retrieve/',
                headers: headers,
                body: data1.request_body
            }).then((response) => {
                cy.log(JSON.stringify(response.body))
                expect(response.status).to.eq(200)
            })

        })
    })
})




//---This is Promise Js method - Will try in later
/*describe('create plan(‘flashsale01’)', function () {
    it('test_create_plan', () => {
        var planId
        cy.fixture('api/planmanagement/createPlan.json').then((data) => {
            var data = data[env]
            cy.request({
                method: 'POST',
                url: baseUrl + '/plans/create/',
                body: data.request_body,
                headers: headers
            }).then((response) => {
                return new Promise(resolve => {
                    expect(response).property('status').to.equal(200)
                    expect(response.body).to.not.be.null
                    var respBody = (response.body);
                    cy.log(response.body.data.id)
                    resolve(planId)
                })

            });
            it('get_plan', () => {
                console.log('sadsadasdasd')
            });

        })
    })
})
*/
//---This 's way to use chaining response
// describe('post user request', () => {
//     it.only('create user test', () => {
//         cy.fixture('api/planmanagement/createPlan.json').then((data) => {
//             var data = data[env]
//             //1. create user (POST)
//             cy.request({
//                 method: 'POST',
//                 url: baseUrl + '/plans/create/',
//                 headers: headers,
//                 body: data.request_body,
//             }).then((res) => {
//                 //cy.log(JSON.stringify(JSON.parse(res.body),1,1))
//                 cy.log(JSON.stringify(res.body))
//                 expect(res.status).to.eq(200)
//             }).then((res) => {
//                 const planId = res.body.data.id
//                 cy.log("user id is: " + planId)
//                 //2. get user (GET)
//                 cy.request({
//                     method: 'POST',
//                     url: 'https://test-vanhanh.uat.shopee.vn/flash-sale/backend/api/plans/retrieve/',
//                     headers: headers,
//                     body: {
//                         "id": planId
//                     }
//                 }).then((res) => {
//                     expect(res.status).to.eq(200)
//                     cy.log(JSON.stringify(JSON.parse(res.body), null, 2))
//                     //cy.log(JSON.stringify(res.body))
//                 })
//             })

//         })
//     })
// })


