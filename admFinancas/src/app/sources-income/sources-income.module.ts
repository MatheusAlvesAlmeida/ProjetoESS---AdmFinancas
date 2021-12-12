import { NgModule } from '@angular/core';
import { SourcesIncomeApi } from './api/sources-income.api';
import { SourcesIncomeFormComponent } from './components/sources-income-form/sources-income-form.component';
import { SourcesIncomeFacade } from './sources-income.facade';
import { SourcesIncomeComponent } from './pages/sources-income.component';
import { SourcesIncomeRoutingModule } from './sources-income-routing.module';
import { ErrorDialogComponent } from './components/error-dialog/error-dialog.component';
//Material
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { EditDialogComponent } from './components/edit-dialog/edit-dialog.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { SharedModule } from '../shared/shared.module';



@NgModule({
	providers: [SourcesIncomeFacade, SourcesIncomeApi],
	declarations: [
		SourcesIncomeComponent,
		SourcesIncomeFormComponent,
		ErrorDialogComponent,
  		EditDialogComponent
	],
	imports: [
		SourcesIncomeRoutingModule,
		MatTableModule,
		MatInputModule,
		FormsModule,
		MatButtonModule,
		MatCardModule,
		MatDialogModule,
		MatIconModule,
		MatFormFieldModule,
		SharedModule
	],
})
export class SourcesIncomeModule {}
