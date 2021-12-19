import { SourcesIncomeTable } from "../../common/sources-income";

export class SourcesIncomeAPI {
  sourcesIncomeArray: SourcesIncomeTable[] = [];

  getsourcesIncomeArray() {
    return this.sourcesIncomeArray;
  }

  insertSourcesIncome(newSourcesIncome: SourcesIncomeTable[]) {
    this.sourcesIncomeArray = newSourcesIncome;
    return this.sourcesIncomeArray;
  }

  updateSourcesIncome(newObj: SourcesIncomeTable) {
    this.sourcesIncomeArray[newObj.id] = newObj;
    return this.sourcesIncomeArray;
  }

  delete(id: number){
    this.sourcesIncomeArray = this.sourcesIncomeArray.filter(obj => obj.id !== id);
    return this.sourcesIncomeArray;
  }
}
