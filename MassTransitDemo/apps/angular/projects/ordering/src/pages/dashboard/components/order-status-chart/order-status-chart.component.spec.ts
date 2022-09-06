import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderStatusChartComponent } from './order-status-chart.component';

describe('OrderStatusChartComponent', () => {
  let component: OrderStatusChartComponent;
  let fixture: ComponentFixture<OrderStatusChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderStatusChartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderStatusChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
