import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor'

When(
  'I click on the {string} button {int} times',
  (attr: string, times: number) => {
    const el = cy.dataCy(attr)

    for (let i = 0; i < times; i++) {
      el.click()
    }
  }
)

Then(
  'The {string} button should say {string} and be disabled',
  (attr: string, message: string) => {
    const el = cy.dataCy(attr)

    el.should('have.text', message)
    el.should('be.disabled')
  }
)

Then(
  'The {string} switch should say {string}',
  (attr: string, message: string) => {
    const el = cy.dataCy(attr)

    el.should('include.text', message)
  }
)
