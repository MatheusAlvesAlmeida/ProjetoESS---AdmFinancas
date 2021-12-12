import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SourcesIncomeComponent } from './pages/sources-income.component';

const routes: Routes = [
  {
    path: 'sources-income',
    component: SourcesIncomeComponent,
    data: {
      id: 'sources-income',
      title: 'Fontes de renda',
      icon: 'home',
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SourcesIncomeRoutingModule { }
