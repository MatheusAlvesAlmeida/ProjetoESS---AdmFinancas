import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExpensesComponent } from './pages/expenses.component';

const routes: Routes = [
  {
    path: 'expenses',
    component: ExpensesComponent,
    data: {
      id: 'expenses',
      title: 'Gastos fixos',
      icon: 'home',
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExpensesRoutingModule { }
