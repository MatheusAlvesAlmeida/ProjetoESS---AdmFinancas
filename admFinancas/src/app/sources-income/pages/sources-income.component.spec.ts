import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SourcesIncomeComponent } from './sources-income.component';

describe('SourcesIncomeComponent', () => {
  let component: SourcesIncomeComponent;
  let fixture: ComponentFixture<SourcesIncomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SourcesIncomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SourcesIncomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
