import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { retry, map } from 'rxjs/operators';

import { SourcesIncomeTable } from '../../../../../common/sources-income';
import { Observable } from 'rxjs';

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

  public insertSourcesIncomeTable(
    sourcesIncomeToInsert: SourcesIncomeTable[]
  ): Observable<SourcesIncomeTable[]> {
    return this.http
      .post<any>(this.baseUrl, sourcesIncomeToInsert, { headers: this.headers })
      .pipe(
        retry(2),
        map((res) => {
          if (res.success) {
            const jsonAux = JSON.stringify(sourcesIncomeToInsert);
            localStorage.setItem("sourcesIncome", jsonAux)
            return sourcesIncomeToInsert;
          }
          return [];
        })
      );
  }

  public updateSourceIncome(
    sourceIncomeToUpdate: SourcesIncomeTable
  ): Observable<SourcesIncomeTable[]> {
    return this.http
      .put<any>(this.baseUrl, sourceIncomeToUpdate, { headers: this.headers })
      .pipe(
        retry(2),
        map((res) => {
          return res.result;
        })
      );
  }

  public deleteSourceIncome(
    sourceIncomeId: number
  ): Observable<SourcesIncomeTable[]> {
    return this.http
      .delete<any>(this.baseUrl, {
        headers: this.headers,
        body: { sourceIncome: sourceIncomeId },
      })
      .pipe(
        retry(2),
        map((res) => {
          return res.result;
        })
      );
  }
}
