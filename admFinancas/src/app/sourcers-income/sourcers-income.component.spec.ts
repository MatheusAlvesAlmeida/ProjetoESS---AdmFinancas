import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SourcersIncomeComponent } from './sourcers-income.component';

describe('SourcersIncomeComponent', () => {
  let component: SourcersIncomeComponent;
  let fixture: ComponentFixture<SourcersIncomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SourcersIncomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SourcersIncomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
