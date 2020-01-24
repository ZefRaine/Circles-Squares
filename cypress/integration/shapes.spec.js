context('Shapes', () => {
    beforeEach(() => {
        // - visit a web page
        cy.visit('/')
        cy.url()
            .should('include', '/')
    })
    describe('Shape Count', () => {
        it('Count total of shapes', () => {
            cy.get('.mySquare')
            cy.get('.myCircle')
        })
    })
    describe('Color Check', () => {
        it('Checks for valid hex code', () => {
            cy.get('.mySquare').should('have.css', 'background-color', 'rgb(255, 0, 0)')
            cy.get('.myCircle').should('have.css', 'background-color', 'rgb(0, 0, 255)')
        })
    })
})