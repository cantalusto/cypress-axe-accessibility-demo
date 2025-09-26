// O nome do describe pode ser alterado para clareza
describe('Testes de Acessibilidade na PÁGINA CORRIGIDA', () => {

    beforeEach(() => {
        // MUDANÇA PRINCIPAL: Apontamos para o novo arquivo HTML
        cy.visit('./corrigido.html');
        cy.injectAxe();
    });

    // Este teste agora DEVE PASSAR
    it('Deve analisar a página inteira e não ter NENHUMA violação crítica ou séria', () => {
        const axeOptions = {
            runOnly: {
                type: 'tag',
                values: ['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa']
            },
            includedImpacts: ['critical', 'serious']
        };

        // Este comando irá passar, pois não encontrará violações
        cy.checkA11y(null, axeOptions);
    });

    // Este teste também DEVE PASSAR
    it('Deve verificar o formulário corrigido e não encontrar violações', () => {
        // A função de log não é mais necessária, pois não esperamos erros,
        // mas pode ser mantida se preferir.
        cy.checkA11y('form');
    });
});