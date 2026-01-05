
import './commands'


Cypress.on("uncaught:exception", (err, runnable) => {
  // Ignora erros de JS vindos da aplicação
  return false;
});