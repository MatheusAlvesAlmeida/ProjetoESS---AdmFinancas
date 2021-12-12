import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignInComponent } from './pages/signin.component';

const routes: Routes = [
  {
    path: 'signin',
    component: SignInComponent,
    data: {
      id: 'signin',
      title: 'SignIn',
      icon: 'home',
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SignInRoutingModule { }
