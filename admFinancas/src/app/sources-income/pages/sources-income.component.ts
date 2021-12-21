import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-sources-income',
  templateUrl: './sources-income.component.html',
  styleUrls: ['./sources-income.component.css']
})
export class SourcesIncomeComponent implements OnInit {

  constructor(
    private titleService: Title
  ) {
    this.titleService.setTitle('Fontes de renda');
  }

  ngOnInit(): void {
  }

}
