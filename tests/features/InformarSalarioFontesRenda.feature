Feature: Informar salário e fontes de renda

AS A usuário do sistema
I NEED Uma forma de registrar meu salário e demais fontes de renda
SO THAT Eu possa organizar minhas finanças

Scenario: Adicionar salário e fontes de renda com sucesso
Background: 
GIVEN Eu estou logado no sistema com o usuário {"Gabriel"} e senha {"gabriel123"}
AND I'm on the {salary and income sources} page
AND Eu vejo a opção de informar o meu salário
WHEN Eu coloco meu salário como {4000}
AND Eu vejo a opção de informar o somatório das minhas demais fontes de renda
WHEN Eu coloco meu salário como {4000}
WHEN Eu confirmo as alterações
THEN Eu ainda estou na página {"Salário e demais fontes de renda"} e vejo as alterações que realizei.


Scenario: Adicionar caracteres ao invés de número ao campo de salário e/ou fontes de renda
Background: 
GIVEN Eu estou logado no sistema com o usuário {"Gabriel"} e senha {"gabriel123"}
AND I Eu estou na página {"Salário e demais fontes de renda"}
AND Eu vejo a opção de informar o meu salário
WHEN Eu informo meu salário como sendo {"quatro mil reais"}
WHEN Eu confirmo as alterações
THEN Eu ainda estou na página {"Salário e demais fontes de renda"} e vejo uma mensagem de alerta informando que o salário deve ser um valor numérico.

Scenario: Adicionar salário e/ou fontes de renda com um valor negativo
Background: 
GIVEN Eu estou logado no sistema com o usuário {"Gabriel"} e senha {"gabriel123"}
AND I Eu estou na página {"Salário e demais fontes de renda"}
AND Eu vejo a opção de informar o meu salário
WHEN Eu informo meu salaário como sendo {-4000}
WHEN Eu confirmo as alterações
THEN Eu ainda estou na página {"Salário e demais fontes de renda"} eu vejo uma mensagem de alerta informando que o saário deve ser um valor positivo.

Scenario: Editar salário e fontes de renda de foma incorreta
Background: 
GIVEN Eu estou logado no sistema com o usuário {"Gabriel"} e senha {"gabriel123"}
AND Eu estou na página {"Salário e demais fontes de renda"}
AND Eu vejo o campo de salário preenchido com o valor de {5000}
WHEN Eu informo meu novo salário como sendo {' '}
WHEN Eu confirmo as alterações
THEN Eu ainda estou na página {"Salário e demais fontes de renda"} e vejo uma mensagem de alerta informando que o salário deve ser um valor numérico.

Scenario: Editar salário e fontes de renda com sucesso
Background: 
GIVEN Eu estou logado no sistema com o usuário {"Gabriel"} e senha {"gabriel123"}
AND Eu estou na página {"Salário e demais fontes de renda"}
AND Eu vejo o campo de salário preenchido com o valor de {4000}
WHEN Eu informo meu novo salário como sendo {5000 reais}
WHEN Eu confirmo as alterações
THEN Eu ainda estou na página {"Salário e demais fontes de renda"} e eu vejo uma mensagem informando que o salário deve ser um valor numérico
Then Eu continuo na página {"Salário e demais fontes de renda"}.
