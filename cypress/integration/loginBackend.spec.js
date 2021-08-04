describe('Login through backend', () => {
    
    before(()=>{
        cy.request(
            'POST',
            'https://gallery-api.vivifyideas.com/api/auth/login',
            {
                email:"test123123@test.com",
                password: "test123123"
            }
            ).its('body').then((response) => {
                console.log('ovde logujemo', response)
            })
    })

    it('login and logout using POM', () => {
        cy.visit('/')
        // cy.get('.nav-link').eq(1).click()
        // authLogin.login('test123123@test.com', 'test123123')
        // header.logout()
    })
})