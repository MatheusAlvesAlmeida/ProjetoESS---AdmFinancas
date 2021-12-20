import { Component, OnInit } from '@angular/core';
import { ViewChild } from '@angular/core';
import { MatTable } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { SourcesIncomeTable } from '../../../../../../common/sources-income';
import { ErrorDialogComponent } from '../error-dialog/error-dialog.component';
import { EditDialogComponent } from '../edit-dialog/edit-dialog.component';

@Component({
  selector: 'app-sources-income-form',
  templateUrl: './sources-income-form.component.html',
  styleUrls: ['./sources-income-form.component.css'],
})
export class SourcesIncomeFormComponent implements OnInit {
  enterAmount: number = 0;
  enterType: string = '';

  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {}

  displayedColumns: string[] = ['type', 'amount', 'actions'];
  dataSource = [];

  @ViewChild(MatTable) table: MatTable<SourcesIncomeTable> | undefined;

  addData() {
    const newElement = {
      id: this.dataSource.length,
      type: this.enterType,
      amount: this.enterAmount,
    };
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
