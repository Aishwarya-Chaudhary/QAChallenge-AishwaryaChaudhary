/// <reference types="Cypress"/>
        
describe('Celebrities Born 40 Years Ago as per IMDb data', function() {
    it('Verify celebrities born 40 years ago and click onfirst link in description', function() {
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
        cy.contains('Born Today').click({ force: true });
        //Delete Default search
        cy.xpath("//button[contains(@data-testid, 'selected-input-chip-list-birthday')]/*[@fill='currentColor']").click({force: true})
        //Select Birth date field
        cy.get('[data-testid="accordion-item-birthDateAccordion"] > .ipc-accordion__item__title > .sc-6addea7c-0').click()
        //funtion to Calculate the date minus 40 years
        function getCurrentDateMinus40Years() {
            const today = new Date();
            today.setFullYear(today.getFullYear() - 40);
            const mm = String(today.getMonth() + 1).padStart(2, '0'); // Months are zero-based
            const dd = String(today.getDate()).padStart(2, '0');
            const yyyy = today.getFullYear();
            return yyyy + "-" + mm + "-" + dd;
        }
        // Get the formatted date
        const date = getCurrentDateMinus40Years();
        //date picker for the “from” option
        cy.xpath("//input[@data-testid='birthDate-start']").click().type(date, { force: true });
        //Enter string field for the "to" option
        cy.get('[data-testid="birthDate-end"]').click().type(date, { force: true });
        //Click on search button
        cy.get('[data-testid="adv-search-get-results"]').click()
        //Select First link in Description
        cy.xpath("//a[@class='ipc-md-link ipc-md-link--entity'][1]").first().click({ force: true })
        //Take screenshot of landing page
        cy.screenshot();

    });
});