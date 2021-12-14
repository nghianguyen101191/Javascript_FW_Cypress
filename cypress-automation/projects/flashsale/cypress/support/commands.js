import { validateSchema } from "./validate-schema-command";
import { uploadFileRequest } from "./file-upload-command";
import 'cypress-file-upload';

// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
Cypress.Commands.add('clickIfPresent', (element) => {
  cy.get('body').then((body) => {
    if (body.find(element).length > 0) {
      cy.xpath(element).click();
    }
  });
});
Cypress.Commands.add("validateSchema", validateSchema);
Cypress.Commands.add("uploadFileRequest", uploadFileRequest);
/**
 * This Command uploads a file to a given POST endpoint
 * 
 * @param {String} url - full URL of the upload endpoint
 * @param {String} formData - formaData to be passed as body to endpoint
 */
// Performs an XMLHttpRequest instead of a cy.request (able to send data as FormData - multipart/form-data)
Cypress.Commands.add('multipartFormRequest', (method, URL, formData, headers, done) => {
  const xhr = new XMLHttpRequest();
  xhr.open(method, URL);
  xhr.setRequestHeader("accept", "application/json");
  xhr.setRequestHeader("Content-Type", "multipart/form-data");
  if (headers) {
    headers.forEach(function (header) {
      xhr.setRequestHeader(header.name, header.value);
    });
  }
  xhr.onload = function () {
    done(xhr);
  };
  xhr.onerror = function () {
    done(xhr);
  };
  xhr.send(formData);
})



