import { Component, Input, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Observable, of } from 'rxjs';
import { ExpensesFacade } from '../expenses.facade';

@Component({
  selector: 'app-expenses',
  templateUrl: './expenses.component.html',
  styleUrls: ['./expenses.component.css'],
})
export class ExpensesComponent implements OnInit {
  isLoading: Observable<boolean>;

  constructor(
    private readonly expensesFacade: ExpensesFacade,
    private titleService: Title
  ) {
    this.isLoading = this.expensesFacade.isLoading();
    this.titleService.setTitle('Gastos fixos');
  }

  ngOnInit(): void {}
}
