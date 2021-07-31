/// <reference types="Cypress" />

describe('registraciona forma', ()=> {


    it('visit gallery app', () => {

        cy.visit('')

    })

    it('click on register button', () => {
        
     
        cy.get('a[href="/register"]').click()
    
    })

    it('valid registration', ()=> {

        cy.get('#first-name').type("Deki")
        cy.get('#last-name').type("Testing")
        cy.get('#email').type('dekitest@gmail.com')
        cy.get('#password').type("12345678")
        cy.get('#password-confirmation').type("12345678")
        cy.get('.form-check-input').check()
        cy.get('.btn').click()
    })





})