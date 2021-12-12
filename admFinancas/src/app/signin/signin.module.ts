import { NgModule } from '@angular/core';
import { SignInApi } from './api/signin.api';
import { SignInFacade } from './signin.facade';
import { SignInComponent } from './pages/signin.component';
import { SignInRoutingModule } from './signin-routing.module';
//Material
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  providers: [SignInFacade, SignInApi],
  declarations: [
    SignInComponent
  ],
  imports: [
    SignInRoutingModule,
    MatTableModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
    MatCardModule,
    MatDialogModule,
    MatIconModule,
  ],
})
export class SignInModule {}
