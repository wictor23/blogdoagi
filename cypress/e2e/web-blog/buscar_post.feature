Feature: Buscar post no blog Agibank

  Scenario: Buscar posts por palavra-chave
    Given que acesso a página inicial do blog Agibank
    When realizo uma busca pelo termo "tecnologia"
    Then devo visualizar posts relacionados ao termo buscado