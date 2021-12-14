/// <reference types="cypress" />
import "./commands";
const env = Cypress.env('env')
//const tokenUrl = Cypress.env('config').getTokenUrl
//const baseUrlUi = Cypress.env('config').baseUrlUi
// ***********************************************************
// This example plugins/index.js can be used to load plugins
//
// You can change the location of this file or turn off loading
// the plugins file with the 'pluginsFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/plugins-guide
// ***********************************************************

// This function is called when a project is opened or re-opened (e.g. due to
// the project's config changing)

/**
 * @type {Cypress.PluginConfig}
 */
// eslint-disable-next-line no-unused-vars
require('cypress-xpath')
import 'cypress-mochawesome-reporter/register';

before(() => {
    const env = Cypress.env('env')
    cy.task('log', 'Environment: ' + env)

})

beforeEach(() => {
    //Get token from BE to skip SSO
    cy.intercept('POST', Cypress.env('config').getTokenUrl, { fixture: 'api/token/token.json' }).as('getToken')
    cy.fixture('userData').as('data')
    
})