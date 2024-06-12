/// <reference types="Cypress"/>

describe('Rate a Top Box Office Movie on IMDb', function() {
it('Verify that user is able to rate the 2nd Top Box Office Movie with 5 stars',function() {
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
    //Change view point for standard view
    cy.viewport(1024, 768) 
    //Click on Hamburger icon
    cy.get('#imdbHeader-navDrawerOpen').click() 
    //Click to open Top Box Office section
    cy.get('[href="/chart/boxoffice/?ref_=nv_ch_cht"]').click() 
    // Select second  item on the Top box office list
    cy.get(':nth-child(2) > .ipc-metadata-list-summary-item__c > .ipc-metadata-list-summary-item__tc > .sc-b189961a-0 > .ipc-title > .ipc-title-link-wrapper > .ipc-title__text').click()
    //Click on the IMDb Rating button
    cy.get('.sc-491663c0-3 > .sc-3a4309f8-0 > .sc-3a4309f8-1 > [data-testid="hero-rating-bar__aggregate-rating"] > .ipc-btn > .ipc-btn__text > .sc-acdbf0f3-3').click()
    //Click on Rate button to open popup
    cy.get('[data-testid="rating-button__user-rating"] > .ipc-btn').click()
    //Click to give 5 start on Rate popup
    cy.get("button[aria-label='Rate 5']").click({ force: true })
    //Click on rate button
    cy.get('.ipc-rating-prompt__rating-container > .ipc-btn').click() 
    //Verify 5 star rating is given
    cy.contains('5/10').should('be.visible') 
    // take screenshot
    cy.screenshot() 
    // wait to load
    cy.wait(5000)
    //Click on Rate button to open popup
    cy.get('[data-testid="rating-button__user-rating"] > .ipc-btn').click()
    //remove rating
    cy.get('.ipc-rating-prompt__rating-container > .ipc-btn--core-baseAlt > .ipc-btn__text').click() 
})
})
    