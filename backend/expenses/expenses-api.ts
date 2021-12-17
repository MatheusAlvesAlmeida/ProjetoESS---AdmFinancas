import { ExpensesTable } from "../../common/expenses";

export class ExpensesAPI {
  expensesArray: ExpensesTable[] = [];

  getExpensesArray() {
    return this.expensesArray;
  }

  insertExpenses(newExpenses: ExpensesTable[]) {
    newExpenses.forEach(element => {
      if (this.checkInsert(element)) {
        return null;
      }
    });
    this.expensesArray = newExpenses;
    return this.expensesArray;
  }

  updateExpenses(newObj: ExpensesTable) {
    if (this.checkUpdate(newObj)) {
      return null;
    }
    this.expensesArray[newObj.id] = newObj;
    return this.expensesArray;
  }

  delete(id: number){
    this.expensesArray = this.expensesArray.filter(obj => obj.id !== id);
    return this.expensesArray;
  }

  checkInsert(obj: ExpensesTable): boolean {
    let diff = 100;
    this.expensesArray.forEach((element) => {
      diff -= element.percentage;
    });
    console.log(diff);
    if (obj.type == "" || obj.percentage <= 0 || obj.percentage > diff)
      return true;
    return false;
  }

  checkUpdate(obj: ExpensesTable) {
    let diff = 100;
    this.expensesArray.forEach((element) => {
      if (element.id != obj.id) {
        diff -= element.percentage;
      }
    });
    console.log(diff);
    if (obj.type == "" || obj.percentage <= 0 || obj.percentage > diff)
      return true;
    return false;
  }
}
