Feature: Adicionar gastos ao longo dos dias

AS A Usuário do sistema
I NEED Uma maneira de adicionar os gastos ao longo dos dias
SO THAT I Possa estruturar minha vida financeira de uma forma mais organizada

Scenario: Adicionando gastos com sucesso
Background: 
GIVEN Estou logado no sistema com o usuário {"Vlademir"} e senha {"vlademir123"}
AND I Estou na página de {adicionar gasto}
THEN Vejo a opção de adicionar gasto
WHEN Eu adiciono {100 reais} de gastos ao longo do dia
AND Eu confirmo as operações
THEN continuo na página de {adicionar gasto} e vejo as edições que acabei de fazer

Scenario: Adicionando caracteres ao invés de número ao gasto
Background: 
GIVEN Estou logado no sistema com o usuário {"Vlademir"} e senha {"vlademir123"}
AND I Estou na página de {adicionar gasto}
THEN Vejo a opção de adicionar gasto
WHEN Eu adiciono {'100' reais} de gastos ao longo do dia
AND Eu confirmo as operações
THEN continuo na página de {adicionar gasto} e vejo um alerta dizendo que o gasto tem que ser um número

Scenario: Adicionando gastos inserindo números negativos nos valores
Background: 
GIVEN Estou logado no sistema com o usuário {"Vlademir"} e senha {"vlademir123"}
AND I Estou na página de {adicionar gasto}
THEN Vejo a opção de adicionar gasto
WHEN Eu adiciono {-100 reais} de gastos ao longo do dia
AND Eu confirmo as operações
THEN continuo na página de {adicionar gasto} e vejo um alerta dizendo que o gasto não pode ser um número negativo

Scenario: Editando gastos incorretamente
Background: 
GIVEN Estou logado no sistema com o usuário {"Vlademir"} e senha {"vlademir123"}
AND I Estou na página de {adicionar gasto}
THEN Vejo o gasto preenchido com o valor de {100 reais}
THEN Mudo o valor do gasto para {' '}
AND Eu confirmo as operações
THEN continuo na página de {adicionar gasto} e vejo um alerta dizendo que o gasto tem que ser um número

Scenario: Editando gastos corretamente
Background: 
GIVEN Estou logado no sistema com o usuário {"Vlademir"} e senha {"vlademir123"}
AND I Estou na página de {adicionar gasto}
THEN Vejo o gasto preenchido com o valor de {100 reais}
THEN Mudo o valor do gasto para {200 reais}
AND Eu confirmo as operações
THEN continuo na página de {adicionar gasto} e vejo que a modificação foi realizada com sucesso