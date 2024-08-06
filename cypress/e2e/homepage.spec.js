describe('home gage', () => {
    it('free estimate button',  () => {
        cy.visithomemakers()
        cy.get('.free-estimate-button').click()

        cy.wait(4000)
        cy.get('.ant-modal-body')
        .find('[placeholder="Your Email"]').first().should('be.visible').type('test@test.com')
        cy.get('.ant-modal-body')
        .find('[placeholder="Your Phone"]').first().should('be.visible').type('11111111')
        cy.get('.ant-modal-body')
        .find('select').select('Apartment Renovation')
        cy.get('.ant-modal-body')
        .find('.checkbox').eq(2).click().should('have.class', 'checked')
        cy.get('.ant-modal-body')
        .find('button').contains('Send Message').click()
    })
    
    it.only('consultation inputs on home page', () => {
        cy.visithomemakers()
        
        cy.get('.input-wrapper')
        cy.get('[placeholder="Your Email"]').type('test2@test.com')
        cy.get('[placeholder="Your Phone"]').type('22222222')
        cy.get('select').select('Commercial Renovation')
        cy.wait(4000)
        cy.get('.checkbox').eq(0).click().should('have.class', 'checked')
        cy.get('.button-pc').click()
    })

})