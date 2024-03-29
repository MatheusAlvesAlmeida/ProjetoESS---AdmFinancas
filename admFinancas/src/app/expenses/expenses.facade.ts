import { Injectable } from '@angular/core';
import { ExpensesTable } from '../../../../common/expenses';
import { ExpensesApi } from './api/expenses.api';
import { ExpensesState } from './state/expenses.state';

@Injectable()
export class ExpensesFacade {
  private originalExpensesTable: ExpensesTable[] = [];

  public constructor(
    private readonly state: ExpensesState,
    private readonly api: ExpensesApi
  ) {}

  public getExpensesTable() {
    return this.api.getExpensesTable();
  }

  public fetchExpensesTable() {
    this.state.setLoading(true);
    this.api.getExpensesTable().subscribe({
      next: (data) => {
        this.state.setExpensesTable(data);
      },
      complete: () => this.state.setLoading(false),
    });
  }

  public insertExpenses(expenses: ExpensesTable[]) {
    return this.api.insertExpensesTable(expenses);
  }

  public updateExpenses(expense: ExpensesTable) {
    return this.api.updateExpense(expense);
  }

  public deleteExpenses(id: number) {
    return this.api.deleteExpense(id);
  }

  public isLoading() {
    return this.state.isLoading();
  }
}
