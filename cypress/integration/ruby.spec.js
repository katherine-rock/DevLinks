describe('navbar links within the app', () => {
    beforeEach(() => {
      cy.visit('/');
    })

    it('should visit the home page if the home button is clicked', ()=> {
        cy.get('[data-cy="home-button"]').click();
        cy.url().should('include', '/');
    })

    it('should visit the ruby page if the ruby button is clicked', ()=> {
        cy.get('[data-cy="ruby-button"]').click();
        cy.url().should('include', '/ruby');
    })

    it('should visit the rails page if the rails button is clicked', ()=> {
        cy.get('[data-cy="rails-button"]').click();
        cy.url().should('include', '/rails');
    })

    it('should visit the javascript page if the javascript button is clicked', ()=> {
        cy.get('[data-cy="javascript-button"]').click();
        cy.url().should('include', '/javascript');
    })

    it('should visit the react page if the react button is clicked', ()=> {
        cy.get('[data-cy="react-button"]').click();
        cy.url().should('include', '/react');
    })
});