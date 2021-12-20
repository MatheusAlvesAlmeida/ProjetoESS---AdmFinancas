import { Component, OnInit } from '@angular/core';
import { ViewChild } from '@angular/core';
import { MatTable } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { SourcesIncomeTable } from '../../../../../../common/sources-income';
import { ErrorDialogComponent } from '../error-dialog/error-dialog.component';
import { EditDialogComponent } from '../edit-dialog/edit-dialog.component';
import { SourcesIncomeFacade } from '../../sources-income.facade';
import { Observable } from 'rxjs';

const ELEMENT_DATA: SourcesIncomeTable[] = [];
@Component({
  selector: 'app-sources-income-form',
  templateUrl: './sources-income-form.component.html',
  styleUrls: ['./sources-income-form.component.css'],
})
export class SourcesIncomeFormComponent implements OnInit {
  isLoading: Observable<boolean>;
  sourcesIncome: Observable<SourcesIncomeTable[]>;

  enterSalary: number = 0;
  enterAmount: number = 0;
  enterType: string = '';

  actionButtons: boolean = false;
  confirmButton: boolean = false;

  constructor(public dialog: MatDialog, private readonly sourcesIncomeFacade: SourcesIncomeFacade) {
    this.isLoading = this.sourcesIncomeFacade.isLoading();
    this.sourcesIncome = this.sourcesIncomeFacade.getSourcesIncomeTable();
  }

  ngOnInit(): void {}

  displayedColumns: string[] = ['type', 'amount', 'actions'];
  dataSource : SourcesIncomeTable[] = [];

  @ViewChild(MatTable) table: MatTable<SourcesIncomeTable> | undefined;

  addNewAmount() {
    const newElement = {
      id: this.dataSource.length,
      type: this.enterType,
      amount: this.enterAmount,
    };
    this.dataSource.push(newElement);
    if (this.table) this.table.renderRows();
    this.enterType = '';
    this.enterAmount = 0;
    this.confirmButton = true;
  }

  addSalary() {
    const newElement = {
      id: this.dataSource.length,
      type: 'Salário',
      amount: this.enterSalary,
    };
    this.dataSource.push(newElement);
    if (this.table) this.table.renderRows();
    this.enterSalary = 0;
    this.confirmButton = true;
  }

  removeData(id: number) {
    this.dataSource = this.dataSource.filter((obj) => obj.id !== id);
    if (this.table) this.table.renderRows();
    if(this.dataSource.length == 0) this.confirmButton = false;
  }

  editData(id: number) {
    const dialogRef = this.dialog.open(EditDialogComponent, {
      width: '250px',
      data: {
        id: id,
        type: this.dataSource[id].type,
        amount: this.dataSource[id].amount,
      },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result != null) {
        this.dataSource[id] = result;
        if (this.table) this.table.renderRows();
      }
    });
  }

  inputError() {
    this.dialog.open(ErrorDialogComponent);
  }

  confirmInput() {
    const result = this.sourcesIncomeFacade.insertSourcesIncome(this.dataSource);
    this.dataSource = [];
    result.subscribe((data) => {
      data.forEach((element) => {
        this.dataSource.push(element);
        if (this.table) this.table.renderRows();
      });
    });
    alert('Fontes de renda confirmadas com sucesso!');
    this.actionButtons = true;
    this.confirmButton = false;
  }
}
