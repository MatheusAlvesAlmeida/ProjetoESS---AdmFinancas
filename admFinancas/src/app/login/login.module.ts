import { NgModule } from '@angular/core';
import { LoginApi } from './api/login.api';
import { LoginFacade } from './login.facade';
import { LoginComponent } from './pages/login.component';
import { LoginRoutingModule } from './login-routing.module';
//Material
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  providers: [LoginFacade, LoginApi],
  declarations: [
    LoginComponent
  ],
  imports: [
    LoginRoutingModule,
    MatTableModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
    MatCardModule,
    MatDialogModule,
    MatIconModule,
  ],
})
export class LoginModule {}
