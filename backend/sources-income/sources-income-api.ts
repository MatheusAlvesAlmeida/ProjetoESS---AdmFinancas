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

  delete(id: number) {
    this.sourcesIncomeArray = this.sourcesIncomeArray.filter(
      (obj) => obj.id !== id
    );
    let idNovo = 0;
    this.sourcesIncomeArray.forEach((element) => {
      element.id = idNovo;
      idNovo += 1;
    });
    return this.sourcesIncomeArray;
  }
}
