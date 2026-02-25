import { Component, OnInit, inject } from '@angular/core';
import { OrderDto, OrderService } from '../proxy';

@Component({
  selector: 'lib-ordering',
  templateUrl: './ordering.component.html',
})
export class OrderingComponent implements OnInit {
  orders: OrderDto[] = [];

  protected readonly orderService = inject(OrderService);

  ngOnInit(): void {
    this.orderService.getList().subscribe(response => {
      this.orders = response;
    });
  }
}
