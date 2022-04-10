const { Given, When, Then } = require('cypress-cucumber-preprocessor/steps')

Given('I open the home page', () => {
  cy.visit(Cypress.env('BASE_URL'))
})

Given('I can see the {string} element', (attr: string) => {
  cy.dataCy(attr)
})

When('I click on the {string} element', (attr: string) => {
  const el = cy.dataCy(attr)

  el.click()
})

Then('I see {string} in the title', (val: string) => {
  cy.title().should('include', val)
})

Cypress.on('uncaught:exception', (err, _runnable) => {
  console.error(err)
})
