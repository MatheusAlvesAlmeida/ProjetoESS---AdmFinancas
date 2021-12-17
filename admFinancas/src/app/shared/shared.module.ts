import { NgModule } from '@angular/core';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
    providers: [],
    declarations: [
        NavbarComponent,
    ],
    imports: [MatIconModule],
    exports: [NavbarComponent,],
})

export class SharedModule { }