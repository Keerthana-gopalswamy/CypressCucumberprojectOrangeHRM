/// <reference types="Cypress"/>
class Orangefile{
    getUrl()
    {
        cy.fixture('userinfo.json').then((data1)=>{
            cy.visit(data1.url)
          })
    }
    getCredintals(){
        
        cy.fixture('userinfo.json').then((data2)=>{
            cy.get('#app > div.orangehrm-login-layout > div > div.orangehrm-login-container > div > div.orangehrm-login-slot > div.orangehrm-login-form > form > div:nth-child(2) > div > div:nth-child(2) > input')
            .type(data2.UserName);
            cy.get('#app > div.orangehrm-login-layout > div > div.orangehrm-login-container > div > div.orangehrm-login-slot > div.orangehrm-login-form > form > div:nth-child(3) > div > div:nth-child(2) > input')
            .type(data2.PassWord)

        })
    }
    getLogin(){
     cy.get('#app > div.orangehrm-login-layout > div > div.orangehrm-login-container > div > div.orangehrm-login-slot > div.orangehrm-login-form > form > div.oxd-form-actions.orangehrm-login-action > button').click();   
    }

    getDashboardpage(){
        cy.get('.oxd-topbar-header-title').should('be.visible')
    }

    getAdminpage(){
     cy.get(':nth-child(1) > .oxd-main-menu-item > .oxd-text').click();
    }
getUserrole(){
    cy.get('#app > div.oxd-layout > div.oxd-layout-container > div.oxd-layout-context > div > div.oxd-table-filter > div.oxd-table-filter-area > form > div.oxd-form-row > div > div:nth-child(1) > div > div:nth-child(2) > input').type('Admin')

cy.get('#app > div.oxd-layout > div.oxd-layout-container > div.oxd-layout-context > div > div.oxd-table-filter > div.oxd-table-filter-area > form > div.oxd-form-row > div > div:nth-child(2) > div > div:nth-child(2) > div > div > div.oxd-select-text-input').click();
cy.get('.oxd-select-dropdown > :nth-child(2)').click()
cy.get(':nth-child(4) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text-input').click();
cy.get('.oxd-select-dropdown > :nth-child(2) > span').click();
cy.get('#app > div.oxd-layout > div.oxd-layout-container > div.oxd-layout-context > div > div.oxd-table-filter > div.oxd-table-filter-area > form > div.oxd-form-actions > button.oxd-button.oxd-button--medium.oxd-button--secondary.orangehrm-left-space').click();
    

}
getAdmindetails(){
 cy.get('#app > div.oxd-layout > div.oxd-layout-container > div.oxd-layout-context > div > div.orangehrm-paper-container > div.orangehrm-container > div > div.oxd-table-body > div > div').should('be.visible')
//cy.get('#app > div.oxd-layout > div.oxd-layout-container > div.oxd-layout-context > div > div.orangehrm-paper-container > div.orangehrm-container > div > div.oxd-table-body > div > div > div:nth-child(4) > div')
//.should('contain','Monali phase');
}

getJobcategory(){
    cy.get(':nth-child(2) > .oxd-topbar-body-nav-tab-item').click()
    cy.get(':nth-child(4) > .oxd-topbar-body-nav-tab-link').click()    
}
getJobcategorypage(){
    cy.get('#app > div.oxd-layout > div.oxd-layout-container > div.oxd-layout-context > div > div > div.orangehrm-header-container > h6')
    .should('be.visible')
cy.get('#app > div.oxd-layout > div.oxd-layout-container > div.oxd-layout-context > div > div > div.orangehrm-header-container > div > button').click()
cy.get('#app > div.oxd-layout > div.oxd-layout-container > div.oxd-layout-context > div > div > form > div.oxd-form-row > div > div:nth-child(2) > input').type("cucumberframework")
cy.get('#app > div.oxd-layout > div.oxd-layout-container > div.oxd-layout-context > div > div > form > div.oxd-form-actions > button.oxd-button.oxd-button--medium.oxd-button--secondary.orangehrm-left-space').click()

}
getAddedjobcategory(){
    cy.get('#app > div.oxd-layout > div.oxd-layout-container > div.oxd-layout-context > div > div > div.orangehrm-container > div > div.oxd-table-body > div:nth-child(2) > div > div:nth-child(2) > div')
    .should('contain','cucumber')
}
getDeletjobcategory(){
    cy.get(':nth-child(2) > .oxd-table-row > [style="flex-shrink: 1;"] > .oxd-table-cell-actions > :nth-child(1) > .oxd-icon').click();
    cy.get('.oxd-button--label-danger').click()
    cy.get('#app > div.oxd-layout > div.oxd-layout-container > div.oxd-layout-context > div > div > div.orangehrm-container > div > div.oxd-table-body > div:nth-child(2) > div > div:nth-child(2) > div')
    .should('not.contain','cucumber')
}

getPaygrades(){
    cy.get('.--visited > .oxd-topbar-body-nav-tab-item').click();
    cy.get(':nth-child(2) > .oxd-topbar-body-nav-tab-link').click() 
}
getPaygradespage(){
    cy.get('#app > div.oxd-layout > div.oxd-layout-container > div.oxd-layout-context > div > div > div.orangehrm-header-container > div > button').click();
cy.get('#app > div.oxd-layout > div.oxd-layout-container > div.oxd-layout-context > div > div > form > div.oxd-form-row > div > div > div > div:nth-child(2) > input').type('grade 1');
   
}
getDublicatepaygrade(){
    let pay = "Already exists";
    let payloadtext;
    
    cy.get('#app > div.oxd-layout > div.oxd-layout-container > div.oxd-layout-context > div > div > form > div.oxd-form-row > div > div > div > span')
      .invoke('text')
      .then((text) => {
        payloadtext = text;
        cy.log(payloadtext);
    
        if (pay === payloadtext) {
          cy.log("this paygrade is already exist" +pay + " = " + payloadtext);
        } else {
          cy.log("Wrong statement, the pay grades exist for the first time");
        }
      });
}
//
getQualification(){
    cy.get(':nth-child(4) > .oxd-topbar-body-nav-tab-item').click();
    cy.get('.oxd-dropdown-menu > :nth-child(2)').click();    
}
getQualificationpage(){
   
    cy.get('#app > div.oxd-layout > div.oxd-layout-container > div.oxd-layout-context > div > div > div.orangehrm-header-container')
    .should('be.visible')
cy.get('#app > div.oxd-layout > div.oxd-layout-container > div.oxd-layout-context > div > div > div.orangehrm-container > div > div.oxd-table-body > div:nth-child(1) > div > div:nth-child(3) > div > button:nth-child(2)').click()
}

geteditqualification(){
 let edit="Advanced karate framework"
 let edittext;   
 cy.get('#app > div.oxd-layout > div.oxd-layout-container > div.oxd-layout-context > div > div > form > div.oxd-form-row > div > div:nth-child(2) > input').clear().type(edit)
 cy.get('.oxd-button--secondary').click()
 cy.get('#app > div.oxd-layout > div.oxd-layout-container > div.oxd-layout-context > div > div > div.orangehrm-container > div > div.oxd-table-body > div:nth-child(1) > div')
 .invoke('text').then((text)=>{
    edittext = text;
    cy.log(edittext)
    if(edittext === edit){
        cy.log('the text is edited ' + edittext + "=" + edit)
    }
 })

}
getLeave(){
    cy.get(':nth-child(3) > .oxd-main-menu-item').click();
}
getLeavepage(){
    cy.get('#app > div.oxd-layout > div.oxd-layout-navigation > header > div.oxd-topbar-header').should('be.visible')

}
getLeavepagelist(){
    cy.get('#app > div.oxd-layout > div.oxd-layout-navigation > header > div.oxd-topbar-body > nav > ul>li').its('length')
    .then((count1) => {
        cy.log(count1)
        if(count1 === 6){
            cy.get('#app > div.oxd-layout > div.oxd-layout-navigation > header > div.oxd-topbar-body > nav > ul>li').invoke("text")
            .then((text)=>{
                cy.log(text)
            })
        }
    })
}
    getLogoutoptions(){
        cy.get('.oxd-userdropdown-tab').click();
        cy.get(':nth-child(4) > .oxd-userdropdown-link').click();
    }

    getlogout(){
        cy.url().should('eq','https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    }

}
export default Orangefile;