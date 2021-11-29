import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraphicalReportsComponent } from './graphical-reports.component';

describe('GraphicalReportsComponent', () => {
  let component: GraphicalReportsComponent;
  let fixture: ComponentFixture<GraphicalReportsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GraphicalReportsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GraphicalReportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
