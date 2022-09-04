export class AboutPage 
{

compareAboutPageTitle(expectedAboutPageTitle)
{
    cy.title().should('eq',expectedAboutPageTitle);
    return this
}
clickContactUsBtn ()
{
    cy.xpath('//div[@class="div-block-11"]/a[text()="Contact Us"]').click();
    return this
}
aboutPageWebElementsVisible()
{cy.xpath('//img[@alt="i6 Logo"]').should('be.visible'); 
    cy.xpath('//a[text()="About"]').should('be.visible'); 
        cy.xpath('//div[text()="Products"]').should('be.visible');
    cy.xpath('//div[text()="Support"]').should('be.visible'); 
    cy.xpath('//a[text()="Blog"]').should('be.visible'); 
    cy.xpath('//a[text()="Careers"]').should('be.visible'); 
    cy.xpath('//a[text()="Contact"]').should('be.visible'); 
    cy.xpath('//div[text()="EN"]').should('be.visible'); 
    cy.xpath('//strong[text()="Smart."]').should('be.visible'); 
    cy.xpath('//strong[text()="Collaborative."]').should('be.visible'); 
    cy.xpath('//span[text()="Pioneering."]').should('be.visible'); 
    return this

}}