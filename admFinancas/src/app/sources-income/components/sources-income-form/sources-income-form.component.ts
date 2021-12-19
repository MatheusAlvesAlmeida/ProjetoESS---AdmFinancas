import { Component, OnInit } from '@angular/core';
import { ViewChild } from '@angular/core';
import { MatTable } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { SourcesIncomeTable } from '../../types/sources-income';
import { ErrorDialogComponent } from '../error-dialog/error-dialog.component';
import { EditDialogComponent } from '../edit-dialog/edit-dialog.component';

const ELEMENT_DATA: SourcesIncomeTable[] = [
  { id: 0, percentage: 20, type: 'Alimentação' },
  { id: 1, percentage: 30, type: 'Aluguel' },
  { id: 2, percentage: 25, type: 'Treino' },
];

@Component({
  selector: 'app-sources-income-form',
  templateUrl: './sources-income-form.component.html',
  styleUrls: ['./sources-income-form.component.css'],
})
export class SourcesIncomeFormComponent implements OnInit {
  enterPercentage: number = 0;
  enterType: string = '';

  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {}

  displayedColumns: string[] = ['percentage', 'type', 'actions'];
  dataSource = [...ELEMENT_DATA];

  @ViewChild(MatTable) table: MatTable<SourcesIncomeTable> | undefined;

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
    this.dataSource = this.dataSource.filter((obj) => obj.id !== id);
    if (this.table) this.table.renderRows();
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
        if (this.checkInput(result)) {
          this.inputError();
          return;
        }
        this.dataSource[id] = result;
        if (this.table) this.table.renderRows();
      }
    });
  }

  checkInput(obj: SourcesIncomeTable) {
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
}
