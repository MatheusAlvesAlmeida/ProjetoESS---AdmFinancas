import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
    data: {
      id: 'login',
      title: 'Login',
      icon: 'home',
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
