# ♿ Automated Accessibility Testing Showcase

![Cypress](https://img.shields.io/badge/Cypress-17202C?style=for-the-badge&logo=cypress&logoColor=white)
![Axe-Core](https://img.shields.io/badge/Axe--Core-4.8.2-007ACC?style=for-the-badge&logo=accessibility&logoColor=white)
![WCAG](https://img.shields.io/badge/WCAG-2.1_AA-28A745?style=for-the-badge&logo=w3c&logoColor=white)
![Accessibility](https://img.shields.io/badge/Accessibility-Inclusive-FF6B35?style=for-the-badge)

![License](https://img.shields.io/badge/License-MIT-green.svg?style=for-the-badge)

##  

Este projeto demonstra a implementação profissional de testes automatizados de acessibilidade em aplicações web utilizando **Cypress** integrado com a biblioteca **`axe-core`**. O objetivo é apresentar um cenário prático de "antes e depois", mostrando como a automação pode garantir a inclusão digital através da identificação e correção de barreiras de acesso.

## 🎯 Objetivo do Projeto

Demonstrar habilidades avançadas em automação de testes focada em qualidade e inclusão digital, mostrando:

1. **🔍 Identificação Automática:** Detecção automática de violações de acessibilidade (WCAG)
2. **✅ Validação de Correções:** Confirmação da resolução de problemas identificados
3. **📊 Relatórios Compreensivos:** Documentação detalhada para desenvolvedores e stakeholders
4. **🔄 Integração Contínua:** Pipeline de acessibilidade em processos de desenvolvimento

## ✨ Funcionalidades Principais

### 🚫 **Página com Problemas Intencionais (`index.html`)**
- **🎨 Baixo Contraste:** Texto com relação de contraste inferior ao recomendado
- **🖼️ Imagens sem Alt:** Elementos visuais sem descrição alternativa
- **📝 Formulários Inacessíveis:** Campos sem labels associados
- **⚡ Semântica Incorreta:** Uso de divs como elementos interativos
- **⌨️ Navegação por Teclado:** Falta de indicadores de foco visual

### ✅ **Página Corrigida (`corrigido.html`)**
- **♿ Conformidade WCAG:** Implementação das diretrizes de acessibilidade
- **🎯 Navegação Acessível:** Suporte completo a teclado e leitores de tela
- **📱 Design Inclusivo:** Interface que considera diversos usuários
- **🔍 SEO Natural:** Melhorias que beneficiam também a indexação

### 🧪 **Suíte de Testes Automatizados**
- **Testes de Regressão:** Validação contínua da acessibilidade
- **Análise de Impacto:** Verificação de novas violações
- **Relatórios Açãoáveis:** Detalhamento preciso dos problemas
- **Integração CI/CD:** Execução automática em pipelines

## 🛠️ Stack Tecnológica

* **Framework de Teste:** Cypress 13.6.0+
* **Motor de Acessibilidade:** axe-core 4.8.2+
* **Integração:** cypress-axe para conexão seamless
* **Relatórios:** Mochawesome com evidências visuais
* **Ambiente:** Node.js + npm
* **Padrões:** WCAG 2.1 AA, ARIA landmarks

## 🚀 Como Executar o Projeto

### ⚡ **Implementação Rápida**

1. **Clone o Repositório:**
```bash
git clone https://github.com/cantalusto/automated-accessibility-testing-showcase.git
cd automated-accessibility-testing-showcase
```

2. **Instalação de Dependências:**
```bash
npm install
```

3. **Execução dos Testes:**
```bash
# Modo headless com relatórios
npx cypress run

# Modo interativo (com navegador)
npx cypress open
```

### 📊 **Análise dos Resultados**

**Comportamento Esperado dos Testes:**

- **`accessibility.cy.js`:** ❌ **Falha Intencional** - Detecta violações na página com problemas
- **`accessibility-corrigido.cy.js`:** ✅ **Sucesso** - Valida a página corrigida

### 📋 **Visualização de Relatórios**

Após a execução, acesse o relatório completo:
```bash
open cypress/reports/html/index.html
```

**O relatório inclui:**
- 📈 Gráficos interativos de resultados
- 📸 Screenshots das violações identificadas
- 🔍 Detalhes específicos de cada problema WCAG
- 💡 Sugestões de correção actionáveis

## 🎯 Cenários de Teste Cobertos

### 🔍 **Testes de Acessibilidade Implementados**
- **Contraste de Cores:** Verificação de ratio mínimo 4.5:1
- **Textos Alternativos:** Validação de atributos alt em imagens
- **Estrutura Semântica:** Uso correto de headings e landmarks
- **Navegação por Teclado:** Tabindex e indicadores de foco
- **Formulários Acessíveis:** Labels, required states e error messages
- **ARIA Attributes:** Implementação correta de roles e properties

### 📋 **Categorias WCAG Validadas**
- **Perceptível:** Alternativas textuais, adaptável, distinguível
- **Operável:** Acessível por teclado, tempo suficiente, navegável
- **Compreensível:** Legível, previsível, assistência de entrada
- **Robusto:** Compatível com tecnologias assistivas

## 🏗️ Estrutura do Projeto

```
accessibility-showcase/
├── cypress/
│   ├── e2e/
│   │   ├── accessibility.cy.js          # Testes página com problemas
│   │   └── accessibility-corrigido.cy.js # Testes página corrigida
│   ├── fixtures/
│   ├── support/
│   └── reports/html/                   # Relatórios gerados
├── index.html                          # Página com problemas de acessibilidade
├── corrigido.html                      # Página corrigida e acessível
├── cypress.config.js
└── package.json
```

## 👨‍💻 Autor

**Lucas Cantarelli Lustosa**

[![GitHub](https://img.shields.io/badge/GitHub-cantalusto-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/cantalusto)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Lucas_Cantarelli-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/lucas-cantarelli-lustosa-aab5492ba/)

---
