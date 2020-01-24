context('Shapes', () => {
    beforeEach(() => {
        // - visit a web page
        cy.visit('/')
        cy.url()
            .should('include', '/')
    })
    describe('Shape Count', () => {
        it('clicks the link "type"', () => {
            cy.get('.mySquare')
            cy.get('.myCircle')
        })
    })
    describe('Color Check', () => {
        it('clicks the link "type"', () => {
            cy.get('.mySquare').should('have.css', 'background-color', 'rgb(255, 0, 0)')
            cy.get('.myCircle').should('have.css', 'background-color', 'rgb(0, 0, 255)')
        })
    })
})