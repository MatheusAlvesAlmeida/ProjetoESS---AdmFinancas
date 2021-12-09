import { NgModule } from '@angular/core';
import { ExpensesApi } from './api/expenses.api';
import { ExpensesFormComponent } from './components/expenses-form/expenses-form.component';
import { ExpensesFacade } from './expenses.facade';
import { ExpensesComponent } from './pages/expenses.component';


@NgModule({
	providers: [ExpensesFacade, ExpensesApi],
	declarations: [
		ExpensesComponent,
		ExpensesFormComponent
	],
	imports: [],
})
export class HomeModule {}
