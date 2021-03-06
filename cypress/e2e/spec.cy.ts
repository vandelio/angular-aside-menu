describe('My First Test', () => {
  it('Visits the initial project page', () => {
    cy.visit('/')
    cy.contains('App is running')
  })

  it('Can click button to open menu', () => {
    cy.get('.openbutton').click()
  })

  it('Wait', () => {
    cy.wait(50)
  })
  it('Click first element in menu list', () => {
    cy.get('li').first().click()
  })
  it('Click first element in menu list', () => {
    cy.get('li').first().click()
  })
  it('Wait for page switch', () => {
    cy.wait(50)
  })

  it('Can click button to open menu', () => {
    cy.get('.openbutton').click()
  })

  it('Click second element in menu list', () => {
    cy.get('li:nth(1)').click()
  })

  it('Visits the blob test page', () => {
    cy.visit('/blob')
  })

  it('should have path in svg', () => {
    cy.get('svg').find('path').should('be.visible')
  })
})
