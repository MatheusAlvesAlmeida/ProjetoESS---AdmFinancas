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
    return this.state.getExpensesTable();
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

  public isLoading() {
    return this.state.isLoading();
  }
}
