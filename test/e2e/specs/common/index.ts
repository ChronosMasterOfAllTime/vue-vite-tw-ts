const { Given, When, Then } = require('cypress-cucumber-preprocessor/steps')

Then('I see {string} in the title', (val: string) => {
  cy.title().should('include', val)
})

Cypress.on('uncaught:exception', (err, _runnable) => {
  console.error(err)
})
