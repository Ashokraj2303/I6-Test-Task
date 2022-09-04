export class HomePage {

    compareHomePageTitle(expectedHomePageTitle)
    {
        cy.title().should('eq',expectedHomePageTitle);  
        return this 
    }
    clickAcceptCookies()
    {
        cy.xpath('//a[text()="Accept"]').click();
        return this
    }
    clickAboutBtn()
    {
        cy.xpath('//div[@class="footer wf-section"]/div/div/div/div/div/a[text()="About"]').click();
        return this
    }
    homePageWebElementsVisible()
    {cy.xpath('//img[@alt="i6 Logo"]').should('be.visible'); 
        cy.xpath('//a[text()="About"]').should('be.visible'); 
        cy.xpath('//div[text()="Products"]').should('be.visible');
    cy.xpath('//div[text()="Support"]').should('be.visible'); 
    cy.xpath('//a[text()="Blog"]').should('be.visible'); 
    cy.xpath('//a[text()="Careers"]').should('be.visible'); 
    cy.xpath('//a[text()="Contact"]').should('be.visible'); 
    cy.xpath('//div[text()="EN"]').should('be.visible'); 
    cy.xpath('//strong[text()="Fuel management technology for smarter and greener operations."]').should('be.visible'); 
    return this
}}