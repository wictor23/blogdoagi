Feature: Acessar post do blog Agibank

  Scenario: Abrir um post a partir da página inicial
    Given que acesso a página inicial do blog Agibank
    When clico em ver mais e no primeiro post exibido
    Then devo visualizar o conteúdo do post
