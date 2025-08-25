/*///<reference types="cypress" />


describe('About Swag', () => {
  it('about', () => {
    cy.visit('https://www.saucedemo.com/v1/')
    cy.wait(2000)
    cy.get('[data-test="username"]').type("standard_user")
    cy.wait(2000)
    cy.get('[data-test="password"]').type("secret_sauce")
    cy.wait(2000)
    cy.get('#login-button').click()
    cy.wait(2000)
    cy.get('.bm-burger-button > button').click()
    cy.wait(2000)

    cy.get('#about_sidebar_link').click()

})
})*/




/*///<reference types="cypress" />

describe('About Swag', () => {
  it('navigates to the About page', () => {
    cy.visit('https://www.saucedemo.com/v1/', {
      timeout: 120000, // waits longer for the page to load
    });

    cy.get('[data-test="username"]').type('standard_user');
    cy.get('[data-test="password"]').type('secret_sauce');
    cy.get('#login-button').click();

    // Open the menu
    cy.get('.bm-burger-button > button').click();

    // Wait for the menu to be visible before clicking About
   //
   
   cy.get('#about_sidebar_link', { timeout: 10000 }).should('be.visible').click();

   
});*/


///<reference types="cypress" />

describe('About Page Navigation', () => {
  it('should login and navigate to the About page', () => {
    cy.visit('/'); // using baseUrl

    cy.get('[data-test="username"]').type('standard_user');
    cy.get('[data-test="password"]').type('secret_sauce');
    cy.get('#login-button').click();

    cy.get('.bm-burger-button > button').click();

    // Wait for the menu to be visible
    cy.get('#about_sidebar_link').should('be.visible').click();

    // Assert that we were redirected to saucelabs.com
    cy.origin('https://saucelabs.com', () => {
      cy.url().should('include', 'saucelabs.com');
    });
  });
});






