/// <reference types="Cypress" />

context('Window', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/login')
    });

    // it('cy.window() - get the global window object', () => {
    //     // https://on.cypress.io/window
    //     cy.window().should('have.property', 'top')
    // })

    it('cy.document() - get the document object', () => {
        // https://on.cypress.io/document
        cy.document().should('have.property', 'charset').and('eq', 'UTF-8');
        expect(true).to.equal(true);
        cy.get('#username').type('traveller@locomote.com.au');
        cy.get('#password').type('loco3000');
        cy.contains('Sign In').click();
        cy.contains('Flight');
        cy.get('.tt-input').last().type('SYD{enter}');
        //cy.get('.tt-input').last().type('Syd').select('Sydney (SYD)');
        cy.get('.dates > .form-group > .input-group > .form-control').focus();
        cy.get('.booking-search__btn-search').click();
        cy.get(':nth-child(1) > .flight-fare-options > :nth-child(4) > .fare-price-group > .price-wrap > .price > .btn').click();
        cy.get('.select2-selection__rendered').select('excuse')
    })

    // it('cy.title() - get the title', () => {
    //     // https://on.cypress.io/title
    //     cy.title().should('include', 'Kitchen Sink')
    // })
});
