/// <reference types="Cypress" />

context('Window', () => {
    beforeEach(() => {
        cy.visit('https://r0.ru')
    });

    // it('cy.window() - get the global window object', () => {
    //     // https://on.cypress.io/window
    //     cy.window().should('have.property', 'top')
    // })

    it('cy.document() - get the document object', () => {
        cy.get('a:nth-child(odd)').click({multiple:true});
    })

    // it('cy.title() - get the title', () => {
    //     // https://on.cypress.io/title
    //     cy.title().should('include', 'Kitchen Sink')
    // })
});
