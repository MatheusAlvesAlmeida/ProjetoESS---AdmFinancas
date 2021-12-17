export class Expenses {
    id: number;
    percentage: number;
    type: string;
  
    constructor() {
      this.clean();
    }
  
  
    clean(): void {
      this.id = -1;
      this.percentage = 0;
      this.type = "";
    }
  
    clone(): Expenses {
      var expenses: Expenses = new Expenses();
      expenses.copyFrom(this);
      return expenses;
    }
  
    copyFrom(from: Expenses): void {
      this.id = from.id;
      this.percentage = from.percentage;
      this.type = from.type;
    }
  }