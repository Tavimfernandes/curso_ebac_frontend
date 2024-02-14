describe('Testes agenda de contatos', () => {
    beforeEach(() => {
        cy.visit('https://agenda-contatos-react.vercel.app')
    })

    it('Deve renderizar pelo menos 1 contato', () => {
        cy.get('.contato').should('have.length.greaterThan', 0)
    })

    it('Deve adicionar um novo contato', () => {
        cy.get('input[type="text"]').type('Nome Teste')
        cy.get('input[type="email"]').type('email@teste.com')
        cy.get('input[type="tel"]').type('11 912345678')
        cy.get('.adicionar').click()
    })

    it('Deve editar um contato', () => {
        cy.get(':nth-child(2) > .sc-gueYoa > .edit').click()
    })

    it('Deve excluir um contato', () => {
        cy.get(':nth-child(2) > .sc-gueYoa > .delete').click()
    })
})