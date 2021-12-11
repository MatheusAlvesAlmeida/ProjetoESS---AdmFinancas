import { Component, OnInit } from '@angular/core';
import { ViewChild } from '@angular/core';
import { MatTable } from '@angular/material/table';
import {MatDialog} from '@angular/material/dialog';
import { ExpensesTable } from '../../types/expenses';
import { ErrorDialogComponent } from '../error-dialog/error-dialog.component';

const ELEMENT_DATA: ExpensesTable[] = [
  {id: 1, percentage: 20, type: 'Alimentação'},
  {id: 2, percentage: 30, type: 'Aluguel'},
  {id: 3, percentage: 25, type: 'Treino'}
];

@Component({
  selector: 'app-expenses-form',
  templateUrl: './expenses-form.component.html',
  styleUrls: ['./expenses-form.component.css']
})

export class ExpensesFormComponent implements OnInit {
  
  enterPercentage: number = 0;
  enterType: string = "";

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  displayedColumns: string[] = ['percentage', 'type'];
  dataSource = [...ELEMENT_DATA];

  @ViewChild(MatTable) table: MatTable<ExpensesTable> | undefined;

  addData() {
    if(this.checkInput()){
      this.inputError();
      return;
    }
    const newElement = {id: 1, percentage: this.enterPercentage, type: this.enterType}
    this.dataSource.push(newElement);
    if(this.table) this.table.renderRows();
  }

  removeData() { 
    this.dataSource.pop();
    if(this.table) this.table.renderRows();
  }

  checkInput(){
    let diff = 100;
    this.dataSource.forEach(element => {
      diff -= element.percentage
    });
    console.log(diff)
    if(this.enterType == "" || this.enterPercentage <= 0 || this.enterPercentage > diff) return true;
    return false;
  }

  inputError() {
    this.dialog.open(ErrorDialogComponent);
  }

}
