

export class ContactUsPage 

{
  
compareContactUsPageTitle(expectedContactUsPageTitle)
{
    cy.title().should('eq',expectedContactUsPageTitle);
    return this
}

enterFirstName(firstName)
{
    cy.get('#First-Name').type(firstName);
    return this
}
enterLastName(lastName)
{
    cy.get('#Last-Name').type(lastName);
    return this
}
enterMailId(mailId)
{
    cy.get('#Email').type(mailId);
    return this
}
selectCareers()
{
    cy.get('select[data-name="Enquiry"]').select('Careers');
    return this
}
clickEmailOptIn()
{
    cy.xpath('//span[text()="Email Opt-in "]').click();
    return this
}
clickSubmitBtn()
{
    cy.get('input[value="Submit Now"]').click();
    return this
}
contactPageWebElementVisible()
{cy.xpath('//img[@alt="i6 Logo"]').should('be.visible'); 
    cy.xpath('//a[text()="About"]').should('be.visible'); 
        cy.xpath('//div[text()="Products"]').should('be.visible');
    cy.xpath('//div[text()="Support"]').should('be.visible'); 
    cy.xpath('//a[text()="Blog"]').should('be.visible'); 
    cy.xpath('//a[text()="Careers"]').should('be.visible'); 
    cy.xpath('//a[text()="Contact"]').should('be.visible'); 
    cy.xpath('//div[text()="EN"]').should('be.visible'); 
    cy.xpath('//h1[text()="Get in touch."]').should('be.visible');
    return this
}




}