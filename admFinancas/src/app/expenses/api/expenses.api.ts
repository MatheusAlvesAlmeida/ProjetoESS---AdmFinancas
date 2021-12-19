import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { retry, map } from 'rxjs/operators';

import { ExpensesTable } from '../../../../../common/expenses';
import { Observable } from 'rxjs';

@Injectable()
export class ExpensesApi {
  private headers = new HttpHeaders({ 'Content-Type': 'application/json' });
  private baseUrl = 'http://localhost:3000/api/expenses/';

  public constructor(private readonly http: HttpClient) {}

  public getExpensesTable() {
    return this.http
      .get<ExpensesTable[]>(this.baseUrl, { headers: this.headers })
      .pipe(retry(2));
  }

  public insertExpensesTable(
    expensesToInsert: ExpensesTable[]
  ): Observable<ExpensesTable[]> {
    return this.http
      .post<any>(this.baseUrl, expensesToInsert, { headers: this.headers })
      .pipe(
        retry(2),
        map((res) => {
          if (res.success) return expensesToInsert;
          return [];
        })
      );
  }

  public updateExpense(
    expenseToUpdate: ExpensesTable
  ): Observable<ExpensesTable[]> {
    return this.http
      .put<any>(this.baseUrl, expenseToUpdate, { headers: this.headers })
      .pipe(
        retry(2),
        map((res) => {
          return res.result;
        })
      );
  }

  public deleteExpense(expenseId: number) {
    return this.http
      .request<any>('delete', this.baseUrl, {
        headers: this.headers,
        body: expenseId,
      })
      .pipe(
        retry(2),
        map((res) => {
          if (res.success) return true;
          return false;
        })
      );
  }
}
