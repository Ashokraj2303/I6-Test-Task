

import { AboutPage } from "../../POM/aboutPage.cy";
import { ContactUsPage } from "../../POM/ContactUsPage.cy";

import { HomePage } from "../../POM/HomePage.cy";

const homePage = new HomePage()
const aboutPage = new AboutPage()
const contactUsPage = new ContactUsPage()

describe('Testing contact page',()=>{
  
 
  
  it('Trying to use contact us page without filling mandatory details',()=>
{
 //vist and verify home page with title and web elements
  cy.visit('https://i6.io/');
  cy.fixture('testdata').then((details)=>{
  homePage.compareHomePageTitle(details.expectedHomePageTitle);
  homePage.homePageWebElementsVisible();
  // accept cookies
  homePage.clickAcceptCookies();
  // click about option 
  homePage.clickAboutBtn();
  // verify about page with tile and web elements
 aboutPage.compareAboutPageTitle(details.expectedAboutPageTitle);
 aboutPage.aboutPageWebElementsVisible();
 // click contact us option
 aboutPage.clickContactUsBtn();
 // verify contact us page with titile and web elements
contactUsPage.compareContactUsPageTitle(details.expectedContactUsPageTitle);
contactUsPage.contactPageWebElementVisible();
//enter some of the mandatory details 
contactUsPage.enterFirstName(details.firstName);
contactUsPage.enterLastName(details.lastName);
contactUsPage.enterMailId(details.mailId);
contactUsPage.selectCareers();
contactUsPage.clickEmailOptIn();
//click submit option
contactUsPage.clickSubmitBtn();
//I should be on the same page, can't able to go further without filling all mandatory details
contactUsPage.compareContactUsPageTitle(details.expectedContactUsPageTitle)


})
})
  })
 
