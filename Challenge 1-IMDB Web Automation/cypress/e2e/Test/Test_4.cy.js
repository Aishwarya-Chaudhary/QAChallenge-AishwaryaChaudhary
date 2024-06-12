/// <reference types="Cypress"/>
describe('Celebrities Born Yesterday on IMDb', function() {
    it('Verify search for celebrities born yesterday and click on the 3rd name', function() {
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
        //Click on Born Today
        cy.contains('Born Today').click();
        
        // Define date variables
        const today = new Date();
        const yesterday = new Date(today);
        yesterday.setDate(today.getDate() - 1);
        // Format dates to dd-mm
        const formatDate = (date) => {
        const day = String(date.getDate()).padStart(2, '0');
        const month = String(date.getMonth() + 1).padStart(2, '0');
        return `${month}-${day}`;
        };
        //const todayFormatted = formatDate(today);
        const yesterdayFormatted = formatDate(yesterday);
        const ENTER_KEY='{Enter}';
        cy.log(yesterdayFormatted)
        //Delete Default search
        cy.xpath("//button[contains(@data-testid, 'selected-input-chip-list-birthday')]/*[@fill='currentColor']").click({force: true})
        //Unfold Birthday section
        cy.get('[data-testid="accordion-item-birthdayAccordion"]').click()
        //Enter Yesterday date
        cy.get('[data-testid="birthday-input-test-id"]').type(`${yesterdayFormatted}${ENTER_KEY}`)
        //Click on Search button
        cy.get('[data-testid="adv-search-get-results"]').click({force: true})
        //Click on 3rd option in the list
        cy.get(':nth-child(3) > .ipc-metadata-list-summary-item__c > .ipc-metadata-list-summary-item__tc > .sc-77f37b3d-0 > .sc-77f37b3d-1 > .sc-ada31d55-0 > .sc-ada31d55-3 > [data-testid="nlib-title"] > .ipc-title-link-wrapper > .ipc-title__text').click()
        // Take Screenshot of the landing page
        cy.screenshot();
    });
});