import { Component, OnInit } from '@angular/core';
import { ViewChild } from '@angular/core';
import { MatTable } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { ExpensesTable } from '../../../../../../common/expenses';
import { ErrorDialogComponent } from '../error-dialog/error-dialog.component';
import { EditDialogComponent } from '../edit-dialog/edit-dialog.component';
import { ExpensesFacade } from '../../expenses.facade';
import { Observable } from 'rxjs';

const ELEMENT_DATA: ExpensesTable[] = [];

@Component({
  selector: 'app-expenses-form',
  templateUrl: './expenses-form.component.html',
  styleUrls: ['./expenses-form.component.css'],
})
export class ExpensesFormComponent implements OnInit {
  isLoading: Observable<boolean>;
  expenses: Observable<ExpensesTable[]>;

  enterPercentage: number = 0;
  enterType: string = '';

  actionButtons: boolean = false;

  constructor(
    public dialog: MatDialog,
    private readonly expensesFacade: ExpensesFacade
  ) {
    this.isLoading = this.expensesFacade.isLoading();
    this.expenses = this.expensesFacade.getExpensesTable();
  }

  ngOnInit(): void {
    this.dataSource = [];
    this.actionButtons = false;
  }

  displayedColumns: string[] = ['percentage', 'type', 'actions'];
  dataSource = [...ELEMENT_DATA];

  @ViewChild(MatTable) table: MatTable<ExpensesTable> | undefined;

  addData() {
    const newElement = {
      id: this.dataSource.length,
      percentage: this.enterPercentage,
      type: this.enterType,
    };
    if (this.checkInput(newElement)) {
      this.inputError();
      return;
    }
    this.dataSource.push(newElement);
    if (this.table) this.table.renderRows();
  }

  removeData(id: number) {
    const result = this.expensesFacade.deleteExpenses(id);
    this.dataSource = [];
    result.subscribe((data) => {
      data.forEach((element) => {
        this.dataSource.push(element);
        if (this.table) this.table.renderRows();
      });
    });
  }

  editData(id: number) {
    const dialogRef = this.dialog.open(EditDialogComponent, {
      width: '250px',
      data: {
        id: id,
        percentage: this.dataSource[id].percentage,
        type: this.dataSource[id].type,
      },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result != null) {
        if (this.checkEdit(result)) {
          this.inputError();
          return;
        }
        const result1 = this.expensesFacade.updateExpenses(result);
        this.dataSource = [];
        result1.subscribe((data) => {
          data.forEach((element) => {
            this.dataSource.push(element);
            if (this.table) this.table.renderRows();
          });
        });
      }
    });
  }

  checkEdit(obj: ExpensesTable) {
    let diff = 100;
    this.dataSource.forEach((element) => {
      if (element.id != obj.id) {
        diff -= element.percentage;
      }
    });
    if (obj.type == '' || obj.percentage <= 0 || obj.percentage > diff)
      return true;
    return false;
  }

  checkInput(obj: ExpensesTable) {
    let diff = 100;
    this.dataSource.forEach((element) => {
      diff -= element.percentage;
    });
    if (obj.type == '' || obj.percentage <= 0 || obj.percentage > diff)
      return true;
    return false;
  }

  inputError() {
    this.dialog.open(ErrorDialogComponent);
  }

  confirmInput() {
    const result = this.expensesFacade.insertExpenses(this.dataSource);
    this.dataSource = [];
    result.subscribe((data) => {
      data.forEach((element) => {
        this.dataSource.push(element);
        if (this.table) this.table.renderRows();
      });
    });
    alert('Gastos fixos confirmados com sucesso!');
    this.actionButtons = true;
  }
}
