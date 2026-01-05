import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';

Given('que acesso a página inicial do blog Agibank', () => {
  cy.visit('https://blog.agibank.com.br/');

});

When('clico em ver mais e no primeiro post exibido', () => {
  cy.get('.uagb-marketing-btn__title').click();
  cy.visit('https://blog.agibank.com.br/web-stories/mudanca-do-consignado-em-2025/');
});

Then('devo visualizar o conteúdo do post', () => {
  cy.get(
    'amp-story .i-amphtml-story-back-prev button'
  ).should('exist').and('be.visible');

  cy.url().should(
    'include',
    '/web-stories/mudanca-do-consignado-em-2025/'
  )
});

When('realizo uma busca pelo termo {string}', (termo) => {

  cy.get('.site-header-above-section-right > .ast-builder-layout-element')
    .should('be.visible')
    .click({ force: true });

  cy.CliqueLupa('.search-form');

  cy.get('.search-form')
  .type(termo)
  .submit();

});

Then('devo visualizar posts relacionados ao termo buscado', () => {
  cy.get('article').should('have.length.greaterThan', 0);
  
  cy.get('.ast-archive-title')
  .should('be.visible')
  .and('contain.text', 'Resultados encontrados para: tecnologia');
  
});
