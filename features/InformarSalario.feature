Feature: Informar salário e fontes de renda


AS A system user
I NEED A way to save salary and income sources
SO THAT I can organize my sources of income in a structured way.

Scenario: Adding Salaries and Income Sources Successfully
Background: 
GIVEN I'm logged into the system with the user {"Gabriel"} and password {"gabriel123"}
AND I'm on the {salary and income sources} page
AND I see the option to set salary
WHEN I put my salary as {4000 reais}
AND I see the option to set other income source sum
WHEN I put my salary as {4000 reais}
WHEN I confirm the changes
THEN I'm still on the {salary and income sources} page and see the edits I just made.


Scenario: Adding characters instead of numbers to salary
Background: 
GIVEN I'm logged into the system with the user {"Gabriel"} and password {"gabriel123"}
AND I I'm on the {salary and income sources} page
AND I see the option to set salary
WHEN I put my salary as {'quatro mil' reais}
WHEN I confirm the changes
THEN I'm still on the {salary and income sources} page and I see an alert stating that the salary must be a number.

Scenario: Adding salary and income source with negative values
Background: 
GIVEN I'm logged into the system with the user {"Gabriel"} and password {"gabriel123"}
AND I I'm on the {salary and income sources} page
AND I see the option to set salary
WHEN I put my salary as {-4000 reais}
WHEN I confirm the changes
THEN I'm still on the {salary and income sources} page and I see an alert stating that the salary cannot be a negative value.

Scenario: Editing Salary and Income Sources Incorrectly
Background: 
GIVEN I'm logged into the system with the user {"Gabriel"} and password {"gabriel123"}
AND I'm on the {salary and income sources} page
AND I see the salary filled with the value {5000 reais}
WHEN I put my new salary as {' '}
WHEN I confirm the changes
THEN I'm still on the {salary and income sources} page and I see an alert stating that the salary must be a number.

Scenario: Editing Salary and Income Sources Correctly
Background: 
GIVEN I'm logged into the system with the user {"Gabriel"} and password {"gabriel123"}
AND I'm on the {salary and income sources} page
AND I see the salary filled with the value {4000 reais}
WHEN I put my new salary as {5000 reais}
WHEN I confirm the changes
THEN I'm still on the {salary and income sources} page and I see an alert stating that the salary must be a number
Then I stay on the page.
