import { Component, OnInit } from '@angular/core';
import { ViewChild } from '@angular/core';
import { MatTable } from '@angular/material/table';
import { ExpensesTable } from '../../types/expenses';

const ELEMENT_DATA: ExpensesTable[] = [
  {percentage: 20, type: 'Alimentação'},
  {percentage: 30, type: 'Aluguel'},
  {percentage: 40, type: 'Investimentos'},
  {percentage: 50, type: 'Treino'}
];

@Component({
  selector: 'app-expenses-form',
  templateUrl: './expenses-form.component.html',
  styleUrls: ['./expenses-form.component.css']
})

export class ExpensesFormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  displayedColumns: string[] = ['percentage', 'type'];
  dataSource = [...ELEMENT_DATA];

  @ViewChild(MatTable) table: MatTable<ExpensesTable> | undefined;

  addData() {
    const randomElementIndex = Math.floor(Math.random() * ELEMENT_DATA.length);
    this.dataSource.push(ELEMENT_DATA[randomElementIndex]);
    if(this.table) this.table.renderRows();
  }

  removeData() { 
    this.dataSource.pop();
    if(this.table) this.table.renderRows();
  }

}
