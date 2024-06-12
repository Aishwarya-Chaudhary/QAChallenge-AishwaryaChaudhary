/// <reference types="Cypress"/>

describe('Nicolas Cage Upcoming Movies on IMDb', function() {
it('Verify First Upcoming completed movie selection of Nicolas Cage',function() {
    // Launch Url
    cy.visit('https://www.imdb.com') 
    //Accept Select Your Preferences
    cy.get('[data-testid="accept-button"]').click() 
    // Click on Sign In
    cy.contains('Sign In').click() 
    //Click on Sign in with IMDb option
    cy.contains('Sign in with IMDb').click() 
    //Enter valid email id
    cy.get('#ap_email').type('chaishwarya412@gmail.com') 
    //Enter valid password
    cy.get('#ap_password').type('QAchallenge@4{Enter}') 
    // Enter Nicolas Cage in search
    cy.get('#suggestion-search').type('Nicolas Cage{Enter}') 
    //Select Nicolas Cage from the list
    cy.get('[data-testid="find-results-section-name"] > .sc-ffc93fc1-2 > .ipc-metadata-list > :nth-child(1) > .ipc-metadata-list-summary-item__c > .ipc-metadata-list-summary-item__tc > .ipc-metadata-list-summary-item__t').click() 
    // Unfold Upcoming background
    cy.get('[data-testid="accordion-item-actor-upcoming-projects"] > .ipc-accordion__item__title').click()
   //wait to load
    cy.wait(5000) 
    //click on the first movie with a Completed tag
    cy.get('[data-testid="nm_flmg_unrel_credit_actor_1"] > .ipc-metadata-list-summary-item__c > .ipc-metadata-list-summary-item__tc > .ipc-metadata-list-summary-item__stl > .ipc-inline-list__item > .ipc-metadata-list-summary-item__li').click()
   // Validate Try premium page
    cy.get('#a-autoid-0-announce').should('be.visible') 
});
});