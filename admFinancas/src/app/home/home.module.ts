import { NgModule } from '@angular/core';
import { HomeFacade } from './home.facade';
import { HomeComponent } from './pages/home.component';
import { HomeRoutingModule } from './home-routing.module';
//Material
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  providers: [HomeFacade],
  declarations: [
    HomeComponent
  ],
  imports: [
    HomeRoutingModule,
    MatTableModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
    MatCardModule,
    MatDialogModule,
    MatIconModule,
  ],
})
export class HomeModule {}
