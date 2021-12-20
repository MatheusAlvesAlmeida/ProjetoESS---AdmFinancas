import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { retry, map } from 'rxjs/operators';

import { SourcesIncomeTable } from '../../../../../common/sources-income';

@Injectable()
export class SourcesIncomeApi {
  private headers = new HttpHeaders({ 'Content-Type': 'application/json' });
  private baseUrl = 'http://localhost:3000/api/sources-income/';

  public constructor(private readonly http: HttpClient) {}

  public getSourcesIncomeTable() {
    return this.http
      .get<SourcesIncomeTable[]>(this.baseUrl, { headers: this.headers })
      .pipe(retry(2));
  }

  public insertSourcesIncomeTable(sourcesIncomeToInsert: SourcesIncomeTable[]) {
    return this.http
      .post<any>(this.baseUrl, sourcesIncomeToInsert, { headers: this.headers })
      .pipe(
        retry(2),
        map((res) => {
          if (res.success) return true;
          return false;
        })
      );
  }

  public updateExpense(sourcesIncomeToUpdate: SourcesIncomeTable) {
    return this.http
      .put<any>(this.baseUrl, sourcesIncomeToUpdate, { headers: this.headers })
      .pipe(
        retry(2),
        map((res) => {
          if (res.success) return true;
          return false;
        })
      );
  }

  public deleteExpense(sourceIncomeId: number) {
    return this.http
      .request<any>('delete', this.baseUrl, {
        headers: this.headers,
        body: sourceIncomeId,
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
