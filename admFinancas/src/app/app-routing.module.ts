import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExpensesComponent } from './expenses/expenses.component';
import { GraphicalReportsComponent } from './graphical-reports/graphical-reports.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NewExpenseComponent } from './new-expense/new-expense.component';
import { SourcersIncomeComponent } from './sourcers-income/sourcers-income.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'sourcesIncome', component: SourcersIncomeComponent },
  { path: 'expenses', component: ExpensesComponent },
  { path: 'graphicalReports', component: GraphicalReportsComponent },
  { path: 'newExpense', component: NewExpenseComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
