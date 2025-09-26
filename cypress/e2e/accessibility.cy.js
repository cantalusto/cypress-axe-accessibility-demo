describe('Testes de Acessibilidade Automatizada', () => {

    beforeEach(() => {
        // Visita a nossa página local antes de cada teste
        cy.visit('./index.html');
        // Injeta o axe-core na página
        cy.injectAxe();
    });

    it('Deve analisar a página inteira e não ter violações críticas', () => {
        // Opções para o axe: vamos verificar apenas violações sérias e críticas
        const axeOptions = {
            runOnly: {
                type: 'tag',
                values: ['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa']
            },
            includedImpacts: ['critical', 'serious']
        };

        // A função checkA11y fará a mágica!
        cy.checkA11y(null, axeOptions, terminalLog);
    });

    it('Deve verificar elementos específicos, como o formulário', () => {
        // Analisa apenas dentro da tag <form>
        cy.checkA11y('form', null, terminalLog);
    });
});

// Função para gerar um relatório claro e visível no terminal
function terminalLog(violations) {
    cy.task(
        'log',
        `
--------------------------------------------------
ANÁLISE DE ACESSIBILIDADE CONCLUÍDA
Encontradas ${violations.length} violações:
`
    );

    violations.forEach(violation => {
        const nodes = Cypress.$(violation.nodes.map(node => node.target).join(','));

        cy.task('log', {
            'ID da Regra': violation.id,
            'Impacto': violation.impact.toUpperCase(),
            'Descrição': `[${violation.help}](${violation.helpUrl})`,
            'HTML Afetado': violation.nodes.map(node => node.html).join('\n')
        });

        // Adiciona um destaque visual no elemento com problema durante o teste
        cy.wrap(nodes).each($el => {
            Cypress.log({
                name: `[A11Y] ${violation.impact.toUpperCase()}`,
                message: `${violation.id} -> ${$el[0].outerHTML}`,
                $el: $el
            });
        });
    });
    cy.task('log', '--------------------------------------------------');
}