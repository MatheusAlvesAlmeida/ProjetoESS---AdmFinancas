import { APP_INITIALIZER } from '@angular/core';
import { ExpensesFacade } from './expenses.facade';

export const expensesInitializer = (expensesFacade: ExpensesFacade) => () => {
  expensesFacade.fetchExpensesTable();
};

export const expensesInitializerProvider = {
  provide: APP_INITIALIZER,
  useFactory: expensesInitializer,
  multi: true,
  deps: [ExpensesFacade],
};
