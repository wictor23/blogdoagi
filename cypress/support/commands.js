
Cypress.Commands.add('CliqueLupa', (elemento, time, timeout) => {
    cy.get('body', { log: false }).then(form => {
      /*
        Essa função existe, pois serve além de esperar os elementos carregar no DOM
        como tambem espera banckend corregar.
      */
      const idVisible = form.find(elemento);
      
      cy.log(`Aguardando: ${elemento}`);
      if (time == null) {
        time = 0;
        timeout = Cypress.config('defaultCommandTimeout');
      }
      if (
        idVisible.is(':visible') &&
        !idVisible.is(':hidden')
        
      ) {
        cy.wait(1000, { log: false });
        
      } else {
        cy.wait(90, { log: false });
        time += 100;
        if (time < timeout) {
          cy.get('.site-header-above-section-right > .ast-builder-layout-element').click()
          cy.wait(100);
          cy.CliqueLupa(elemento, time, timeout);
        }
      }
    });
});