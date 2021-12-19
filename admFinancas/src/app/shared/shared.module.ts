import { NgModule } from '@angular/core';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MatIconModule } from '@angular/material/icon';
import { LoadingSpinnerComponent } from './components/loading-spinner/loading-spinner.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { CommonModule } from '@angular/common';

@NgModule({
  providers: [],
  declarations: [NavbarComponent, LoadingSpinnerComponent],
  imports: [MatIconModule, MatProgressSpinnerModule, CommonModule],
  exports: [NavbarComponent, LoadingSpinnerComponent],
})
export class SharedModule {}
