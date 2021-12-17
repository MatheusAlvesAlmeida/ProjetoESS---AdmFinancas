import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ExpensesTable } from '../../../../../common/expenses';

@Injectable({ providedIn: 'root' })
export class ExpensesState {
  private expensesTable: BehaviorSubject<ExpensesTable[]> = new BehaviorSubject(
    [] as ExpensesTable[]
  );

  public getExpensesTable() {
    return this.expensesTable.asObservable();
  }

  public setExpensesTable(newExpenses: ExpensesTable[]) {
    this.expensesTable.next(newExpenses);
  }
}
