import { NgModule } from '@angular/core';
import { ExpensesApi } from './api/expenses.api';
import { ExpensesFormComponent } from './components/expenses-form/expenses-form.component';
import { ExpensesFacade } from './expenses.facade';
import { ExpensesComponent } from './pages/expenses.component';
import { ExpensesRoutingModule } from './expenses-routing.module';

//Material
import {MatInputModule} from '@angular/material/input';
import {MatTableModule} from '@angular/material/table';
import {FormsModule} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
	providers: [ExpensesFacade, ExpensesApi],
	declarations: [
		ExpensesComponent,
		ExpensesFormComponent,
	],
	imports: [
		ExpensesRoutingModule,
		MatTableModule,
		MatInputModule,
		FormsModule,
		MatButtonModule
	],
})
export class ExpensesModule {}
