import { Injectable } from '@angular/core';
import { SourcesIncomeTable } from '../../../../common/sources-income';
import { SourcesIncomeApi } from './api/sources-income.api';
import { SourcesIncomeState } from './state/sources-income.state';

@Injectable()
export class SourcesIncomeFacade {
    private originalSourcesIncomeTable: SourcesIncomeTable[] = [];

  public constructor(
    private readonly state: SourcesIncomeState,
    private readonly api: SourcesIncomeApi
  ) {}

  public getSourcesIncomeTable() {
    return this.api.getSourcesIncomeTable();
  }

  public fetchSourcesIncomeTable() {
    this.state.setLoading(true);
    this.api.getSourcesIncomeTable().subscribe({
      next: (data) => {
        this.state.setSourcesIncomeTable(data);
      },
      complete: () => this.state.setLoading(false),
    });
  }

  public insertSourcesIncome(sourcesIncome: SourcesIncomeTable[]) {
    return this.api.insertSourcesIncomeTable(sourcesIncome);
  }

  public updateSourcesIncome(sourcesIncome: SourcesIncomeTable) {
    return this.api.updateSourceIncome(sourcesIncome);
  }

  public deleteSourcesIncome(id: number) {
    return this.api.deleteSourceIncome(id);
  }

  public isLoading() {
    return this.state.isLoading();
  }
}