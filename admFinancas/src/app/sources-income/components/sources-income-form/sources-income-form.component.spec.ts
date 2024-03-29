import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpensesFormComponent } from './sources-income-form.component';

describe('ExpensesFormComponent', () => {
  let component: ExpensesFormComponent;
  let fixture: ComponentFixture<ExpensesFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExpensesFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpensesFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
