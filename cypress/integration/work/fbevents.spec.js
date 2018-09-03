/// <reference types="Cypress" />

context('Window', () => {
    beforeEach(() => {
        //cy.clearCookies()     // clear all cookies
        cy.visit('https://facebook.com')
    });

    // it('cy.window() - get the global window object', () => {
    //     // https://on.cypress.io/window
    //     cy.window().should('have.property', 'top')
    // })

    it('cy.document() - get the document object', () => {
        // https://on.cypress.io/document
        var grabbed = 0, e=0;
        cy.get('body').then(($body) => {
            // synchronously ask for the body's text
            // and do something based on whether it includes
            // another string
            if ($body.text().includes('Sergey')) {
                // yup found it
            } else {
                // nope not here
                cy.get('[data-testid=royal_email]').type('larinsergey101@gmail.com');
                cy.get('[data-testid=royal_pass]').type('irinalarina');
                cy.get('[data-testid=royal_login_button]').click();
            }
        });

        for (let i=0;i<25;i++){
            cy.visit('https://facebook.com/events/discovery');
            cy.get('ul.uiList button[type="submit"]').each(($el) =>{
                cy.wrap($el).scrollIntoView().click();
                cy.wait(3000 + Math.floor(Math.random() * 4000) );
            });
            //cy.get('ul.uiList button[type="submit"]:last').scrollIntoView();
            cy.wait(6000 + Math.floor(Math.random() * 2000) );
            //cy.get('ul.uiList button[type="submit"]');
        }




        // cy.get('ul.uiList button[type="submit"]').click({multiple: true});

    })

    // it('cy.title() - get the title', () => {
    //     // https://on.cypress.io/title
    //     cy.title().should('include', 'Kitchen Sink')
    // })
});