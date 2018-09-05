context('Window', () => {
    beforeEach(() => {
        //cy.clearCookies()     // clear all cookies
        cy.visit('https://facebook.com');
        cy.get('body').then(($body) => {
            if ($body.text().includes('Sergey')) {
                // yup found it
            } else {
                // nope not here
                cy.get('[data-testid=royal_email]').type('larinsergey101@gmail.com');
                cy.get('[data-testid=royal_pass]').type('irinalarina');
                cy.get('[data-testid=royal_login_button]').click();
            }
        });

    });
    it('cy.document() - get the document object', () => {

        cy.visit('https://www.facebook.com/messages/');
        cy.get('ul[aria-label="Conversation List"] li:last-child').click();
        cy.get('ul[aria-label="Conversation List"] li:first-child').scrollIntoView();
        cy.get('ul[aria-label="Conversation List"] li:first-child').click();
        cy.get('div[data-block="true"] span').type('hello{enter}',{force:true});
    })
});