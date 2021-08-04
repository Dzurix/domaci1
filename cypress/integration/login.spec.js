/// <reference types="Cypress" />

const locators = require("../fixtures/Locators.json")


describe('login case', () => {

    beforeEach(() => {

        cy.visit("/")
        cy.get(locators.Header.Login).click()
    })



    it ('login with valid credentials', () => {
    cy.get(locators.Login.Email).type('dekitest@gmail.com')
    cy.get(locators.Login.Password).type('12345678')
    cy.get(locators.Login.Submit).click()


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