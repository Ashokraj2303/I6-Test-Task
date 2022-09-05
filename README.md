# I6-Test-Task   
This is a readme file of I6  technical exercise.
date(05/09/2022)

## About
We are going to test the I6 web UI application's Contact us page by not filling mandatory details. The main purpose of the test is to check contact us page working functionality.

### Installing
First we have to install few things
*Change the project into node project
*Installing cypress 
*Installing cypress xpath
*git installation
*Changing websecurity into false

#### Usage
*The fixture file contain all the test data for this test
*The POM (Page Object Module) contain all the reusable functions. We can call back those functions whenever we need it.
*The E2E file (user journey)  contain all the test script
*By using POM way of working, it will reduce the time consumption of writing and executing the test script.
*By using cypress, we can able to run our test script in four different browsers.
* In each and every page, we have compare the page title with expected page title and also checked the presence of the web element in all the pages.
* After clicking submit button on the Contact Us page without entering some mandatory details,the application should not allow us the go further.
