import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'admFinancas';

  constructor(private router: Router) { }

  ngOnInit () {
    const user = localStorage.getItem("user");
    if (!user) {
      this.router.navigate(['/'])
    }
  }
}
