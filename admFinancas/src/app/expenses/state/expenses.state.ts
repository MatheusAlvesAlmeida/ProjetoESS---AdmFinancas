import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ExpensesTable } from '../../../../../common/expenses';

@Injectable({ providedIn: 'root' })
export class ExpensesState {
  private loading: BehaviorSubject<boolean> = new BehaviorSubject(
    false as boolean
  );
  private expensesTable: BehaviorSubject<ExpensesTable[]> = new BehaviorSubject(
    [] as ExpensesTable[]
  );

  public isLoading() {
    return this.loading.asObservable();
  }

  public setLoading(loading: boolean) {
    this.loading.next(loading);
  }

  public getExpensesTable() {
    return this.expensesTable.asObservable();
  }

  public setExpensesTable(newExpenses: ExpensesTable[]) {
    this.expensesTable.next(newExpenses);
  }
}
