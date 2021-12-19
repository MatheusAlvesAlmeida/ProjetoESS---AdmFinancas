import { Component, Input, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ExpensesFacade } from '../expenses.facade';

@Component({
  selector: 'app-expenses',
  templateUrl: './expenses.component.html',
  styleUrls: ['./expenses.component.css'],
})
export class ExpensesComponent implements OnInit {
  isLoading: Observable<boolean>;

  constructor(private readonly expensesFacade: ExpensesFacade) {
    this.isLoading = this.expensesFacade.isLoading();
  }

  ngOnInit(): void {}
}
