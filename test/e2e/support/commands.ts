export function getTestElement(id: string) {
  const el = cy.get(`[data-test-id=${id}]`)
  el.should('have.length', 1)
  return el
}

export function getTestElementByClass(name: string) {
  return cy.get(`[data-test-class=${name}]`)
}

Cypress.Commands.add('getTestElement', getTestElement)
Cypress.Commands.add('getTestElementByClass', getTestElementByClass)
