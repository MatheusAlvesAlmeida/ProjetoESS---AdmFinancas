Feature: Definir gastos fixos

AS A Usuário do sistema
I NEED Uma maneira de definir os gastos fixos mensais
SO THAT I Possa organizar minhas finanças de uma maneira melhor

Scenario: Adicionando gastos mensais COM sucesso
Background: 
GIVEN Estou logado no sistema com o usuário "Matheus" e senha "matheus123"
AND I Estou na página de finanças gerais
THEN Vejo a coluna de gastos mensais
WHEN Adiciono os tipos de gastos mensais para "Alimentação", "Transporte" e "Aluguel" e coloco os valores "R$9,00", "R$9,00" e "R$9,00" para cada tipo.
AND Eu confirmo as alterações
THEN continuo na página de finanças gerais e vejo as edições que acabei de fazer

Scenario: Adicionando gastos mensais SEM preencher todos os tipos colocados
Background: 
GIVEN Estou logado no sistema com o usuário "Matheus" e senha "matheus123"
AND I Estou na página de finanças gerais
THEN Vejo a coluna de gastos mensais
WHEN Edito os tipos de gastos mensais para "Alimentação", "Transporte" e "Aluguel" e coloco os valores "-R$9,00" e "-R$9,00" para os dois primeiros tipos.
AND Eu confirmo as alterações
THEN continuo na página de finanças gerais e vejo um alerta pedindo pra preencher todos os valores dos tipos de gastos inseridos

Scenario: Adicionando gastos mensais inserindo números negativos nos valores
Background: 
GIVEN Estou logado no sistema com o usuário "Matheus" e senha "matheus123"
AND I Estou na página de finanças gerais
THEN Vejo a coluna de gastos mensais
WHEN Edito os tipos de gastos mensais para "Alimentação", "Transporte" e "Aluguel" e coloco os valores "-R$9,00", "-R$9,00" e "-R$9,00" para cada tipo. 
AND Eu confirmo as alterações
THEN continuo na página de finanças gerais e vejo um alerta afirmando que os valores dados são inválidos

Scenario: Editando gastos mensais corretamente
Background: 
GIVEN Estou logado no sistema com o usuário "Matheus" e senha "matheus123"
AND I Estou na página de finanças gerais
THEN Vejo a coluna de gastos mensais com os tipos "Alimentação", "Transporte" e "Aluguel" e os valores "R$9,00", "R$9,00" e "R$9,00" para cada tipo.
THEN Edito o tipo de gasto "Aluguel" para "Moradia" mantendo seu valor
AND Confirmo as alterações
THEN continuo na página de finanças gerais e vejo que a edição que eu fiz foi salva

Scenario: Editando gastos mensais incorretamente
Background: 
GIVEN Estou logado no sistema com o usuário "Matheus" e senha "matheus123"
AND I Estou na página de finanças gerais
THEN Vejo a coluna de gastos mensais com os tipos "Alimentação", "Transporte" e "Aluguel" e os valores "R$9,00", "R$9,00" e "R$9,00" para cada tipo.
THEN Edito o tipo de gasto "Aluguel" para " " e atualizo seu valor para "-R$10,00"
AND Confirmo as alterações
THEN continuo na página de finanças gerais e vejo um alerta afirmando que os valores dados são inválidos
