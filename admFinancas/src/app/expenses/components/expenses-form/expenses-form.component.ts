import { Component, OnInit } from '@angular/core';
import { ViewChild } from '@angular/core';
import { MatTable } from '@angular/material/table';
import {MatDialog} from '@angular/material/dialog';
import { ExpensesTable } from '../../types/expenses';
import { ErrorDialogComponent } from '../error-dialog/error-dialog.component';
import { EditDialogComponent } from '../edit-dialog/edit-dialog.component';

const ELEMENT_DATA: ExpensesTable[] = [
  {id: 0, percentage: 20, type: 'Alimentação'},
  {id: 1, percentage: 30, type: 'Aluguel'},
  {id: 2, percentage: 25, type: 'Treino'}
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
    const newElement = {id: this.dataSource.length, percentage: this.enterPercentage, type: this.enterType}
    this.dataSource.push(newElement);
    if(this.table) this.table.renderRows();
  }

  removeData(id: number) { 
    this.dataSource = this.dataSource.filter(obj => obj.id !== id);
    if(this.table) this.table.renderRows();
  }

  editData(id: number){
    const dialogRef = this.dialog.open(EditDialogComponent, {
      width: '250px',
      data: {id: id, percentage: this.dataSource[id].percentage, type: this.dataSource[id].type},
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.enterPercentage = result.percentage;
      this.enterType = result.type;
      if(this.checkInput()){
        this.inputError();
        return;
      }
      this.dataSource[id] = result;
      if(this.table) this.table.renderRows();
    });
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
