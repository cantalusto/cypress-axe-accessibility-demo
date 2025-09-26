const { defineConfig } = require('cypress');

module.exports = defineConfig({
  // Adiciona a configuração do reporter aqui no nível principal
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    charts: true,
    reportPageTitle: 'Relatório de Testes de Acessibilidade',
    embeddedScreenshots: true,
    inlineAssets: true, // Mantém tudo em um único arquivo HTML
    saveAllAttempts: false,
  },
  
  e2e: {
    // A task de 'log' que criamos pode continuar aqui
    setupNodeEvents(on, config) {
      // Isso configura o plugin do reporter
      require('cypress-mochawesome-reporter/plugin')(on);

      on('task', {
        log(message) {
          console.log(JSON.stringify(message, null, 2));
          return null;
        },
      });
    },
    // Desabilitar o vídeo pode ser uma boa ideia para testes de acessibilidade
    video: false, 
  },
});