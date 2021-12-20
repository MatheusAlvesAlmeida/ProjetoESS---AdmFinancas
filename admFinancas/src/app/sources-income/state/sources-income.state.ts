import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { SourcesIncomeTable } from '../../../../../common/sources-income';

@Injectable({ providedIn: 'root' })
export class SourcesIncomeState {
    private loading: BehaviorSubject<boolean> = new BehaviorSubject(
        false as boolean
      );
      private expensesTable: BehaviorSubject<SourcesIncomeTable[]> = new BehaviorSubject(
        [] as SourcesIncomeTable[]
      );
    
      public isLoading() {
        return this.loading.asObservable();
      }
    
      public setLoading(loading: boolean) {
        this.loading.next(loading);
      }
    
      public getSourcesIncomeTable() {
        return this.expensesTable.asObservable();
      }
    
      public setSourcesIncomeTable(newExpenses: SourcesIncomeTable[]) {
        this.expensesTable.next(newExpenses);
      }
}