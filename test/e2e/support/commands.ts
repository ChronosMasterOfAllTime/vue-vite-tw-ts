export function getTestElement(id: string) {
  const el = cy.get(`[data-test-id=${id}]`)
  el.should('have.length', 1)
  return el
}

export function getTestElementByClass(name: string) {
  return cy.get(`[data-test-class=${name}]`)
}

export function dataCy(val: string) {
  const el = cy.get(`[data-cy=${val}]`)
  el.should('have.length', 1)
  return el
}

Cypress.Commands.add('getTestElement', getTestElement)
Cypress.Commands.add('getTestElementByClass', getTestElementByClass)
Cypress.Commands.add('dataCy', dataCy)
