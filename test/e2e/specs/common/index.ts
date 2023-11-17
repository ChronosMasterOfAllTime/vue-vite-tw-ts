import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor'

Given('I open the home page', () => {
  cy.visit(Cypress.env('BASE_URL'), {
    onBeforeLoad(win) {
      cy.stub(win, 'matchMedia')
        .callThrough()
        .withArgs('(prefers-color-scheme: dark)')
        .returns({
          matches: false,
          addListener() {}
        })
    }
  })
})

Given('I refresh the page', () => {
  cy.reload()
})

Given('I can see the {string} element', (attr: string) => {
  cy.dataCy(attr)
})

When('I click on the {string} element', (attr: string) => {
  const el = cy.dataCy(attr)

  el.click()
})

When(
  'I trigger the {string} event on the {string} element',
  (event: string, attr: string) => {
    const el = cy.dataCy(attr)

    el.trigger(event)
  }
)

Then('I see {string} in the title', (val: string) => {
  cy.title().should('include', val)
})

Then(
  'The {string} style on the {string} element should be {string}',
  (style: string, attr: string, val: string) => {
    const el = cy.dataCy(attr)

    el.should('have.css', style, val)
  }
)

Then(
  'The {string} element should have class {string}',
  (attr: string, val: string) => {
    const el = cy.dataCy(attr)

    el.should('have.class', val)
  }
)

Then(
  'The {string} element should not have class {string}',
  (attr: string, val: string) => {
    const el = cy.dataCy(attr)

    el.should('not.have.class', val)
  }
)

Then('I should see the {string} element', (attr: string) => {
  const el = cy.dataCy(attr)

  el.should('be.visible')
})

Cypress.on('uncaught:exception', (err, _runnable) => {
  console.error(err)
})
