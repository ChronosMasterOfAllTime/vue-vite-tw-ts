Given('I open the home page', () => {
  cy.visit('/')
})

Given('I can see the {string} button', (val: string) => {
  cy.dataCy(val)
})
