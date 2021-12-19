import { Component, Input } from '@angular/core';
import { Observable, of } from 'rxjs';

@Component({
	selector: 'app-loading-spinner',
	templateUrl: './loading-spinner.component.html',
	styleUrls: ['./loading-spinner.component.css'],
})
export class LoadingSpinnerComponent {
	@Input() isLoading: Observable<boolean> = of(false);
}
