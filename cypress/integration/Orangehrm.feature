Feature:Sample project using cucumber framework  
using url:https://opensource-demo.orangehrmlive.com/web/index.php/auth/login

Scenario:User login with valid credintals
    Given user open the browser and enters the url
    When user enters valid username and password
    And user clicks on login button
    Then user navigates to the dashboard page

Scenario:User is searching for their role on the admin page
    When user clicks on the admin page
    And user is searching for their role
    Then the details on their should be visible

Scenario:User creates a job category in job component
    When user clicks on the job category within the job component on the admin page
    And  the job category page should be open
     Then the details should be visible in the title category
     And the job category name should be deleted

Scenario:Check whether the user can add dublicate pay grades in job component     
    When user clicks on the pay grades within the job component on the admin page
    And  the pay grades page should be open
     Then the alert message should be visible in the pay grades page

Scenario:Verify whether the user can edit their education information in the qualification component
When user clicks on the education within the qualification component on the admin page 
And user edits the  education record information in the education page
 Then user Check whether the record is edited completely

Scenario:Check the component list on the leave page
    When user clicks on the leave page icon 
    Then user navigates to the leave page
    And user gets the component list on the leave page
Scenario:User logout successfully after compled the tasks
    When user clicks on logout button in logout options
    Then user logout successfully

    
    
    
