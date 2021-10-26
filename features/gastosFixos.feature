Feature: Definir gastos fixos

AS A Usuário do sistema
I NEED Uma maneira de definir os gastos fixos mensais
SO THAT I Possa organizar minhas finanças de uma maneira melhor

Scenario: Adicionando gastos mensais COM sucesso
Background: 
GIVEN Estou logado no sistema com o usuário {"Matheus"} e senha {"matheus12334"}
AND I Estou na página de {meu salário}
THEN Vejo a opção de fixar valor
WHEN Eu fixo {20%} do meu salário de {R$4000} para {Feira do mês}
AND Eu confirmo as alterações
THEN continuo na página de {meu salário} e vejo as edições que acabei de fazer
THEN continuo logado com o usuário {"Matheus"} e senha {"matheus12334"}

Scenario: Adicionando gastos mensais preechendo com % a mais que o possível (100%)
Background: 
GIVEN Estou logado no sistema com o usuário {"Matheus"} e senha {"matheus123"}
AND I Estou na página de {meu salário}
THEN Vejo a opção de fixar valor
WHEN Eu fixo {20%} do meu salário de {R$4000} para {Feira do mês}, {90%} do meu salário de {R$4000} para {Transporte} 
AND Eu confirmo as alterações
THEN continuo na página de {meu salário} e vejo um alerta afirmando que a porcentagem colocada excede os 100% totais. 

Scenario: Adicionando gastos mensais inserindo números negativos nos valores
Background: 
GIVEN Estou logado no sistema com o usuário {"Matheus"} e senha {"matheus123"}
AND I Estou na página de {meu salário}
THEN Vejo a coluna de gastos mensais
WHEN Edito os tipos de gastos mensais para {"Alimentação"}, {"Transporte"} e {"Aluguel"} e coloco os valores {"-R$9,00"}, {"-R$9,00"} e {"-R$9,00"} para cada tipo. 
AND Eu confirmo as alterações
THEN continuo na página de {meu salário} e vejo um alerta afirmando que os valores dados são inválidos

Scenario: Editando gastos mensais corretamente
Background: 
GIVEN Estou logado no sistema com o usuário {"Matheus"} e senha {"matheus123"}
AND I Estou na página de {meu salário}
THEN Vejo a coluna de gastos mensais com os tipos {"Alimentação"}, {"Transporte"} e {"Aluguel"} e os valores {"R$9,00"}, {"R$9,00"} e {"R$9,00"} para cada tipo.
THEN Edito o tipo de gasto {"Aluguel"} para {"Moradia"} mantendo seu valor
AND Confirmo as alterações
THEN continuo na página de {meu salário} e vejo que a edição que eu fiz foi salva

Scenario: Editando gastos mensais corretamente
Background: 
GIVEN Estou logado no sistema com o usuário {"Matheus"} e senha {"matheus123"}
AND I Estou na página de {meu salário}
THEN Vejo a coluna de gastos mensais com os tipos {"Alimentação"}, {"Transporte"} e {"Aluguel"} e os valores {"R$9,00"}, {"R$9,00"} e {"R$9,00"} para cada tipo.
THEN Edito o tipo de gasto {"Aluguel"} para {" "} mantendo seu valor
AND Confirmo as alterações
THEN continuo na página de {meu salário} e vejo um alerta pedindo para rever o conteúdo preenchido nos tipos de gastos
