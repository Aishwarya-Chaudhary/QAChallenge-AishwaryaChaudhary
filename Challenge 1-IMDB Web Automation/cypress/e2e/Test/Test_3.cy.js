/// <reference types="Cypress"/>


describe('Breaking Bad Photos with Danny Trejo on IMDb', function() {
it('Verify display of Danny Trejo\'s photos and click on the 2nd one',function() {
    
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
//Click 250 TV shows
cy.get('[href="/chart/toptv/?ref_=nv_tvv_250"] > .ipc-list-item__text').click() 
//Click on Breaking Bad
cy.contains('Breaking Bad').click()
//Click on photos
cy.get('[data-testid="photos-title"] > .ipc-title__wrapper > .ipc-title-link-wrapper > .ipc-title__text').click() 
//Click on grid view
cy.get('[data-testid="mv-gallery-button"]').click()
//Click on filter icon
cy.get('[data-testid="image-chip-dropdown-test-id"]').click()
//Wait fo5 sec
cy.wait(5000) 
//Open more More people dropdown select Danny Trejo
cy.xpath("(//div[@class='ipc-select__input-container'])[1]/select[@data-testid='select-dropdown-test-id']").select('Danny Trejo (7)')//.should('have.value', 'nm0001803')
//Close prompt
cy.xpath("//button[@class='ipc-icon-button ipc-icon-button--baseAlt ipc-icon-button--onBase']").click()
//Select third image and wait to load
cy.xpath("//a[@id='rm2708882432-img-1']").click()
cy.wait(5000)
//Take screenshot
cy.screenshot()
})
});