/// <reference types="Cypress"/>
import {  Given, Then, When ,And} from "cypress-cucumber-preprocessor/steps";
import Orangefile from "../../support/POM/orangehrmpom";
const h=new Orangefile;
 //Scenario:User login with valid credintals
Given('user open the browser and enters the url',()=>{
h.getUrl();
})
When('user enters valid username and password',()=>{
    h.getCredintals();
})
And('user clicks on login button',()=>{
    h.getLogin();
})
Then('user navigates to the dashboard page',()=>{
h.getDashboardpage();
})

//Scenario:User is searching for their role on the admin page
When('user clicks on the admin page',()=>{
    h.getAdminpage();
})
And('user is searching for their role',()=>{
    h.getUserrole();
})
Then('the details on their should be visible',()=>{
    h.getAdmindetails();
})
//Scenario:User creates a job category in job component
When('user clicks on the job category within the job component on the admin page',()=>{
h.getJobcategory();
})
And('the job category page should be open',()=>{
h.getJobcategorypage()
})

Then('the details should be visible in the title category',()=>{
h.getAddedjobcategory()
})
And('the job category name should be deleted',()=>{
    h.getDeletjobcategory()
})
//Scenario:Check whether the user can add dublicate pay grades in job component     
When('user clicks on the pay grades within the job component on the admin page',()=>{
h.getPaygrades();
})
And('the pay grades page should be open',()=>{
h.getPaygradespage()
})
Then('the alert message should be visible in the pay grades page',()=>{
h.getDublicatepaygrade()
})
//Scenario:Verify whether the user can edit their education information in the qualification component
When('user clicks on the education within the qualification component on the admin page',()=>{
    h.getQualification()
})
And('user edits the  education record information in the education page',()=>{
h.getQualificationpage()
})
Then('user Check whether the record is edited completely',()=>{
h.geteditqualification()
})
//Scenario:Check the component list on the leave page
When('user clicks on the leave page icon',()=>{
h.getLeave();
})
Then('user navigates to the leave page',()=>{
h.getLeavepage()
})
And('user gets the component list on the leave page',()=>{
h.getLeavepagelist()
})
//Scenario:User logout successfully after compled the tasks
When('user clicks on logout button in logout options',()=>{
    h.getLogoutoptions();
})
Then('user logout successfully',()=>{
    h.getlogout();
})
