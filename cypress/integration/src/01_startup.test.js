/// <reference types="cypress" />

describe('App Startup/Login', () => {
    // beforeEach(() => {
    //     cy.visit('/');
    // });

    it('launches', () => {
        cy.visit('/');
    });

    it('should click sign in', () => {
        cy.get('.LinkButton.pale').as('Signin');

        cy.get('@Signin')
            .should('have.attr', 'href', '/login')
            .invoke('text')
            .should('contain', 'Sign in');

        cy.get('@Signin').click();

        cy.location('pathname').should('include', 'login');
    });

    it('should sign into the application and navigate to the user dashboard', () => {
        cy.login('ci@genmar.com', 'ci@genmar');

        cy.wait(3000);

        cy.location('pathname').should('include', 'users');
    });
});