/// <reference types="Cypress" />

describe('login case', () => {

    it('visit gallerz app', () =>{

        cy.visit("")
    })

    it('click on login button', () => {
        
     
        cy.get('a[href="/login"]').click()
      
    })

    it ('login with valid credentials', () => {
    cy.get('input[id="email"]').type('dekitest@gmail.com')
    cy.get('input[id="password"]').type('12345678')
    cy.get('button[type="submit"]').click()


   })


    // it('login with invalid email', () => {

       
    //     cy.get('input[id="email"]').type('dekitest.com')
    //     cy.get('input[id="password"]').type('12345678')
    //     cy.get('button[type="submit"]').click()

    // })


    //  it('login with space for email', () => {

    //     cy.get('input[id="email"]').type(' ')
    //     cy.get('input[id="password"]').type('12345678')
    //     cy.get('button[type="submit"]').click()

    //  })




    // it('logout', () => {

    // cy.wait(5000)
    // cy.get('a[role="button "]').click()

    // })

})