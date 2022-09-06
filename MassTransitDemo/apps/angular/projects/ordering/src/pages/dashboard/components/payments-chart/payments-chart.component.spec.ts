import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentsChartComponent } from './payments-chart.component';

describe('PaymentsChartComponent', () => {
  let component: PaymentsChartComponent;
  let fixture: ComponentFixture<PaymentsChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaymentsChartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentsChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
