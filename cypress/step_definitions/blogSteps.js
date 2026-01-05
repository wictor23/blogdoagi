import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';

Given('que acesso a página inicial do blog Agibank', () => {
  cy.visit('https://blog.agibank.com.br/');
});

When('clico em ver mais e no primeiro post exibido', () => {
  cy.get('.uagb-marketing-btn__title').click();
  cy.get('[id^="post-"]').eq(0).click();
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
  cy.get('.ast-search-menu-icon.slide-search').click();
  cy.get('input[type="search"]').type(`${termo}{enter}`);
});

Then('devo visualizar posts relacionados ao termo buscado', () => {
  cy.get('article').should('have.length.greaterThan', 0);
});
