const headers = Cypress.env('config').headers
const _ = require('lodash')
//const path = require("path")
//var axios = require('axios');
//var FormData = require('form-data');
//var fs = require('fs');
class Utils {

    //Try in later
    updateDataToJson(jsonPath, xpath, keyValue) {
        cy.readFile(jsonPath, (err, data) => {
            if (err) {
                return console.error(err);
            };
        }).then((data) => {
            return data
        })

    }
    // axiosSingleFileUpload(planId) {
    //     const path = require("path")

    //     var axios = require('axios');
    //     var FormData = require('form-data');
    //     var fs = require('fs');
    //     const filePath = path.join(__dirname, "../fixtures/FASHION_distribution.csv")
    //     var data = new FormData();
    //     data.append('min_slot_rm_day', 2);
    //     data.append('id', planId);
    //     data.append('file', fs.createReadStream(filePath));

    //     var config = {
    //         method: 'post',
    //         url: 'https://test-vanhanh.uat.shopee.vn/flash-sale/backend/api/plans/distribution/update/',
    //         headers: {
    //             ...data.getHeaders()
    //         },
    //         data: data
    //     };

    //     return new Promise(async (resolve, reject) => {
    //         const response = await axios(config)
    //         const respBody = await JSON.stringify(response.data)
    //         resolve(respBody);
    //     })
    // }

}
export default Utils

//https://www.liquid-technologies.com/online-json-to-schema-convertern